class Filter {
   constructor() {
      this.filter = document.createElement('section');
      this.filterContainer = document.createElement('div');
      this.filterTitle = document.createElement('p');
      this.filterIcon = document.createElement('div');
      this.filterDropdown = document.createElement('div');
      this.filterList = document.createElement('ul');
      this.regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
      this.hidden = true;

      this.init();
   }

   init() {
      this.filter.classList.add('filter');
      this.filterContainer.classList.add('filter__container', 'shadow');
      this.filterTitle.classList.add('filter__title');
      this.filterIcon.classList.add('filter__icon');
      this.filterDropdown.classList.add('filter__dropdown', 'shadow', 'hidden');
      this.filterList.classList.add('filter__list');

      for (let i = 0; i < this.regions.length; i++) {
         let filterListItem = document.createElement('li');
         filterListItem.classList.add('filter__item');

         let text = document.createTextNode(this.regions[i]);
         filterListItem.appendChild(text);

         this.filterList.appendChild(filterListItem);
      }

      let filterTitleText = document.createTextNode('Filter by region');
      this.filterTitle.appendChild(filterTitleText);
      this.filter.appendChild(this.filterContainer);
      this.filterContainer.appendChild(this.filterTitle);
      this.filterContainer.appendChild(this.filterIcon);
      this.filter.appendChild(this.filterDropdown);
      this.filterDropdown.appendChild(this.filterList);

      this.filterContainer.addEventListener('click', () => {
         this.onClick();
      });
   }

   onClick(event) {
      this.filterDropdown.classList.toggle('hidden');
   }

   render() {
      return this.filter;
   }
}