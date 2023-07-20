import './button.scss';

const App = () => {
  return (
    <div className='bg-slate-400 w-screen h-screen flex items-center justify-center'>
      <button className='btn'>Salam</button>
      <p id='select' className='text-black underline cursor-pointer p-10 bg-white active:bg-red-500 hover:rounded-xl'>HELLO WORLD</p>
    </div>
  )
}

export default App