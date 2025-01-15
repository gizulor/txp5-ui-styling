var $;


$(document).ready(function() {

function debounce(func, timeout = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
function init() {
  if (window.innerWidth > 720) {
    $('#supporting_content').attr('open', '');
    $('#supporting_content > summary').hide();
    // $('#supporting_content').hover(function() {
    //     $(this).attr('open', '');
    //     //dcscroll = $("#page").scrollTop();
    // }, function() {
    //     $(this).removeAttr('open');
    //     //$("#page").scrollTop(0);
    //     //$("#page").scrollTop(dcscroll);
    // });
  } else {
    $('#supporting_content').removeAttr('open');
    $('#supporting_content > summary').show();


  }
}

const processChange = debounce(() => init());
window.addEventListener("resize", processChange);

 init();

});
