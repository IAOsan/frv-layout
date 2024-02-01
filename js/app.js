const navbar = {
   classname: 'show',
   scrolling: function (e, height) {
      const element = document.querySelector(`.${e}`);
      const offsetY = pageYOffset;

      element.classList.toggle(`${this.classname}`, offsetY >= height);
   },
   toggleClass: function (e) {
      e.classList.toggle(`${this.classname}`);
   },
   removeClass: function (e) {
      e.classList.remove(`${this.classname}`);
   },
   toggleMenu: function (elmnt, btn) {
      const element = document.querySelector(`.${elmnt}`);
      const button = document.querySelector(`.${btn}`);
      // add class by clicking
      button.addEventListener('click', () => this.toggleClass(element), false);
      // remove class only if the target contains the class element
      element.addEventListener(
         'click',
         (e) =>
            e.target.classList[0] == `${elmnt}` && this.removeClass(element),
         false
      );
   },
};
const heroheight = document.querySelector(`.hero`).offsetHeight - 50;

/* -------------------------------------------------------------------------- */
/*                                   events                                   */
/* -------------------------------------------------------------------------- */
navbar.toggleMenu('lateral-navigation', 'lateral-navigation-btn');
window.addEventListener(
   'scroll',
   () => navbar.scrolling('header-scroll', heroheight),
   false
);
