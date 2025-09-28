type Props = {
  todoText: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickTodoText: () => void;
}

export default function InputTodos({todoText,onChange,onClickTodoText}:Props) {
  return (
    <>
      <input
        className='border-2 border-amber-600 rounded-lg p-2 mx-auto block'
        type="text"
        value={todoText}
        placeholder='新しいTodo'
        onChange={onChange}
        />
      <button className="bg-amber-600 text-white rounded-lg p-2 mt-3 mx-auto block active:translate-y-1"
      onClick={onClickTodoText}
      >追加</button>
    </>
  )
}
