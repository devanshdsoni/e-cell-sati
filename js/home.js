function preLoader() {
  document.getElementById("pre-loader").style.display = "none";
}

// Change stylesheet on button click -
const btn = document.getElementById("switch-theme-btn");

btn.addEventListener("click", changeStylesheet);

function changeStylesheet() {
  if (btn.getAttribute("checked") == null) {
    console.log("no check");
    btn.setAttribute("checked", "");
  } else {
    btn.removeAttribute("checked");
    console.log("check");
  }

  let stylesheet = document.getElementById("cssFile");
  var stylesheetClass = stylesheet.className;
  if (stylesheetClass == "christmas-home") {
    stylesheet.href = "css/main-home.css";
    stylesheet.className = "main-home";
    document.getElementById("heading2").style.display = "none";
  } else if (stylesheetClass == "main-home") {
    stylesheet.href = "css/christmas-home.css";
    stylesheet.className = "christmas-home";
    document.getElementById("heading2").style.display = "block";
  }
}

// Change Navbar on scroll -
window.addEventListener("scroll", (event) => {
  let scrollPos = this.scrollY;

  let navbar = document.getElementById("navbar");
  if (scrollPos <= 70) {
    navbar.classList.add("navbar-dark");
    navbar.classList.add("bg-transparent");
    navbar.classList.add("nav-big");
    navbar.classList.remove("navbar-light");
    navbar.classList.remove("bg-light");
  } else if (scrollPos > 70) {
    navbar.classList.add("navbar-light");
    navbar.classList.remove("nav-big");
    navbar.classList.remove("navbar-dark");
    navbar.classList.remove("bg-transparent");
  }

  let go_up_arrow = document.getElementById("go-up-arrow");
  if (scrollPos <= 400) {
    go_up_arrow.style.display = "none";
  } else {
    go_up_arrow.style.display = "block";
  }
});

// JS for Subscription form
window.addEventListener("load", function (event) {
  var subscription = document.getElementById("subscription");

  subscription.addEventListener("submit", function (event) {
    var XHR = new XMLHttpRequest();
    var form_data = new FormData(subscription);
    XHR.addEventListener("load", signup_success);
    XHR.addEventListener("error", on_error);
    XHR.open("POST", "includes/subscription.php");
    XHR.send(form_data);

    document.getElementById("spinner").style.display = "inline-block";
    event.preventDefault();
  });
});

var signup_success = function (event) {
  document.getElementById("spinner").style.display = "none";
  var response = JSON.parse(event.target.responseText);
  if (response.success) {
    alert(response.message);
  } else {
    alert(response.message);
  }
};

var on_error = function (event) {
  document.getElementById("spinner").style.display = "none";
  alert("Oops! Something went wrong.");
};

window.addEventListener("scroll", (event) => {
  let windowPos = this.scrollY + 4;

  let navLinks = document.getElementsByClassName("nav-link");
  let navActive = [];

  if (windowPos <= vision.offsetTop) {
    // console.log("Home");
    navActive.push(navLinks[0]);
    navActive.push(navLinks[6]);
  } else if (windowPos >= vision.offsetTop && windowPos <= gallery.offsetTop) {
    // console.log("Vision");
    navActive.push(navLinks[1]);
    navActive.push(navLinks[7]);
  } else if (windowPos <= blog.offsetTop) {
    // console.log("Gallery");
    navActive.push(navLinks[2]);
    navActive.push(navLinks[8]);
  } else if (windowPos <= team.offsetTop) {
    // console.log("Blog");
    navActive.push(navLinks[3]);
    navActive.push(navLinks[9]);
  } else if (windowPos <= footer.offsetTop) {
    // console.log("Team");
    navActive.push(navLinks[4]);
    navActive.push(navLinks[10]);
  } else if (windowPos >= footer.offsetTop) {
    console.log("Footer");
  }

  for (let navLink of navLinks) {
    navLink.classList.remove("active");
  }

  for (let navAct of navActive) {
    navAct.classList.add("active");
  }
});
