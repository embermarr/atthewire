$(document).ready(function () {
     $("#membership").click(function () {
         $(".pop").fadeIn(300);
         positionPopup();
     });

     $(".close").click(function () {
         $(".pop").fadeOut(300);
     });
 });