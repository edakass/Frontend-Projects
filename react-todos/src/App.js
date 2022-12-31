import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';


//denemeee oldu mu
function App() {

    const [showAddTodoForm,setShowAddTodoForm] = useState(false);

   const [todos, setTodos] = useState( [
      {rowNumber:1, rowDescription:'Feed puppy',rowAssigned:'User One'},
      {rowNumber:2, rowDescription:'Make dinner',rowAssigned:'User Two'}
      
    ]
    )

    const addTodo = (description,assigned) => {
     // console.log('Our addTodo btn has been clicked!');
     let rowNumber = 0;
     if(todos.length > 0){
      rowNumber = todos[todos.length-1].rowNumber+1;
     }else{
      rowNumber=1;

     }
      const newTodo = {
        rowNumber:rowNumber,
        rowDescription : description,
        rowAssigned: assigned
      };
      //todos.push(newTodo);
      setTodos(todos => [...todos,newTodo])
      //console.log(todos);
     }

     const deleteTodo = (deleteTodoRowNumber) => {
      let filtered = todos.filter(function (value) {
        return value.rowNumber !== deleteTodoRowNumber;

      });
      setTodos(filtered);
     }
     return (
    <div className='mt-5 container'>
        <div className="card">
          <div className="card-header">
            Yout Todo's
          </div>
      <div className="card-body">
        <TodoTable todos={todos} deleteTodo={deleteTodo}/>
        <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary'> 
          {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
        </button>
        {showAddTodoForm &&
         <NewTodoForm addTodo={addTodo} />
        }
      </div>
    </div>
   </div>
  );
     }

export default App;
