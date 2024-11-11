const ToDoController = require('../controllers/todo.controller')
const ToDoModel = require('../models/todo.model')
const httpMocks = require('node-mocks-http')
const newToDo = require('./mock-data/new-todo.json')
const TodoModel = require('../models/todo.model')

ToDoModel.create = jest.fn()

let req, res, next
beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
    next = null
})

describe('ToDoController.createToDo', ()=>{

    beforeEach(()=>{
        req.body = newToDo
    })

    it('A createToDo-nak fgv-nek kellene lennie', () => {
        expect(typeof ToDoController.createToDo).toBe('function')
    })

    it('Meg kellene hívni a ToDoModel.create metódust.', () => {
        ToDoController.createToDo(req, res, next)
        expect(ToDoModel.create).toHaveBeenCalledWidth(newToDo)
    })

    it('A backend 201-es státuszkóddaé kellene visszatérjen', () => {

        ToDoController.createToDo(req, res, next)
        expect(res.statusCode).toBe(201)
        expect(res._isEndCalled()).toBeTruthy()
    })

    it('A válaszban json adatot kellene kapni',()=>{
        TodoModel.create.mockReturnValue(newToDo)
        ToDoController.createTodo(req,res,next)
        expect(res._getJSONData()).toStrictEqual(newToDo)        
    })

})