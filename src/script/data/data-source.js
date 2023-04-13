class DataSource {
  static searchQuran(keyword) {
    return fetch(`https://al-quran-8d642.firebaseio.com/data.json?print=pretty=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          console.log(responseJson)
          if (responseJson) {
            return Promise.resolve(responseJson);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;