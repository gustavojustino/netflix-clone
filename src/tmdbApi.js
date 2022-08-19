// API PARA REQUISIÇÃO DAS INFORMAÇÕES DOS FILMES 

const API_KEY = 'fd143c7c7b8d392c3e3eded15bf967d8';
const API_BASE = 'https://api.themoviedb.org/3';
const ptBR = '&language=pt-BR';

const getFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

const tmdbApi = () => {
  let getHomeList = async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais NetFlix',
                items: await getFetch(`/discover/tv?with_network=213&${ptBR}&api_key=${API_KEY}`)
            },
             
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await getFetch(`/trendin/all/week?${ptBR}&api_key${API_KEY}`)
            },

            {
                slug: 'toprated',
                title: 'Em alta',
                items: await getFetch(`/movie/top_rated?${ptBR}&api_key${API_KEY}`)
            },

            {
                slug: 'action',
                title: 'Filmes de ação',
                items: await getFetch(`/discover/movie?with_genres=28${ptBR}&api_key${API_KEY}`)
            },

            {
                slug: 'Comedy',
                title: 'Filmes de comédia',
                items: await getFetch(`/discover/movie?with_genres=35&${ptBR}&api_key${API_KEY}`)
            },

            {
                slug: 'horror',
                title: 'Filmes de terror',
                items: await getFetch(`/discover/movie?with_genres=27&${ptBR}&api_key${API_KEY}`)
            },

            {
                slug: 'romance',
                title: 'Filmes de romance',
                items: await getFetch(`/discover/movie?with_genres=10749&${ptBR}&api_key${API_KEY}`)
            },

            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await getFetch(`/discover/movie?with_genres=99&${ptBR}&api_key${API_KEY}`)
            }
    ]

    }
}
export default tmdbApi;