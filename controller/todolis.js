const express = require('express')
const routes = express.Router()
const todolisService = require('../service/todolis')

routes.get('/',todolisService.getTodos)
routes.post('/',todolisService.postTodos)
routes.delete('/:id',todolisService.deleteTodos)
routes.put('/:id',todolisService.updateTodos)

module.exports = routes