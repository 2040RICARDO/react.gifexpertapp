export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=uqIRTYSW4Dmg8ExIX81izBZ79v35AJII`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gif = data.map(({ id, title, images }) => (
        {
            id,
            title,
            url: images?.downsized_medium.url
        }
    ))
    return gif;
}