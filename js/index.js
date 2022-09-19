const url = "https://bakr-app.herokuapp.com/api/home";

const main = document.getElementById("card");
getMovies(url);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const cafes = data.data.Cafes;
      const hotels = data.data.Hotels;
      const restaurants = data.data.Restaurants;
      const tourists = data.data.TouristPlace;
      const clubs = data.data.club;
      console.log(cafes);
      showCities(cafes);
      showCities(hotels);
      showCities(restaurants);
      showCities(tourists);
      showCities(clubs);
      // movieDetails(data.results);
    });
}

function showCities(data) {
  data.forEach((home) => {
    const { id, name, pic, rate } = home;
    let src = pic[0];
    const homeCard = document.createElement("div");
    homeCard.classList.add("col-md-4");
    homeCard.classList.add("col-sm-6");
    homeCard.classList.add("col-lg-3");
    homeCard.classList.add("wow");
    homeCard.classList.add("animate__fadeInUp");
    homeCard.classList.add("car");
    homeCard.innerHTML = `
      <a href="./homeDetails.html?id=${id}">
          <div class="im">
            <img src="${src}" height="250px" width="100%">
            <div class="cap px-3">
              <h4 class="text-body">${name}</h4>
              <h6 class="text-muted">${rate}</h6>
            </div>
          </div>
      <a/>`;
    main.appendChild(homeCard);
  });
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn .bi")) {
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
