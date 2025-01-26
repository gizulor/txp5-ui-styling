var $;


$(document).ready(function() {
  // temp, demo only
  $('.txp-save').click(function() {
    $('.messageflash').css('display','block');
  });

  // temp hack to override jqui behaviour
  $('.toggle[style]').css('display', 'flex');

//   function debounce(func, timeout = 100) {
//     let timer;
//     return (...args) => {
//       clearTimeout(timer);
//       timer = setTimeout(() => { func.apply(this, args); }, timeout);
//     };
//   }
//
//   function init() {
//
//   }
//
//   const processChange = debounce(() => init());
//   window.addEventListener("resize", processChange);
//
//   init();

});