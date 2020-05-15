// all endpoint
// https://restcountries.eu/rest/v2/all
// import CountryCard from './countryCard.js';
// import Search from './search.js';

class App {
   constructor() {
      this.countryCards = [];
      this.url = 'https://restcountries.eu/rest/v2/all';
      this.isCountryView = false;
   }

   async init() {
      console.log('App running');
      const app = document.getElementById('app');
      const search = new Search();
      const countrySection = document.querySelector('.countries');

      app.prepend(search.render());
      await this.buildCountryArray();

      for (let i = 0; i < this.countryCards.length; i++) {
         countrySection.appendChild(this.countryCards[i].render());
      }
      this.addEventListeners(sea)
   }

   async fetchCountries() {
      const response = await fetch(this.url);

      try {
         if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse)
            return jsonResponse;
         }

         throw new Error('Request failed!');
      }
      catch (error) {
         console.log(error);
      }
   }

   async buildCountryArray() {
      const fetched = await this.fetchCountries();

      this.countryCards = fetched.map(country => {
         let countryCard = new CountryCard(country);
         return countryCard;
      })
   }

   addEventListeners(element, event, callback) {
      element.addEventListener(event, callback);
   }
}

const countriesApp = new App();

countriesApp.init();