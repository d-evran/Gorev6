const BASE_URL = "https://rickandmortyapi.com/api";
const URL_CHARACKTER = `${BASE_URL}/character`;

function getCharacters() {
    return fetch(URL_CHARACKTER)
        .then((res) => res.json())
        .then((char) => char.results)
        .catch((error) => error);
}