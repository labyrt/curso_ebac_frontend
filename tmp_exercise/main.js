document.addEventListener('DOMContentLoaded', () => {
    const githubUser = 'labyrt';
    const apiUrl = `https://api.github.com/users/${githubUser}`;

    const elements = {
        name: document.querySelector('#name'),
        username: document.querySelector('#username'),
        avatar: document.querySelector('#avatar'),
        repos: document.querySelector('#repos'),
        followers: document.querySelector('#followers'),
        following: document.querySelector('#following'),
        link: document.querySelector('#link'),
        status: document.querySelector('#request-status')
    };

    function fillProfile(profile) {
        elements.name.textContent = profile.name || profile.login;
        elements.username.textContent = `@${profile.login}`;
        elements.avatar.src = profile.avatar_url;
        elements.avatar.alt = `Avatar de ${profile.name || profile.login}`;
        elements.repos.textContent = profile.public_repos;
        elements.followers.textContent = profile.followers;
        elements.following.textContent = profile.following;
        elements.link.href = profile.html_url;
        elements.link.classList.remove('is-loading');
        elements.link.removeAttribute('aria-disabled');
        elements.status.textContent = '';
    }

    function showError() {
        elements.name.textContent = 'Perfil indisponível';
        elements.username.textContent = `@${githubUser}`;
        elements.link.href = `https://github.com/${githubUser}`;
        elements.link.classList.remove('is-loading');
        elements.link.removeAttribute('aria-disabled');
        elements.status.textContent = 'Não foi possível carregar os dados. Tente novamente mais tarde.';
        elements.status.classList.add('is-error');
    }

    async function loadProfile() {
        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }

            const profile = await response.json();
            fillProfile(profile);
        } catch (error) {
            console.error('Erro ao consultar a API do GitHub:', error);
            showError();
        }
    }

    loadProfile();
});
