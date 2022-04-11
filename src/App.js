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
            <h1 className="title-advice">Hit the button below to receive a nice advice!</h1>
            <button className='button-advice' onClick={searchAdvice}>GIVE ME A NICE ADVICE!</button>
            <input type="text" className='input-advice' readOnly={true} placeholder='My new advice is...' value={input}/>
          </div>
        </div>
      </div>
  );
  
}

export default App;
