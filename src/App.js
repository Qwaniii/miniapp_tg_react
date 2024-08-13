import { useEffect, useState } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import api from './utils/Api';
import List from './components/List/List';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';

function App() {

  const [zodiak, setZodiak] = useState({})

  const {tg, langTg} = useTelegram()

  let horo ={}

  langTg === "ru" 
  ? horo = 
    {
      "language": "original"
    }
  :
    horo = {
      "language": "translated"
    }
  

  useEffect( () => {
    tg.ready();
    api.getGoroscope(horo).then(data => setZodiak (data.horoscopes))
  }, [])





  return (
    <div className="App">

      <Header/>
      <Routes>
        <Route index element={<List zodiak={zodiak}/>}/>
        <Route path={"/horo/:signName"} element={<Main zodiak={zodiak} />}/>
      </Routes>

    </div>
  );
}

export default App;
