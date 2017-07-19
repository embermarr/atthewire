$(document).ready(function () {
     $("button").click(function () {
         $(".pop").fadeIn(300);
         positionPopup();
     });

     $(".close").click(function () {
         $(".pop").fadeOut(300);
     });
 });