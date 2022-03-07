var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$(function(){

  $(document).on('click', '#register_but', function () {
            var name = $('#username_reg').val();
            var password = $('#password_reg').val();
            var password_rep = $('#password_dup_reg').val();

            if(password != password_rep){
                $('.hidden-error-block').html('The entered passwords do not match').css('color', 'red');
                return false;
            }
            else if(password.length < 1){
                $('.hidden-error-block').html('Enter the password').css('color', 'red');
                return false;
            }
            else if(name == ''){
                $('.hidden-error-block').html('Enter your name').css('color', 'red');
                return false;
            }
            else if(password == password_rep){
                 $('.hidden-error-block').html('Good').css('color', 'green');
            }else{
                $('.hidden-error-block').html('Password does not match the requirements').css('color', 'red');
            }
        });

  $('#password_dup_reg').keyup(function () {
        var pas = $('#password_reg').val();
        var con_pas = $(this).val();
        if(pas === con_pas){
            $('.register_inp').css('border-color', 'green');
        }else{
            $('.register_inp').css('border-color', 'red');
        }
    });
    $('#password_reg').keyup(function () {
        var pswd = $('#password_reg').val();
        if ( pswd.length < 1 ) {
            $('#length').removeClass('valid').addClass('invalid');
        } else {
            $('#length').removeClass('invalid').addClass('valid');
        }
    }).focus(function() {
        $('#pswd_info').show(500);
    }).blur(function() {
        $('#pswd_info').hide(500);
    });
    $('#dark').click(function(){
      $('body').css('background-color', '#222121');
      $('h3').css('color', 'white');
  });
});
// SLIDESHOW
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
// audio
var nusmses = document.querySelectorAll(".drum").length;
for(var i = 0; i<nusmses; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "k":
      var pudg = new Audio('AUDIO/storm.mp3');
      pudg.play();
        break;
        case "a":
        var storm = new Audio('AUDIO/pudg.mp3');
        storm.play();
        break;
      default: console.log(buttonInnerHTML);
    }
  });
};
