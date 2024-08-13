import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import api from './utils/Api';

function App() {

  const {tg} = useTelegram()


  useEffect( () => {
    tg.ready();
    api.getGoroscope(horo).then(data) => {
      console.log(data)
    }
  }, [])



  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
