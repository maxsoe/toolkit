$(document).ready(function () {
  $(document).on('keypress', function(e) {
    var tag = e.target.tagName.toLowerCase();
    // 104 is the "h" key
    if ( e.which === 104 && tag != 'input' && tag != 'textarea') {
      $(".helper-grid-horizontal").toggle();
    }
    // 103 is the "g" key
    if ( e.which === 103 && tag != 'input' && tag != 'textarea') {
      $(".helper-grid-vertical").toggle();
    }
  });
});

// $(document).keypress(function(event) {
//       alert('Handler for .keypress() called. - ' + event.charCode);
// });
