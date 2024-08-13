import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';

function App() {

  const {tg} = useTelegram()


  useEffect( () => {
    tg.ready();
  }, [])



  return (
    <div className="App">
      start
    </div>
  );
}

export default App;
