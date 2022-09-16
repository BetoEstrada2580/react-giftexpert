export const getGifs = async (category) => {
    const APIKEY = "DU47toCmNYMUn411NO5NKRTLPwTZD9Rl";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${category}&limit=10`;
    const response = await fetch(url);
    const { data = [] } = await response.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    // console.log(gifs);
    return gifs;
}