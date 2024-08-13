const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(res);
  };
  
  
  const config = {
    dataUrl: "http://5.35.90.171:61011/get_horoscope/",
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  class Api {
    constructor({ dataUrl, headers, freshToken }) {
      this._dataUrl = dataUrl;
      this._headers = headers;
    }
    
  
    //Получение постов
  
    getGoroscope(data) {
        return fetch(`${this._dataUrl}/posts`, {
          method: "POST",
          body: JSON.stringify(data),
        }).then(onResponce);
      };
    }

    const api = new Api(config);

    export default api;