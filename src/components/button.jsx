export default function button({children, onClick}) {
  return <button onClick={onClick} className='border-2 border-black px-4 py-2 rounded hover:bg-black hover:text-white'>{children}</button>
}