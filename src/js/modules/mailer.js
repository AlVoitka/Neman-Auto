function mailer() {



    $('form').submit(function() {
        e.preventDefault();
  
        if(!$(this).valid()) {
          return;
        }
  
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function() {
          $(this).finde("input").val("");
          $('form').trigger('reset');
        });
        return false;
    });







}

module.exports = mailer; 