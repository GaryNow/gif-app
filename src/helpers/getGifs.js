export const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=1uRgOYi1jmIL7lGb8nUq5i0Kc35Iwy5f&q=${category}&limit=9`;
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  // console.log(gifs)
  return gifs
}
