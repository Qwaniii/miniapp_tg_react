import { useEffect, useState } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import api from './utils/Api';
import List from './components/List/List';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';

function App() {
  
  const {tg, langTg} = useTelegram()
  const [zodiak, setZodiak] = useState({})
  const [defaultLang, setDefaultLang] = useState(langTg)


  let horo ={}

  defaultLang === "ru" 
        ? horo = 
          {
            "language": "original",
            "period": "today"
          }
        :
          horo = {
            "language": "translated",
            "period": "today"
          }
  

  useEffect( () => {
    tg.ready();
    api.getGoroscope(horo).then(data => setZodiak (data.horoscope))
  }, [])


  useEffect( () => {
    setDefaultLang(langTg)
  }, [langTg])



  return (
    <div className="App">

      <Header defaultLang={defaultLang}/>
      <Routes>
        <Route index element={<List zodiak={zodiak} defaultLang={defaultLang}/>}/>
        <Route path={"/horo/:signName"} element={<Main zodiak={zodiak} />}/>
      </Routes>

    </div>
  );
}

export default App;
