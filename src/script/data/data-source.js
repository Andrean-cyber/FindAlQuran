class DataSource {
  static searchQuran(keyword) {
    return fetch(`https://api.npoint.io/99c279bb173a6e28359c`)

        .then(response => {
          return response.json();
        })
        .then(responseJson => {

          for (let i = 0; i < 114; i++) {
            if (responseJson["data"][i]["nama"] != keyword) {
              continue;
            } else {
              console.log(responseJson["data"][i]["nama"]);
              return Promise.resolve([responseJson["data"][i]]);
            }
          return Promise.reject(`${keyword} is not found`);
          }
          
        });
  }
}

export default DataSource;