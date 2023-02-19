
var price=0;

var quantity=1;

var len=0;

function calcPrice(length) {

    var basePrice=1500;
    var pricePerChar=400;  
    
    if(length<6){
     price=quantity*basePrice;
    }else{
     price=quantity*(basePrice+((length-5)*pricePerChar));
    }
    return price;
 }

$(".user-text").on("change", function() {
  var text = $(this).val();
   len = text.length;

  if(len> 0 && len< 20) {

  $(".display-text").text(text);
  } else {
    alert("Please enter text between 1 and 20 characters");
  }
  
  price=calcPrice(len);
  
  $('#price-text').text("Price: Rs. "+price);

});




$('.font-button').on('click', function() {
    var font= $(this).text();

    $(".display-text").css("font-family", font);
});

$('.color-button').on('click', function() {
    var color= $(this).text();

    $(".display-text").css("color", color);
});

$('.size-button').on('click', function() {
    var size= $(this).text();

    switch(size){
        case "Small":
            $(".display-text").css("font-size", "12px");
            break;
        case "Medium":
            $(".display-text").css("font-size", "24px");
            break;
        case "Large":
            $(".display-text").css("font-size", "48px");
            break;
        default:
            $(".display-text").css("font-size", "30px");


    }
});


$('#plus-button').on('click', function() {
    if(quantity<10){
        quantity++;
    }
     
    

    $('#quantity-text').text("Quantity: "+quantity);

    

    $('#price-text').text("Price: Rs. "+(calcPrice(len)));

   
});

$('#minus-button').on('click', function() {
  if(quantity>1){
    quantity--;
  }

 

  $('#quantity-text').text("Quantity: "+quantity);


   
  $('#price-text').text("Price: Rs. "+(calcPrice(len)));


});