export const RESTAURANTS_API_URL =
  'https://api-ebac.vercel.app/api/efood/restaurantes'

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
