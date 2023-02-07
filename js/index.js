console.log("Your index.js file is loaded correctly");

/*Hover*/

$("li").mouseenter(function(){
    $(this).css("text-decoration", "underline");
    $(this).css("font-weight", "bold");    
  });

$("li").mouseleave(function(){
    $(this).css("text-decoration", "none");
    $(this).css("font-weight", "initial");
  });

  $("Button").mouseenter(function(){
    $(this).css("background-color", "#BD004F");
  });
  $("Button").mouseleave(function(){
    $(this).css("background-color", "#FF006B");
  });

/*Append Div*/ 

/*

$(".toggle1").on("click", function(){
    $("append1").slideToggle();
  })
  
$('.child').parent().remove()

$("toggle1").click(function(){
    $(".append1").remove(".append1");
    });

*/ 




$('.toggle1').on("click", function(){
   $('.append1').append("<div class='child'>After executing User interviews and identifying pains and needs, AllPack was wireframed, prototype, tested, and iterated.</div> <button class='buttonprototype'>Check Prototype</button>")
 });

$('.toggle1').on("click", function(){
    $('.append1').remove("<div class='child'>After executing User interviews and identifying pains and needs, AllPack was wireframed, prototype, tested, and iterated.</div> <button class='buttonprototype'>Check Prototype</button>")
  });


   
$('.toggle2').on("click", function(){
    $('.append2').append("<div class='child'>After executing User interviews and identifying pains and needs, Restyle was wireframed, prototype, tested, and iterated.</div> <button class='buttonprototype'>Check Prototype</button>")
  }); 
  
$('.toggle3').on("click", function(){
    $('.append3').append("<div class='child'>After executing User interviews and identifying pains and needs, IRCC Website was wireframed, prototype, tested, and iterated.</div> <button class='buttonprototype'>Check Prototype</button>")
  });

  $('.toggle4').on("click", function(){
    $('.append4').append("<div class='child'>After executing User interviews and identifying pains and needs, The 519 Website was wireframed, prototype, tested, and iterated.</div> <button class='buttonprototype'>Check Prototype</button>")
  });
