import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [dark, setDark] = useState(false);

  const mudaEscuro = (dark: boolean) => {
    return !dark;
  };

  return (
    <>
      <div className={dark ? 'darkmode' : 'lightmode'}>
        <div>

          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>

        </div>
        <h1>Vite + React</h1>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button onClick={() => setDark(mudaEscuro)}>
            Muda de modo
          </button>
          
          <p>modo {dark ? "dark" : "light"} tá ativado</p>
          <p className='bla'>
            você clicou {count > 10 ? 'muitas' : 'poucas'} vezes
          <button> </button>
          </p>
          <p></p>
          Edit <code>src/App.tsx</code> and save to test HMR

        </div>
        <div>
        </div>



        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
