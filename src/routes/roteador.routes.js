import { Router } from "express";
import controller from "../controllers/controller.js";

const roteador = new Router()

roteador.get('/l/:link_encurtado',controller.acessarLink)
roteador.post('/registrar',controller.encurtarLink)
roteador.get('/listarRegistros',controller.listarEncurtamentos)
roteador.put('/desativarRegistro/:id_registro',controller.desativarEncurtamento)

export default roteador