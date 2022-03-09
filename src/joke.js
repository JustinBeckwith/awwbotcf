export async function getRandomJoke() {
    const response = await fetch('https://some-random-api.ml/joke');
    const data = await response.json();
    return data.joke;
}