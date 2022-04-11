import {useState} from 'react';
import './style.css';
import api from "./services/api";

  function App() {

    const [input, setInput] = useState('');

    function searchAdvice(){
      let adviceNumber = Math.random() * 224;
      api.get(`${adviceNumber}`).then(({data}) => {
        setInput(data.slip.advice);
      })
    };
    
    return (
      <div className="App">
        <div className='container'>
          <div className='layout-advice'>
            <h1 className="title-advice">Pressione o botão abaixo para receber um conselho legal!</h1>
            <button className='button-advice' onClick={searchAdvice}>ME DÊ UM CONSELHO LEGAL!</button>
            <input type="text" className='input-advice' readOnly={true} placeholder='Meu novo conselho é...' value={input}/>
          </div>
        </div>
      </div>
  );
  
}

export default App;
