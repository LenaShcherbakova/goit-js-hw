const baseUrl = 'https://restcountries.eu/rest/v2/name';

export default {
  // query: '',
  fetchCountries(query) {
    const requestParams = `/${query}`;
    return fetch(baseUrl + requestParams).then(response => response.json());
  },
};

// fetch('https://restcountries.eu/rest/v2/all')
//   .then(response => {
//     console.log(response);
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//     renderCountry(data.results);
//   });

// export default {
//   query: '',
//   fetchCountries(query) {
//     const requestParams = `/${this.query}`;
//     return fetch(baseUrl + requestParams)
//       .then(response => response.json())
//       .then(parsedResponse => {
//         console.log(parsedResponse);
//         return parsedResponse;
//       });
//   },
//   get searchQuery() {
//     return this.query;
//   },
//   set searchQuery(value) {
//     this.query = value;
//   },
// };
