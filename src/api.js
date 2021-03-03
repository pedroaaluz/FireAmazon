const axios = require('axios');

const focoIncendioAldeia = (latAldeia, longAldeia, latImpe, longImpe, Namealdeia, image, description) => {

  const distancia = Math.sqrt(Math.pow(latImpe - latAldeia, 2) + Math.pow(longImpe - longAldeia, 2));

  if (distancia <= 0.5) {
    return { latAldeia, longAldeia, Namealdeia, image, description };
  }
};

export const pegar_fogo = async (places) => {
  try {

    let pIncendio = [];
    let aux;
    const response = await axios({
      method: 'get',
      url: 'http://queimadas.dgi.inpe.br/queimadas/dados-abertos/api/focos/?pais_id=33&estado_id=15',
    });

    const pontosImpe = response.data;

    pontosImpe.map((pontoImpe) => {

      places.forEach(aldeia => {
        if(pontoImpe.properties.risco_fogo) {
          aux = focoIncendioAldeia(aldeia.latitude, aldeia.longitude, pontoImpe.properties.latitude, pontoImpe.properties.longitude, aldeia.title, aldeia.image, aldeia.description)
          if (aux) {
            pIncendio.push(aux);
          }
        }
      });

    });
    console.log(pIncendio)

    return pIncendio;
  } catch (error) {
    console.log(error)
    return "O serviço do impe esta indisponivel";

  }

}


