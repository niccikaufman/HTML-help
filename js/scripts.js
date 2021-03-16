$(document).ready(function(){
  $("h1").click(function() {
    alert("This is a header.");
    alert("I SAID, this is a HEADER");
  });

  $("p").click(function(){
    alert("This is a paragraph.");
    alert("P FOR PARAGRAPH,ok?");
  });

  $("img").click(function(){
    alert("This is an image.");
    alert("It's an image of a CUTE CAT");
  });
});
