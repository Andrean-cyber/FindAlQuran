
class DataSource {
  static searchQuran(keyword) {
    return fetch(`https://quranapi.idn.sch.id/surah/${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          console.log(responseJson.ayahs)
          if (responseJson) {
            return Promise.resolve(responseJson.ayahs);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        });
  }
};

export default DataSource;