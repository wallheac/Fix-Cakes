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
      event.preventDefault();
    }
    else{
      $('nav').removeClass('scrolled');
      $('#logo').removeClass('scrolled');
    }
  });

  //edit nav in jquery
  $('nav').html("<ul><li><a href='menu-cakes.html'>menu</a></li><li><a href='custom.html'>custom</a></li></ul><a href='index.html'><img id='logo' src='./assets/images/fix-logo.png' alt='fix cakes logo'></a></li><ul><li><a href='about.html'>about</a></li><li><a href='hours.html'>hours</a></li></ul>");
  $('footer').html("<div class='address'>    <p>27 Maryland Plaza<br>      Saint Louis, MO 63108</p>     <p>Tues-Sat 7am-7pm, Sun 11am-4pm</p>  </div>  <img id='footerLogo' src='./assets/images/fix-logo-white.png'><div class='fti'><div id='ftiIcons'><img src='./assets/images/fix-fbicon.png' alt='facebook icon'><img src='./assets/images/fix-twittericon.png' alt='twitter icon'><img src='./assets/images/fix-instaicon.png' alt='instagram icon'></div><p>314-930-3103</p></div>")

//JSON inventory
$.getJSON("https://wallheac.github.io/Fix-Cakes/inventory.json", function(data){
    var cakeItems = [],
      otherItems = [],
      cakeString = '',
      otherString = '';
  $.each(data, function(index, val){//sort cakes from other
    if(val.type == "Cake"){cakeItems.push(val);}
    if(val.type == "Other") {otherItems.push(val);}
  });
  $.each(cakeItems, function(index,val){
    cakeString += ("<h2>" + val.name + "</h2>" + "<p>" + val.description +"</p>");
  });
  $.each(otherItems, function(index,val){
    otherString += ("<h2>" + val.name + "</h2>" + "<p>" + val.description +"</p>");
  });
  $('#cakeMenu p').first().append(cakeString);
  $('#otherMenu p').first().append(otherString);
});
});
