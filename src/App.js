import { useEffect, useState } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import api from './utils/Api';
import List from './components/List/List';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';

function App() {
  
  const {tg} = useTelegram()
  const [zodiak, setZodiak] = useState({})
  const [horo, setHoro] = useState({
                    "language": "translated",
                "period": "today"
  })

  const [langTg, setLangTg] = useState(tg.initDataUnsafe?.user?.language_code)


  useEffect(() => {
    tg.ready();
    if(langTg !== "ru") {
      setHoro({
                "language": "translated",
                "period": "today"
              })
            }
    else {
      setHoro({
      "language": "original",
      "period": "today"
    })
  }
    }, [langTg])
  

  useEffect( () => {
    tg.ready();
    api.getGoroscope(horo).then(data => setZodiak(data.horoscope))
  }, [langTg])


  const changeLanguage = () => {
    if (langTg === "ru") {
        setLangTg("en")
    }
    else setLangTg("ru")
}



  return (
    <div className="App">

      <Header changeLanguage={changeLanguage}/>
      <Routes>
        <Route index element={<List zodiak={zodiak} langTg={langTg}/>}/>
        <Route path={"/horo/:signName"} element={<Main zodiak={zodiak} />}/>
      </Routes>

    </div>
  );
}

export default App;
