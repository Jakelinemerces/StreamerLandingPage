function myFunction() {
    var x = document.getElementById("menuMobile");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $('#menuMobile > a').on("click", function(e) {

    var target = $(this).attr("href"); //Get the target
    var scrollToPosition = $(home).offset().top - 80;
    
    $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(home){
            window.location.hash = home;
        });
    
        e.preventDefault();
    });

  $('#menuMobile > a').on("click", function(e) {

    var target = $(this).attr("href"); //Get the target
    var scrollToPosition = $(aboutus).offset().top - 80;
    
    $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(aboutus){
            window.location.hash = aboutus;
        });
    
        e.preventDefault();
    });

    $('#menuMobile > a').on("click", function(e) {

      var target = $(this).attr("href"); //Get the target
      var scrollToPosition = $(mysetup).offset().top - 80;
      
      $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(mysetup){
              window.location.hash = mysetup;
          });
      
          e.preventDefault();
      });

      $('#menuMobile > a').on("click", function(e) {

        var target = $(this).attr("href"); //Get the target
        var scrollToPosition = $(stream).offset().top - 80;
        
        $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(stream){
                window.location.hash = stream;
            });
        
            e.preventDefault();
        });

        $('#menuMobile > a').on("click", function(e) {

          var target = $(this).attr("href"); //Get the target
          var scrollToPosition = $(contact).offset().top - 80;
          
          $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(contact){
                  window.location.hash = contact;
              });
          
              e.preventDefault();
          });