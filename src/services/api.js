export const RESTAURANTS_API_URL =
  'https://api-ebac.vercel.app/api/efood/restaurantes'

export const CHECKOUT_API_URL =
  'https://api-ebac.vercel.app/api/efood/checkout'

export const fetchRestaurants = async (signal) => {
  const response = await fetch(RESTAURANTS_API_URL, { signal })

  if (!response.ok) {
    throw new Error(`Não foi possível carregar os restaurantes (${response.status}).`)
  }

  const data = await response.json()

  if (!Array.isArray(data)) {
    throw new Error('A API retornou os restaurantes em um formato inesperado.')
  }

  return data
}

export const submitCheckout = async (payload) => {
  const response = await fetch(CHECKOUT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    throw new Error(
      data?.message || `Não foi possível concluir o pedido (${response.status}).`
    )
  }

  if (!data || data.orderId === undefined || data.orderId === null) {
    throw new Error('A API respondeu sem o número do pedido.')
  }

  return data
}
