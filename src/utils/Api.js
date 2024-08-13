const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(res);
  };
  
  
  const config = {
    dataUrl: "http://5.35.90.171:61011/get_horoscope/",
  };
  
  class Api {
    constructor({ dataUrl }) {
      this._dataUrl = dataUrl;
    }
    
  
    //Получение постов
  
    getGoroscope(sing,lang) {
        return fetch(`${this._dataUrl}`, {
          mode: "no-cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
        },
          body: JSON.stringify({
            "sign": "aries",
            "language": "original"
        }),
        }).then(onResponce);
      };
    }

    const api = new Api(config);

    export default api;