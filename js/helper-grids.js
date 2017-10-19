$(document).ready(function () {
  $(document).on('keypress', function(e) {
    var tag = e.target.tagName.toLowerCase();
    // 104 is the "h" key
    if ( e.which === 104 && tag != 'input' && tag != 'textarea') {
      $(".helper-grid-horizontal").toggleClass("show");
    }
    // 103 is the "g" key
    if ( e.which === 103 && tag != 'input' && tag != 'textarea') {
      $(".helper-grid-vertical").toggleClass("show");
    }
  });
});

// $(document).keypress(function(event) {
//       alert('Handler for .keypress() called. - ' + event.charCode);
// });
