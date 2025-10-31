import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({
    nome: 'John Coltrane',
    tipoPerfil: 'Premium',
    urlsFotos: ['https://jornal.unesp.br/wp-content/uploads/2022/11/COLTRANE_2.jpg', 'https://images.squarespace-cdn.com/content/v1/5911f44b9de4bb1465b0417a/1517949216805-IX2GVKMUU3KIUTZU6C8Z/image-asset.jpeg'],
    configsUx: {
      claridadeTela: 5,
      modoDefVisual: false
    }
  });
  const [mudaClaridade, setClaridade] = useState(false);
  const menosCaridade = (Claridade: boolean) => {
    return !Claridade;
  };




  return (
    <>
      <div className={mudaClaridade? 'claridadeAumentada': 'claridadeMenos'}>
        <h1>{user.nome}</h1>
        {user.urlsFotos.map((url) =>
          
          <div>
            <h2>{user.tipoPerfil}</h2>
            <img src={url}/>
            <p>Foto de {user.nome}</p>
          
          </div>
        )}
        <div>
          <button onClick={() => setClaridade(mudaClaridade)}>
            mudar claridade
          </button>
        </div>

      </div>
    </>
  );
}

export default App
