function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function showAbout() {
  document.getElementById("about").style.display = "block";
}

function showSearchForm() {
  document.getElementById("display").style.display = "block";
}

function showSearchResults() {
  event.preventDefault();
  // document.getElementById("searchResultsDisplay").style.display = "block";
  document.getElementById("display").innerHTML =
    "<p class='closeDiv' onclick='closeSearchDiv()'>CLOSE</p>";
}

function closeAboutDiv() {
  document.getElementById("about").style.display = "none";
}

function closeResultsDiv() {
  document.getElementById("searchResultsDisplay").style.display = "none";
}

function closeSearchDiv() {
  document.getElementById("display").style.display = "none";
}
