import type {Todo} from "../App.tsx";

type Props = {
  TodoLists: Todo[];
  onClickBack: (id: number) => void;
  onClickDelete: (id: number) => void;
}

export default function CompleteTodos({TodoLists,onClickBack,onClickDelete}:Props) {
  return (
    <div>
        <h2 className='font-bold text-lg'>完了</h2>
        <ul>
          {TodoLists.filter(todo => todo.completed).map(todo => (
            <li key={todo.id} className="flex items-center">
              <p>{todo.title}</p>
              <button className="block bg-white text-amber-600 rounded-lg p-1 mt-3 ml-4 active:translate-y-1"
              onClick={() => onClickBack(todo.id)}
              >戻す</button>
              <button className='block bg-white text-red-600 rounded-lg p-1 mt-3 ml-2 active:translate-y-1'
              onClick={() => onClickDelete(todo.id)}
              >削除</button>
            </li>
          ))}
        </ul>
    </div>
  )
}
