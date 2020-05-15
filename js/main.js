// all endpoint
// https://restcountries.eu/rest/v2/all
// import CountryCard from './countryCard.js';
// import Search from './search.js';

class App {
   constructor() {
      this.countryCards = [];
      this.url = 'https://restcountries.eu/rest/v2/all';
      this.isCountryView = false;
      this.app = document.getElementById('app');
   }

   async init() {
      console.log('App running');
      const app = this.app;
      const search = new Search();
      const filter = new Filter();
      const countrySection = document.querySelector('.countries');

      app.prepend(filter.render());
      app.prepend(search.render());
      await this.buildCountryArray();

      for (let i = 0; i < this.countryCards.length; i++) {
         countrySection.appendChild(this.countryCards[i].render());
      }
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

   renderCountryPage(name) {
      let countryPage = new CountryPage(name);
      let child = this.app.lastElementChild;

      while (child) {
         this.app.removeChild(child);
         child = this.app.lastElementChild;
      }
   }
}

const countriesApp = new App();

countriesApp.init();