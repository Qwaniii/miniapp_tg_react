import { useEffect, useState } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import api from './utils/Api';
import List from './components/List/List';

function App() {

  const [zodiak, setZodiak] = useState({})

  const {tg, lang} = useTelegram()

  let horo ={}

  lang === "ru" 
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
      <List zodiak={zodiak}/>
    </div>
  );
}

export default App;
