document.addEventListener("DOMContentLoaded", function() {

    var listmobile = document.querySelector(".list-mobile");
    listmobile.style.display = "none";

    var button = document.querySelector(".menu");
    
    button.addEventListener("click", function(e) {
      if(listmobile.style.display == "none") {
        listmobile.style.display = "inline-block";
      } else {
        listmobile.style.display = "none";
      }  
    });

});