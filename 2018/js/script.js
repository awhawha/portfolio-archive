var header = $('.overlay');
var range = 200;
var proj_nav = $('#project-nav');
$(window).on('scroll', function () {

  var scrollTop = $(this).scrollTop(),
      height = header.outerHeight(),
      offset = height / 2,
      calc = 1 - (scrollTop - offset + range) / range;

  header.css({ 'opacity': calc });

  if (calc > '1') {
    header.css({ 'opacity': 0 });
  } else if ( calc < '0' ) {
    header.css({ 'opacity': 0.8 });
  }

console.log(proj_nav);
var sticky = proj_nav.offsetTop;
// console.log(sticky);

  if (scrollTop >= sticky) {
    console.log("111");
    proj_nav.addClass("sticky");
  } else {
    proj_nav.removeClass("sticky");
  }
});
