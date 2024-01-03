export const getGuitarras = async (url) => {
    const response = await fetch(`${process.env.API_URL}/api/guitarras?filters[url]=${url}&populate=*`)
    const { data } = await response.json();
    return data;

}
