class Search {
   // div, input, 
   constructor() {
      this.section = document.createElement('section');
      this.span = document.createElement('span');
      this.form = document.createElement('form');
      this.input = document.createElement('input');
   }

   init() {
      this.section.classList.add('search-bar', 'container', 'shadow');
      this.span.classList.add('search-bar__icon');
      this.form.classList.add('search-bar__form');
      this.input.classList.add('search-bar__input');

      this.input.placeholder = "Search for country...";

      this.section.appendChild(this.span);
      this.form.appendChild(this.input);
      this.section.appendChild(this.form);
   }

   render() {
      this.init();
      return this.section;
   }
}