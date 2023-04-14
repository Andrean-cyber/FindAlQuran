
class DataSource {
  static searchQuran(keyword) {
    return fetch(`https://api.alquran.cloud/v1/search/Abraham/all/en=1`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.data) {
            return Promise.resolve(responseJson.data);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
}

export default DataSource;