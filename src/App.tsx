
import { useState } from 'react';

export default function App() {
  const [todo, setTodo] = useState('');
  const TodoLists = [
    { id: 1, title: '買い物', completed: false },
    { id: 2, title: '掃除', completed: false },
    { id: 3, title: '散歩', completed: true },
  ];
  return  (
    <>
      <p className='text-center p-5'>Todoリスト</p>
      <div className='flex justify-around bg-amber-600 p-5 rounded-lg m-5 w-1/2 mx-auto'>
        <div>
        <h2 className='font-bold text-lg'>未完了</h2>
        <ul>
          {TodoLists.filter(todo => !todo.completed).map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className='font-bold text-lg'>完了</h2>
        <ul>
          <li>散歩</li>
        </ul>
      </div>
      </div>
   
    </>
  )
}