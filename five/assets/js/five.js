var $;


$(document).ready(function() {
  // temp, demo only
  $('.txp-save').click(function() {
    $('.messageflash').css('display', 'block');
  });

  // temp hack to override jqui behaviour
  setTimeout(function() {
  $('.toggle[style]').css('display', 'flex');
  }, 100);


  function debounce(func, timeout = 100) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

  function init() {
    // add a class to .txp-listtables if it overflows
    let listtables = $('.txp-listtables');
    listtables.find('table').each(function() {
      let tablew = $(this).find('tr:first').width();
      if (tablew > $(this).width()) {
        listtables.addClass('is--overflowing');
      } else {
        listtables.removeClass('is--overflowing');
      }
    });
  }

  const processChange = debounce(() => init());
  window.addEventListener("resize", processChange);

  init();

});