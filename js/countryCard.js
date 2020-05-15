class CountryCard {
   constructor(country) {
      this.flag = country.flag;
      this.name = country.name;
      this.info = {
         population: country.population,
         region: country.region,
         capital: country.capital
      }

      this.article = document.createElement('article');
      this.init();
   }

   init() {
      let article = this.article;
      article.classList.add('country__card', 'shadow');

      let flagHolder = document.createElement('div');
      flagHolder.classList.add('country__flag');

      let flagImg = document.createElement('img');
      flagImg.src = this.flag;
      console.log(this.info)

      let title = document.createElement('h3');
      title.classList.add('country__title');
      title.textContent = this.name;

      let countryInfo = document.createElement('ul');
      countryInfo.classList.add('country__info');

      for (let prop in this.info) {
         let li = document.createElement('li');
         li.classList.add('info__item');

         let span = document.createElement('span');
         span.textContent = prop + ": ";

         let text = document.createTextNode(this.info[prop]);

         li.appendChild(span);
         li.appendChild(text);

         countryInfo.appendChild(li);
      }

      flagHolder.appendChild(flagImg);
      article.appendChild(flagHolder);
      article.appendChild(title);
      article.appendChild(countryInfo);

      article.addEventListener('click', () => {
         this.onClick();
      })
   }

   onClick(event) {
      console.log(countriesApp.renderCountryPage(this.name));
   }

   render() {
      return this.article;
   }
}