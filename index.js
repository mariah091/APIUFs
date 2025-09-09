import express from 'express';
import { buscarUFs , buscarUfPorId , buscarUFsPorNome } from "./sevico/servico.js";

const app = express();


app.get('/ufs', (req, res) => {
const nomeUF = req.query.busca;
const resultado = nomeUF ? buscarUFsPorNome(nomeUF) : colecaoUf;

if (resultado.length > 0 ) {
    res.json(resultado);
}else{
    res.status(404).send({ "erro": "nenhuma uf encontrada" });
}


app.get('/ufs/:iduf', (req, res) => {
    const uf = buscarUfPorId(req.params.iduf);

    if (uf) {
        res.json(uf);
    }else if (isNam(parseInt(req.params.iduf))) {
        res.status(400).send({"erro": "Requisição inválida"});
    }else{
        res.status(404).send({"erro": "UF não encotrada"});
    }
    });

});  


app.listen(8080, () => {
let data = new Date();
console.log('servidor iniciado na porta 8080 em: ' + data);
});