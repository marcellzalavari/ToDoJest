const TodoController = require('../controllers/todo.controller')
const TodoModel = require('../models/todo.model')
const httpMocks = require('node-mocks-http')

TodoModel.create = jest.fn()

describe('TodoController.createTodo', ()=>{
    it('A createTodo-nak fgv-nek kellene lennie', ()=>{
        expect(typeof TodoController.createTodo).toBe('function')
    })

    it('meg kellene hívni a TodoModel.create metódust', ()=>{
        let req, res, next
        req = httpMocks.createRequest()
        res = httpMocks.createResponse()
        next = null
        TodoController.createTodo(req, res, next)
        expect(TodoModel.create).toHaveBeenCalled()
    })
})