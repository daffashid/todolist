const { text } = require('express');
const todolist = require('../model/todomodel')

// GET
 function getTodo(req,res){
    res.send(todolist.rows)
}

// CREATE
function postTodo(req,res){
    const {text,done} = req.body
    const id = math.floor(Math.random()*100);
    todolist.rows.push({
        id : id,
        text : text,
        done : done
})

    res.send({
        id : id,
        success : true
    })
}

// DELETE
function deleteTodo(req,res){
    const {id} = req.params;
    const index = todolist.rows.findIndex(x => x.id === parseInt(id))
    todolist.rows.splice(index,  1)

    res.send({  
        id : id,
        delete : true
    })
}

// UPDATE
function updateTodo(req,res){
    const {id} = req.params;
    const {text,done} = req.body
    const index = todolist.rows.findIndex(x => x.id === parseInt(id))

    if(!text && !done){
        todolist.rows[index].text = text
        todolist.rows[index].done = done
    }

    else if(text){
        todolist.rows[index].text = text
    }

    else if(done){
        todolist.rows[index].done = done
    }

    else{
        res.send("Tidak ada data yang diupdate")
    }


    res.send({
        id : id,
        text : text,
        done : done,
        update : true
    })
}


module.exports = {
    getTodo,
    postTodo,
    deleteTodo,
    updateTodo
}