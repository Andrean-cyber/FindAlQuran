class DataSource {
  static searchQuran(keyword) {
    return fetch(`https://api.npoint.io/99c279bb173a6e28359c/data`)

        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          console.log(responseJson)
          for (let i = 0; i < 114; i++) {
            if (responseJson[i]["nama"] != keyword) {
              return Promise.reject(`${keyword} is not found`);
            } else {
              console.log(responseJson[i])
              return Promise.resolve(responseJson[i]);
            }
            // if (data[i]["nama"] == keyword) {
            //   const infoSurat = data[i];
            //   const isiSurat = data["surat"][i];
            //   return infoSurat
            // } else {
            //   return `${keyword} is not found`
            // }
          }
          
        });
  }
}

export default DataSource;