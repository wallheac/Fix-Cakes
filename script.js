$(document).ready(function(){
  $('#other').on('click', function(){
    $('#otherMenu').css({'display': 'block'});
    $('#cakeMenu').css({'display': 'none'});
    event.preventDefault();
  });
  $('#cakes').on('click', function(){
    $('otherMenu').css({'display': 'none'});
    $('#cakeMenu').css({'display': 'block'});
    event.preventDefault();
  });
  $('#submit').closest('form').on('submit', function(){
    var name = $('#name').val();
    alert("Thank you for your order, " + name + "! We will get back to you shortly.");
  });
  $(window).scroll(function(){
    var hdr = $('nav').height();
    if($(this).scrollTop() > (hdr/3)){
      $('nav').addClass('scrolled');
      $('#logo').addClass('scrolled');
    }
    else{
      $('nav').removeClass('scrolled');
      $('#logo').removeClass('scrolled');
    }
  });
});
