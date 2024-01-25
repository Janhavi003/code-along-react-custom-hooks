import useStorage from './custom-hooks/useStorage';
import './App.css'

function App() {
  const{setStorage} = useStorage();
  return (
    <>
      <div className='center-container'>
        <input type="text" placeholder='Enter some text' onChange={(e)=>setStorage(e.target.value)} />
      </div>
    </>
  )
}

export default App
