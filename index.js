module.exports = require('./axios/lib/axios');

function fetchSimpsonQuotesJSON() {

    const url = `https://simpsons-quotes-api.herokuapp.com/quotes/`;
    axios.get(url)
      .then(function(response) {
        return response.data;
      })
      .then(function(quotes) {
        console.log('data decoded from JSON:', quotes);
  
        const quotesHtml = `
          <p><strong>${quotes.quote}</strong></p>
            <p>${quotes.character}</p>
          <img src="${quotes.image}" />
        `;
        document.querySelector('#simpson-quote').innerHTML = quotesHtml;
      });
  }
  
  fetchSimpsonQuotesJSON();

