/* -------------------------------------------------------------------------- */
/*                                  constants                                 */
/* -------------------------------------------------------------------------- */
const lateral_menu = document.querySelector('.lateral-navigation');
const lateral_menu_btn = document.querySelector('.lateral-navigation-btn');
const header_scroll = document.querySelector('.header-scroll');
const top_height = document.querySelector('.hero').offsetHeight - 50;
/* -------------------------------------------------------------------------- */
/*                                   events                                   */
/* -------------------------------------------------------------------------- */
// add class, click on lateral menu
lateral_menu_btn.addEventListener(
   'click',
   () => {
      lateral_menu.classList.toggle('show');
   },
   false
);
// remove class, click on the lateral menu only
lateral_menu.addEventListener(
   'click',
   function (e) {
      if (e.target.classList.contains('lateral-navigation')) {
         this.classList.remove('show');
      }
   },
   false
);
// changes classes in scroll for navigation
window.addEventListener(
   'scroll',
   (e) => {
      const offsetY = pageYOffset;
      header_scroll.classList.toggle(`show`, offsetY >= top_height);
   },
   false
);
