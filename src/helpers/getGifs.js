
export const getGifs = async( category ) => {

    // Peticion HTTP a la API de GIPHY
    /*         ----- encodeURI()escapa carateres especiales y los trasnforma %20 ejemplo------------------------- 
        PASAMOS A category en los parametros de busqueda, para que la categoria que pongamos sea la que haga la query */
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=p77cnA4G7OmCtqven969B82ezliNVp3C`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}