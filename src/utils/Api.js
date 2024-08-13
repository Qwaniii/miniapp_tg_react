const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(res);
  };
  
  

  
  class Api {
    constructor({ dataUrl }) {
      this._dataUrl = dataUrl;
    }
    
  
    //Получение постов
  
    getGoroscope(data) {
        return fetch(`${this._dataUrl}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
        },
          body: JSON.stringify(data),
        }).then(onResponce);
      };
  }

  const config = {
    dataUrl: "https://poker247tech.ru/get_horoscope/",
  };

    const api = new Api(config);

    export default api;