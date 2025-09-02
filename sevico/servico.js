import colecaoUf from "../dados/dados.js";

//Retorna toda coleção
export const buscarUFs = () => {
return colecaoUf;
};
//Busca UF pelo nome
export const buscarUFsPorNome = (nomeUf) => {
return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

export const buscarUfPorId = (id) => {
const idUF = parseInt(id);
return colecaoUf.find(uf => uf.id === idUF);
}