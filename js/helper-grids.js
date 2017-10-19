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
    // 116 is the "t" key
    if ( e.which === 116 && tag != 'input' && tag != 'textarea') {
      $(".helper-vertical-container").toggleClass("container container-fluid");
      console.log(e.which +" pressed");
    }
  });
});

// $(document).keypress(function(event) {
//       alert('Handler for .keypress() called. - ' + event.charCode);
// });
