const express = require('express');
const core = require('cors');
const routes = require('./routes');

const app= express();
app.use(cors(/***{ origin : http} */));
app.use(express.json());
app.use(routes);
app.listen(3333);





/**
 * rota / recurso
 */
/**
 * metodos http
 * 
 * GET : Buscar uma informação do back-end
 * POST: Criar uma informação no back-ind
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informaçao no back-end
 */

 /**
  * tipos de paramentros
  * 
  *  request.Query  Params: Parametros nomeados enviados na rota apos "?" (filtros,paginacao)
  * Route  request.Params: Parametros Ultilizados para identificar recursos
  * Request  request.Body: Corpo d requisição, ultilizado para criar ou alterar recursos
  */
/**
 * sq
 */
/**
 * Drive:select * from users
 * Query Builder:tabela(usuario).select(*).where()
 */

