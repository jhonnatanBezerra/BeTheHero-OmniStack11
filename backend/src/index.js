const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);


/**
 * Rotas e REcursos
 */

/**
 * Metodos HTTP
 * GET: Busca/Listar uma infomação no Back-End
 * POST: Criar uma informação  no back-end
 * PUT: Altera uma infomação no back-end
 * DELETE: Deletar uma informação no back-end
 */


/**
 * Tipos de parametros:
 * Query Parms: Parametros  nomeados enviados na rota apos "?" geralmente
 * são (Filtros, paginação) podem ser juntados com &
 *
 * Rout parms: parametros utilizados  para identificar recursos
 *
 * Requeste Body: corpo da requisição, utilizado para criar ou alterar recursos
 */




