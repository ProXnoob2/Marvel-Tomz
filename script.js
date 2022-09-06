// Hiding And Showing Nav Bar Area On Scroll
$(function(){


    var scroll = $(document).scrollTop();
    var navHeight = $('.nav-area').outerHeight();

     
    $(window).scroll(function(){
        var scrolled = $(document).scrollTop();


        if(scrolled > navHeight){
           $('.nav-area').addClass('animate');
        }else{
           $('.nav-area').removeClass('animate');
        }


        if(scrolled > scroll){
           $('.nav-area').removeClass('sticky');
        }else{
           $('.nav-area').addClass('sticky');
        }


        scroll = $(document).scrollTop();
    });


});

  
// Removing Dropdown On Scroll
$(function(){
     var scroll = $(document).scrollTop();
    var navHeight = $('.top-nav').outerHeight();

     
    $(window).scroll(function(){
        var scrolled = $(document).scrollTop();


        if(scrolled > navHeight){
          $('.dropdown-menu').removeClass('options')
          $('.dropdown2-menu').removeClass('options')
        }


        if(scrolled > scroll){
          $('.dropdown-menu').removeClass('options')
          $('.dropdown2-menu').removeClass('options')
        }


        scroll = $(document).scrollTop();
    });
});


// Removing Small Screens Nav Bar On Scroll
$(function(){
     var scroll = $(document).scrollTop();
    var navHeight = $('.top-nav').outerHeight();

     
    $(window).scroll(function(){
        var scrolled = $(document).scrollTop();


        if(scrolled > navHeight){
          $('.top-nav').removeClass('show');
          $('.movies-dropdown-menu').removeClass('menu');
          $('.series-dropdown-menu').removeClass('menu');
        }


        if(scrolled > scroll){
          $('.top-nav').removeClass('show');
          $('.movies-dropdown-menu').removeClass('menu');
          $('.series-dropdown-menu').removeClass('menu');
        }


        scroll = $(document).scrollTop();
    });
});


//Removing Small Screens Nav Bar On Click Outisde The Nav Bar
const $menu = $('.top-nav');
$(document).mouseup(e => {
  if (!$menu.is(e.target) // if the target of the click isn't the container...
  && $menu.has(e.target).length === 0) // ... nor a descendant of the container
    {
      $('.top-nav').removeClass("show");
      $('.movies-dropdown-menu').removeClass('menu');
      $('.series-dropdown-menu').removeClass('menu');


        $('.movies-dropdown').click(function(){
          $('.movies-dropdown-menu').toggleClass('menu');
        });


        $('.series-dropdown').click(function(){
          $('.series-dropdown-menu').toggleClass('menu');
        });


        $('.icon i').click(function(){
           $('.top-nav').toggleClass("show");
        });
    }
});
 

//Removing Dropdowns On Clicking Outside The Nav Area
const $navarea = $('.nav-area');
$(document).mouseup(e => {
  if (!$navarea.is(e.target) // if the target of the click isn't the container...
  && $navarea.has(e.target).length === 0) // ... nor a descendant of the container
    {
      $('.dropdown-menu').removeClass('options');
      $('.dropdown2-menu').removeClass('options');
    }
});


// Opening Dropdown Menu On Clicking Movies
$('.dropdown').click(function(){
    $('.dropdown-menu').toggleClass('options');
});


// Opening Dropdown Menu On Clicking Series
$('.dropdown2').click(function(){
    $('.dropdown2-menu').toggleClass('options');
});


// Tabs Changing
var tabButtons= document.querySelectorAll('.tabs .buttons button');
var tabPanels=  document.querySelectorAll(".tabs .movies-series");
function showPanel(panelIndex,colorCode){
  Array.from(tabButtons).forEach(function(node){
    node.style.backgroundColor="";
    node.style.color="";
  });
  tabButtons[panelIndex].style.backgroundColor=colorCode;
  Array.from(tabPanels).forEach(function(node){
    node.style.display="none";
  });
  tabPanels[panelIndex].style.display="flex";
};
showPanel(0, '#b22222');