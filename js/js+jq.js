

$(document).ready(function(){
     
$('h1').css({
    'font-size': '60px',
    "position": "absolute",
     "top":"60%",
    "left": "50%",
    "transform": "translate(-50%,-50%)",
    "text-shadow": "#fc0 1px 0 10px"
    
  });

$('.cont').css({
    'position': 'relative',
    'text-align': 'center',
    'bottom': '20px',
    'color': 'rgb(119, 22, 22)'
});

$('h5').css({ 
    'text-align': 'center'
});



$('#myBtn:hover').css({
    'background-color':' #555'
})


$('#myBtn').css({
    'display': 'none',
    'position': 'fixed',
    'bottom': '20px',
    'right': '30px',
    'z-index': '99',
    'font-size': '18px',
    'border': 'none',
    'outline': 'none',
    'background-color':' red',
    'color': 'white',
    'cursor': 'pointer',
    'padding': '15px',
    'border-radius': '4px'
})

$('.grid').css({
    'display':'grid',
    'grid-template-columns':' repeat(6,2fr)',
    'grid-template-rows': 'repeat(6,400px)',
})




$('.first').css({
    'position': 'relative',
    'top': '100px'
})
$('.first1').css({
    'position': 'relative',
    'top': '100px'
})

$('.three').css({
    'padding': '0px 10px',
    'border': '100px solid',
    'border-width': 'thin',
   ' margin-top': '100px',
    'margin-left': '100px',
    'margin-right': '100px',
    'margin-bottom': '100px',
    'background':'LightSlateGray'
})

$('body').css({
    'background-color': 'SlateGrey'
})

$('#lab9').css({
    'padding': '0px 10px',
    'border': '100px solid',
    'border-width': 'thin',
   ' margin-top': '100px',
    'margin-left': '100px',
    'margin-right': '100px',
    'margin-bottom': '100px',
    'grid-row-gap':'0px',
    'background':'LightSlateGray'
})
$('#oned').css({
    'padding': '0px 10px',
    'border': '100px solid',
    'border-width': 'thin',
   ' margin-top': '100px',
    'margin-left': '100px',
    'margin-right': '100px',
    'margin-bottom': '100px',
    'background':'LightSlateGray'
})


$('#two').css({
    'padding': '0px 10px',
    'border': '100px solid',
    'border-width': 'thin',
   ' margin-top': '100px',
    'margin-left': '100px',
    'margin-right': '100px',
    'margin-bottom': '100px',
    'background':'LightSlateGray'
})


$('h4').css({
    'text-shadow': 'black 1px 0 10px',
    'margin-top': '-40px',
    'color':'white',
    'font-size':'50px',
    'text-align': 'center'
})
$('p').css({
    'text-shadow': 'black 1px 0 10px',
    'margin-top': '-60px',
    'color':'white',
    'font-size':'50px',
    'text-align': 'center'
})
$('i').css({
    'color':'white',
    'text-shadow':' 1px 1px 2px black',
    'font-size':'50px',
    'text-align': 'center' 
})


$('.us').css({
    'position': 'relative',
    'text-align': 'center',
    'bottom': '20px',
    'color': 'white',
    'font-size':'50px',
    'margin-top': '-600px'
});

$('#hide'). hide(5000);


$( ".1" ).html( "Monty" );
$( ".2" ).html( "Jubilee" );
$( ".3" ).html( "Beezy" );
$( ".4" ).html( "Mochi" );
$( ".5" ).html( "Brewery" );
$( ".6" ).html( "Lucy" );
$( ".7" ).html( "Astro" );
$( ".8" ).html( "Boo" );
$( ".9" ).html( "Pippa" );
$( ".10" ).html( "Coco" );
$( ".11" ).html( "Brody" );
$( ".12" ).html( "Stella" );
$( "h5" ).html( "Text will be on TOP" );


$(".button_hola").click(function()
{
    var url = "file:///C:/Users/Alexandraqubert/Desktop/2%20%D0%BA%D1%83%D1%80%D1%81/GitHub/laboratorna10/lab10.html";
    $(location).attr('href',url);
})

$(".button_hola3").click(function()
{
    var url = "file:///C:/Users/Alexandraqubert/Desktop/2%20%D0%BA%D1%83%D1%80%D1%81/GitHub/laboratorna10/2.html";
    $(location).attr('href',url);
})

$(".button_hola1").click(function()
{
          
    function getData(one) {
            
        const baseUrl = "https://usersdogs-ip4weamexa-ew.a.run.app";



fetch(`${baseUrl}/dogs`)
.then(result => result.json())
.then(dogs => {
const container = document.getElementById("lab9");

dogs.forEach(dog => {
    const card = document.createElement("div");
    if(dog.id==one){
        
    card.setAttribute("class", "card");
    card.innerHTML += `<img src="${baseUrl}${dog.dogImage}" alt="Dog" width="300" height="300">
    <div class="container">
        <h4><b>${dog.title}</b></h4>
        <p> sex: ${dog.sex} , age: ${dog.age}</p>
        <i>${dog.description}</i>
    </div>`
    container.appendChild(card);}

    $(document).ready(function(){
    $('.card').css({
'margin-top': '40px',
'color':'white',
'display': 'block',
'font-size':'50px',
'text-align': 'center',
'margin-bottom': '100px'
})
$('.container').css({
'margin-top': '50px',
'font-size':'50px'
})

});
})})
.catch(err => console.error(err));
    }  
       
 
    document.querySelector('#get3').addEventListener('click', () => {
        getData(1);
      });
      //кнопка работает только один раз
      window.onload = function() {
  document.getElementById("get3").onclick = function() {
     this.disabled = 'disabled';
  }}


  document.querySelector('#get2').addEventListener('click', () => {
        getData(2);
      });
      //кнопка работает только один раз
      window.onload = function() {
  document.getElementById("get2").onclick = function() {
     this.disabled = 'disabled';
  }}
  document.querySelector('#get4').addEventListener('click', () => {
        getData(3);
      });
      //кнопка работает только один раз
      window.onload = function() {
  document.getElementById("get4").onclick = function() {
     this.disabled = 'disabled';
  }}

  document.querySelector('#get5').addEventListener('click', () => {
        getData(4);
      });
      //кнопка работает только один раз
      window.onload = function() {
  document.getElementById("get5").onclick = function() {
     this.disabled = 'disabled';
  }}

  document.querySelector('#get6').addEventListener('click', () => {
        getData(5);
      });
      //кнопка работает только один раз
      window.onload = function() {
  document.getElementById("get6").onclick = function() {
     this.disabled = 'disabled';
  }}

  document.querySelector('#get7').addEventListener('click', () => {
        getData(6);
      });
      //кнопка работает только один раз
      window.onload = function() {
  document.getElementById("get7").onclick = function() {
     this.disabled = 'disabled';
  }}


  document.querySelector('#get8').addEventListener('click', () => {
        getData(7);
      });
      //кнопка работает только один раз
      window.onload = function() {
  document.getElementById("get8").onclick = function() {
     this.disabled = 'disabled';
  }}


  document.querySelector('#get9').addEventListener('click', () => {
        getData(8);
      });
      //кнопка работает только один раз
      window.onload = function() {
  document.getElementById("get9").onclick = function() {
     this.disabled = 'disabled';
  }}



  document.querySelector('#get10').addEventListener('click', () => {
        getData(9);
      });
      //кнопка работает только один раз
      window.onload = function() {
  document.getElementById("get10").onclick = function() {
     this.disabled = 'disabled';
  }}



  document.querySelector('#get11').addEventListener('click', () => {
        getData(10);
      });
      //кнопка работает только один раз
      window.onload = function() {
  document.getElementById("get11").onclick = function() {
     this.disabled = 'disabled';
  }}


  document.querySelector('#get12').addEventListener('click', () => {
        getData(11);
      });
      //кнопка работает только один раз
      window.onload = function() {
  document.getElementById("get12").onclick = function() {
     this.disabled = 'disabled';
  }}



  document.querySelector('#get13').addEventListener('click', () => {
        getData(12);
      });
      //кнопка работает только один раз
      window.onload = function() {
  document.getElementById("get13").onclick = function() {
     this.disabled = 'disabled';
  }}
})

$("#myBtn").click(function()
{
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
    
})

 
});



