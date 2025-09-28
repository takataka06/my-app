import type { Todo } from '../App.tsx';

type Props = {
  TodoLists: Todo[];
  onClick: (id: number) => void;
}


export default function IncompleteTodos({TodoLists,onClick}: Props) {
  return (
    <div>
      <h2 className='font-bold text-lg'>未完了</h2>
        <ul>
          {TodoLists.filter(todo => !todo.completed).map(todo => (
            <li key={todo.id} className="flex items-center">
              <p>{todo.title}</p>
            <button className="block bg-white text-amber-600 rounded-lg p-1 mt-3 ml-4 active:translate-y-1"
            onClick={() => onClick(todo.id)}
            >完了</button>
            </li>
            
          ))}
        </ul>
      </div>
  )
}
