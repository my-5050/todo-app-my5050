#! usr/bin/src node
import inquirer from "inquirer";

let todos : string[] =[ ];
async function createtodo(todo:string[]){
    do{let ans = await inquirer.prompt({
        type:"list",
        name:"select",
        message:"select an operation",
        choices:[ "add","update" , "delete" , "view"]
        
        })
        if (ans.select === "add"){
            let addtodo=await inquirer.prompt({
                type:"input",
                message:"Add item in the list",
                name:"todo"
         });
            todo.push(addtodo.todo)
            todos.forEach(todo=>console.log(todo));
        }
        
        
        
        if (ans.select === "update"){
        let updatetodo= await inquirer.prompt({
            type:"list",
            message:"update item in the list",
            name:"todo",
            choices:todos.map (item => item)
        });
        let addtodo=await inquirer.prompt({
            type:"input",
            message:"Add item in the list",
            name:"todo"
        });
        let newTodo = todos.filter(val =>val !== updatetodo.todo)
            todos = [...newTodo,addtodo.todo]
        
            console.log(todos)
        } 
        
        
        if (ans.select === "view"){
            console.log("*** TO DO LIST ***");
            console.log(todos);
            console.log("********************");
        }
        if (ans.select === "delete"){
            let deletetodo= await inquirer.prompt({
                type:"list",
                message:"delete item in the list",
                name:"todo",
                choices:todos.map (item => item)
            });
            let newTodo = todos.filter(val =>val !== deletetodo.todo)
            todos = [...newTodo]
            console.log(todos)
        }
        } while(true)

    console.log(todos);

} 
createtodo(todos);