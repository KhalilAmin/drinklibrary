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

function showSearchForm() {
  document.getElementById("search").classList.toggle("show");
}

function showSearchResults() {
  event.preventDefault();
  document.getElementById("searchResultsDisplay").classList.toggle("show");
}

function closeResultsDiv() {
  document.getElementById("searchResultsDisplay").classList.toggle("show");
}

function closeSearchDiv() {
  document.getElementById("search").classList.toggle("show");
}
