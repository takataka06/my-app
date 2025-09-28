
import { useState } from 'react';
import InputTodos from './components/InputTodos.js';
import IncompleteTodos from './components/IncompleteTodos.js';
import CompleteTodos from './components/CompleteTodos.js';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
}

export default function App() {
  const [todoText, setTodoText] = useState('');
  const [TodoLists, setTodoLists] = useState<Todo[]>([{
    id:1,
    title:'散歩',
    completed:false
}]);

  const onChangeTodoText = (e => {
    setTodoText(e.target.value);
  })

  const onClickTodoText = (() => {
    if (todoText === '') return;
    const newTodo: Todo = {
      id: TodoLists.length + 1,
      title: todoText,
      completed: false,
    }
    setTodoLists([...TodoLists, newTodo]);
    setTodoText('');
  })

  const onClickComplete = ((id: number) => {
    const newTodoLists = TodoLists.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: true};
      }
      return todo;
    })
    setTodoLists(newTodoLists);
  })
  
  const onClickDelete = ((id: number) => {
    const newTodoLists = TodoLists.filter(todo => todo.id !== id);
    setTodoLists(newTodoLists);
  })

  const onClickBack = ((id: number) => {
    const newTodoLists = TodoLists.map(todo => 
      todo.id === id ? {...todo, completed: false} : todo
  )
    setTodoLists(newTodoLists);
  })
  return  (
    <>
      <p className='text-center p-5'>Todoリスト</p>
      <InputTodos todoText={todoText} onChange={onChangeTodoText} onClickTodoText={onClickTodoText}/>
      <div className='flex justify-around bg-amber-600 p-5 rounded-lg m-5 w-1/2 mx-auto'>
      <IncompleteTodos TodoLists={TodoLists} onClick={onClickComplete} onClickDelete={onClickDelete}/>

      <CompleteTodos TodoLists={TodoLists} onClickBack={onClickBack} onClickDelete={onClickDelete}/>
      </div>
    </>
  )
}