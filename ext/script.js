/*jshint esversion: 6 */

/* 
1.cookies 
2.header
3.sidebar_left
4.sidebar_right
5.content
*/

/* -------------------------------------------- */

let video_channel_array = Array.from(
  document.getElementsByClassName("video_channel_name")
);
let video_img_array = Array.from(document.getElementsByClassName("video_img"));
let video_meta_array = Array.from(
  document.getElementsByClassName("video_meta")
);
let video_time_array = Array.from(
  document.getElementsByClassName("video_time")
);
let video_title_array = Array.from(
  document.getElementsByClassName("video_title")
);

let glass = document.getElementById("search_glass");
let logo = document.getElementById("logo");
let search = document.getElementById("search_bar");

let left_container = document.querySelector("#sidebar_left_container");
let right_container = document.querySelector("#sidebar_right_container");
let video_container = document.getElementById("video_container");

let bell_li = document.querySelector("#bell_li");
let burger_li = document.querySelector("#burger_li");
let camera_li = document.querySelector("#camera_li");
let dots_li = document.querySelector("#dots_li");
let profile_butt = document.querySelector("#profile_butt");

let sidebar_img = document.getElementsByClassName("side_img");
let sidebar_right_txt = document.getElementsByClassName("side_text_right");
let sidebar_txt = document.getElementsByClassName("side_text");

let creator = document.querySelector("#creator");

let articles = document.getElementsByTagName("article");
let article_count = articles.length;

let GOO_ico = Array.from(document.getElementsByClassName("topbar_ico"));

let characters_el = [" ", "χ", "ε"];
let dates_el = ["μέρες", "ώρες", "λεπτά", "μήνες"];
let characters_en = [" ", "k", "m"];
let dates_en = ["days", "hours", "minutes", "months"];

let characters_length_el =
  characters_el[Math.floor(Math.random() * characters_el.length)];
let dates_length_el = dates_el[Math.floor(Math.random() * dates_el.length)];
let characters_length_en =
  characters_en[Math.floor(Math.random() * characters_en.length)];
let dates_length_en = dates_en[Math.floor(Math.random() * dates_en.length)];

let hidden = true;
let hidden_prof = true;

let current_width = window.innerWidth;

/* ///// */

let goog;
let firef;

let win_nav = window.navigator;
let vendor = win_nav.vendor;

if (vendor == "Google Inc." || navigator.userAgent.indexOf("Chrome") != -1) {
  goog = true;
  firef = false;
}

else if (navigator.userAgent.indexOf("Firefox") != -1) {
  goog = false;
  firef = true;
}

/* -------------------------------------------- */

/* 1. cookies */
/* set and call cookies */
var lang = Cookies.get("lang");
var theme = Cookies.get("theme");

let load = 1;

if (document.cookie.length === 0) {

  Cookies.set("theme", "light", {
    expires: 300,
    path: ''
  });

  Cookies.set("lang", "gr", {
    expires: 300,
    path: ''
  });

  window.location.reload();

}


else if (document.cookie.length !== 0) {

  if (theme !== 0) {

    if (theme == "light") {
      invert_l();
    }

    else if (theme == "dark") {
      invert_d();
    }

  }


  if (lang !== 0) {

    if (lang == "eng") {

      document.documentElement.style.setProperty("--time_mleft", "12.95rem");
      document.documentElement.style.setProperty("--time_mtop", "7.6rem");
      logo.style.width = "65.5%";
      video_channel_array.forEach(fontsize_general_en);
      video_meta_array.forEach(fontsize_general_en);
      video_meta_array.forEach(randomizer_meta_eng);
      video_title_array.forEach(fontsize_titles_en);
      speak_eng();
    }

    else if (lang == "gr") {

      document.documentElement.style.setProperty("--time_mleft", "12.4rem");
      document.documentElement.style.setProperty("--time_mtop", "7.2rem");
      logo.style.width = "69%";
      video_channel_array.forEach(fontsize_general);
      video_meta_array.forEach(fontsize_general);
      video_meta_array.forEach(randomizer_meta_el);
      video_title_array.forEach(fontsize_titles);
      speak_gr();
    }

  }

}

/* -------------------------------------------- */

/* 2. browsers */
/* change values according to browser */

if (firef) {
  for (left_p = 0; left_p < sidebar_txt.length; left_p++) {
    sidebar_txt[left_p].style.fontSize = "0.68rem";
    sidebar_txt[left_p].style.marginTop = "-1.47rem";
  }

  for (right_p = 0; right_p < sidebar_right_txt.length; right_p++) {
    sidebar_right_txt[right_p].style.fontSize = "0.68rem";
    sidebar_right_txt[right_p].style.marginTop = "-1.41rem";
  }

  video_time_array.forEach(randomizer);

  /* ///// */

  window.addEventListener("resize", function () {
    current_width = window.innerWidth;

    if (current_width >= 1087) {
      video_container.style.marginLeft = "0.5rem";
      video_container.style.left = "14vw";
      //video_container.style.width = "93vw";
    }

    if (current_width >= 724 && !(current_width >= 1087)) {
      video_container.style.marginLeft = "0.5rem";
      video_container.style.left = "24vw";
      //video_container.style.width = "93vw";
    }

    else if (current_width < 900) {
      video_container.style.marginLeft = "0.1rem";
      // video_container.style.width = "93vw";
      if (current_width <= 720) {
        video_container.style.width = "76vw";
        video_container.style.left = "35vw";
      }
    }

  });


  window.addEventListener("load", function () {
    current_width = window.innerWidth;

    if (current_width >= 1087) {
      video_container.style.marginLeft = "0.5rem";
      video_container.style.left = "14vw";
      //video_container.style.width = "93vw";
    }

    if (current_width >= 724 && !(current_width >= 1087)) {
      video_container.style.marginLeft = "0.5rem";
      video_container.style.left = "24vw";
      //video_container.style.width = "93vw";
    }

    else if (current_width < 900) {
      video_container.style.marginLeft = "0.1rem";
      // video_container.style.width = "93vw";
      if (current_width <= 720) {
        video_container.style.width = "76vw";
        video_container.style.left = "35vw";
      }
    }

  });
}


else if (goog) {

  document.querySelector("#bell_butt").style.width = "18px";
  document.getElementById("camera_butt").style.width = "20px";
  document.getElementById("camera_li").style.marginTop = "0.1rem";
  document.querySelector("h1").style.fontSize = "1.3rem";
  glass.style.height = "15px";
  glass.style.marginTop = "0.1rem";
  glass.style.width = "15px";
  GOO_ico.forEach(widthadjust25);
  logo.style.height = "1.7rem";
  logo.style.width = "63%";
  //video_container.style.left = "7.5rem";
  video_container.style.width = "88vw";


  for (left_p = 0; left_p < sidebar_txt.length; left_p++) {
    sidebar_txt[left_p].style.marginTop = "-1.5rem";
    sidebar_txt[left_p].style.fontSize = "0.65rem";
  }

  for (right_p = 0; right_p < sidebar_right_txt.length; right_p++) {
    sidebar_right_txt[right_p].style.marginTop = "-1.45rem";
    sidebar_right_txt[right_p].style.fontSize = "0.65rem";
  }

  //console.log("google");

  video_time_array.forEach(randomizer);

  /* ///// */

  window.addEventListener("resize", function () {
    current_width = window.innerWidth;

    if (current_width >= 2210) {
      video_container.style.left = "4vw";
    }

    if (current_width >= 900 && !(current_width >= 2210)) {
      video_container.style.left = "10vw";
      video_container.style.width = "100vw";
    }

    if (current_width < 900 && !(current_width < 623)) {
      //video_container.style.left = "7.5rem";
      video_container.style.width = "88vw";
    }

    if (current_width > 623 && !(current_width >= 900)) {
      video_container.style.left = "20vw";
    }

    else if (current_width <= 623) {
      video_container.style.left = "30vw";
    }
  });


  window.addEventListener("load", function () {
    current_width = window.innerWidth;

    if (current_width >= 2210) {
      video_container.style.left = "4vw";
    }

    if (current_width >= 900 && !(current_width >= 2210)) {
      video_container.style.left = "10vw";
      video_container.style.width = "100vw";
    }

    if (current_width < 900 && !(current_width < 623)) {
      //video_container.style.left = "7.5rem";
      video_container.style.width = "88vw";
    }

    if (current_width > 623 && !(current_width >= 900)) {
      video_container.style.left = "20vw";
    }

    else if (current_width <= 623) {
      video_container.style.left = "30vw";
    }
  });
}

/* -------------------------------------------- */

/* 3. menus & buttons */

/* 3.1 menu animations */

document.querySelector("#burger_butt").addEventListener("click", function () {
  if (hidden == true) {
    left_container.classList.add("sidebar_left_container_show");
    left_container.classList.remove("sidebar_left_container_hide");
    hidden = false;
  } else if (hidden == false) {
    left_container.classList.add("sidebar_left_container_hide");
    left_container.classList.remove("sidebar_left_container_show");
    hidden = true;
  }

  if (hidden_prof == false) {
    right_container.classList.add("sidebar_right_container_hide");
    right_container.classList.remove("sidebar_right_container_show");
    hidden_prof = true;
  }
});

/* ///// */
/* 3.2 buttons effects */

burger_li.addEventListener("mouseenter", function () {
  if (theme == "light") {
    if (firef) {
      document.querySelector("#burger_butt").style.filter =
        "invert() brightness(0.5)";
    } else if (goog) {
      document.querySelector("#burger_butt").style.webkitFilter =
        "invert() brightness(0.5)";
    }
  } else if (theme == "dark") {
    document.querySelector("#burger_butt").style.opacity = "0.4";
  }
});

burger_li.addEventListener("mouseleave", function () {
  if (theme == "light") {
    document.querySelector("#burger_butt").style.filter =
      "invert() brightness(0)";
  } else if (theme == "dark") {
    document.querySelector("#burger_butt").style.opacity = "1";
  }
});

/* ///// */

profile_butt.addEventListener("click", function () {
  if (hidden_prof == true) {
    right_container.classList.add("sidebar_right_container_show");
    right_container.classList.remove("sidebar_right_container_hide");
    hidden_prof = false;
  } else if (hidden_prof == false) {
    right_container.classList.add("sidebar_right_container_hide");
    right_container.classList.remove("sidebar_right_container_show");
    hidden_prof = true;
  }

  if (hidden == false) {
    left_container.classList.add("sidebar_left_container_hide");
    left_container.classList.remove("sidebar_left_container_show");
    hidden = true;
  }
});

/* ///// */

camera_li.addEventListener("mouseenter", function () {
  if (theme == "light") {
    if (firef) {
      document.querySelector("#camera_butt").style.filter =
        "invert() brightness(0.5)";
    } else if (goog) {
      document.querySelector("#camera_butt").style.webkitFilter =
        "invert() brightness(0.5)";
    }
  } else if (theme == "dark") {
    document.querySelector("#camera_butt").style.opacity = "0.4";
  }
});

camera_li.addEventListener("mouseleave", function () {
  if (theme == "light") {
    document.querySelector("#camera_butt").style.filter =
      "invert() brightness(0)";
  } else if (theme == "dark") {
    document.querySelector("#camera_butt").style.opacity = "1";
  }
});

/* ///// */

dots_li.addEventListener("mouseenter", function () {
  if (theme == "light") {
    if (firef) {
      document.querySelector("#dots_butt").style.filter =
        "invert() brightness(0.5)";
    } else if (goog) {
      document.querySelector("#dots_butt").style.webkitFilter =
        "invert() brightness(0.5)";
    }
  } else if (theme == "dark") {
    document.querySelector("#dots_butt").style.opacity = "0.4";
  }
});

dots_li.addEventListener("mouseleave", function () {
  if (theme == "light") {
    document.querySelector("#dots_butt").style.filter =
      "invert() brightness(0)";
  } else if (theme == "dark") {
    document.querySelector("#dots_butt").style.opacity = "1";
  }
});

/* ///// */

bell_li.addEventListener("mouseenter", function () {
  if (theme == "light") {
    if (firef) {
      document.querySelector("#bell_butt").style.filter =
        "invert() brightness(0.5)";
    } else if (goog) {
      document.querySelector("#bell_butt").style.webkitFilter =
        "invert() brightness(0.5)";
    }
  } else if (theme == "dark") {
    document.querySelector("#bell_butt").style.opacity = "0.4";
  }
});

bell_li.addEventListener("mouseleave", function () {
  if (theme == "light") {
    document.querySelector("#bell_butt").style.filter =
      "invert() brightness(0)";
  } else if ((theme = "dark")) {
    document.querySelector("#bell_butt").style.opacity = "1";
  }
});

/* ///// */

document.querySelector("#profile_li").addEventListener("mouseenter", function () {
  if (theme == "light") {
    if (firef) {
      profile_butt.style.filter = "invert() brightness(0.5)";
    } else if (goog) {
      profile_butt.style.webkitFilter = "invert() brightness(0.5)";
    }
  } else if (theme == "dark") {
    profile_butt.style.opacity = "0.4";
  }
});

document
  .querySelector("#profile_li")
  .addEventListener("mouseleave", function () {
    if (theme == "light") {
      profile_butt.style.filter = "invert() brightness(0)";
    } else if (theme == "dark") {
      profile_butt.style.opacity = "1";
    }
  });

document.querySelector("#search_butt").addEventListener("click", function () {
  event.preventDefault();
});

/* ///// */
/* 3.3. lang buttons  */

document.querySelector("#eng_txt").addEventListener("click", function () {
  if (lang == "gr") {
    speak_eng();
    window.location.reload();
  }
});

document.querySelector("#gr_txt").addEventListener("click", function () {
  if (lang == "eng") {
    speak_gr();
    window.location.reload();
  }
});

/* ///// */
/* 3.3. theme buttons  */

document.querySelector("#dark_butt").addEventListener("click", function () {
  if (theme == "light") {
    invert_d();
    window.location.reload();
  }
});

document.querySelector("#dark_txt").addEventListener("click", function () {
  if (theme == "light") {
    invert_d();
    window.location.reload();
  }
});

/* ///// */

document.querySelector("#light_butt").addEventListener("click", function () {
  if ((theme == "dark")) {
    invert_l();
    window.location.reload();
  }
});

document.querySelector("#light_txt").addEventListener("click", function () {
  if (theme = "dark") {
    invert_l();
    window.location.reload();
  }
});


/* -------------------------------------------- */

/* 4infinity loader */

addEventListener("scroll", function () {
  /* infinitely create videos with different thumbs and view counts */
  if (
    window.innerHeight + Math.ceil(window.pageYOffset) >=
    document.body.offsetHeight - 10
  ) {
    video_channel_array = Array.from(
      document.getElementsByClassName("video_channel_name")
    );
    video_img_array = Array.from(document.getElementsByClassName("video_img"));
    video_meta_array = Array.from(
      document.getElementsByClassName("video_meta")
    );
    video_time_array = Array.from(
      document.getElementsByClassName("video_time")
    );
    video_title_array = Array.from(
      document.getElementsByClassName("video_title")
    );
    if (theme == "light" && lang == "gr") {
      characters_length_el =
        characters_el[Math.floor(Math.random() * characters_el.length)];
      dates_length_el = dates_el[Math.floor(Math.random() * dates_el.length)];
      let articles = document.createElement("article");
      document.getElementById("main_section").append(articles);
      articles.classList.add("video_boxes");
      articles.innerHTML =
        ` <ul>
            <a href="#" target="_self" tabindex=-1 data-duration="` +
        Math.floor(Math.random() * 100) +
        `:` +
        Math.floor(Math.random() * 6) +
        Math.floor(Math.random() * 9) +
        `" class="video_time"><img
            src="https://picsum.photos/240/140.webp?random=` +
        Math.floor(Math.random() * 100) +
        `" draggable="false" tabindex=0
            class="video_img video_img_light"></a>
            <div class="video_bottom">
            <a href="#" target="_self" tabindex=-1><img src="https://picsum.photos/36/36.webp?random=` +
        Math.floor(Math.random() * 100) +
        `"
            draggable="false" tabindex=0 class="channel_img"></a>
            <br>
            <a href="#" tabindex=-1>
             <p class="video_title" tabindex=0 style="font-size:0.72rem;">Τίτλος βίντεο</p>
            </a>
            <a href="#" tabindex=-1>
            <p class="video_channel_name" tabindex=0 style="font-size:0.68rem;">Κανάλι</p>
            </a>
            <p class="video_meta" style="font-size:0.68rem;"> ` +
        Math.floor(Math.random() * 999 + 1) +
        characters_length_el +
        " θεάσεις • " +
        Math.floor(Math.random() * 5 + 1) +
        Math.floor(Math.random() * 9) +
        " " +
        dates_length_el +
        `</p>
            </ul>
            </div>`;
    } else if (theme == "dark" && lang == "gr") {
      characters_length_el =
        characters_el[Math.floor(Math.random() * characters_el.length)];
      dates_length_el = dates_el[Math.floor(Math.random() * dates_el.length)];
      let articles = document.createElement("article");
      document.getElementById("main_section").append(articles);
      articles.classList.add("video_boxes");
      articles.innerHTML =
        ` <ul>
            <a href="#" target="_self" tabindex=-1 data-duration="` +
        Math.floor(Math.random() * 100) +
        `:` +
        Math.floor(Math.random() * 6) +
        Math.floor(Math.random() * 9) +
        `" class="video_time"><img
            src="https://picsum.photos/240/140.webp?random=` +
        Math.floor(Math.random() * 100) +
        `" draggable="false" tabindex=0
            class="video_img"></a>
            <div class="video_bottom">
            <a href="#" target="_self" tabindex=-1><img src="https://picsum.photos/36/36.webp?random=` +
        Math.floor(Math.random() * 100) +
        `"
            draggable="false" tabindex=0 class="channel_img"></a>
            <br>
            <a href="#" tabindex=-1>
            <p class="video_title color_switch" tabindex=0 style="filter: invert(1); font-size:0.72rem;">Τίτλος βίντεο</p>
             </a>
            <a href="#" tabindex=-1>
            <p class="video_channel_name color_switch" tabindex=0 style="font-size:0.68rem;">Κανάλι</p>
            </a>
            <p class="video_meta color_switch" style="font-size:0.68rem;">` +
        Math.floor(Math.random() * 999 + 1) +
        characters_length_el +
        " θεάσεις • " +
        Math.floor(Math.random() * 5 + 1) +
        Math.floor(Math.random() * 9) +
        " " +
        dates_length_el +
        `</p>
            </ul>
            </div>`;
    } else if (theme == "light" && lang == "eng") {
      /* ///// */
      characters_length_en =
        characters_en[Math.floor(Math.random() * characters_en.length)];
      dates_length_en = dates_en[Math.floor(Math.random() * dates_en.length)];
      let articles = document.createElement("article");
      document.getElementById("main_section").append(articles);
      articles.classList.add("video_boxes");
      articles.innerHTML =
        ` <ul>
            <a href="#" target="_self" tabindex=-1 data-duration="` +
        Math.floor(Math.random() * 100) +
        `:` +
        Math.floor(Math.random() * 6) +
        Math.floor(Math.random() * 9) +
        `" class="video_time"><img
            src="https://picsum.photos/240/140.webp?random=` +
        Math.floor(Math.random() * 100) +
        `" draggable="false" tabindex=0
            class="video_img video_img_light"></a>
            <div class="video_bottom">
            <a href="#" target="_self" tabindex=-1><img src="https://picsum.photos/36/36.webp?random=` +
        Math.floor(Math.random() * 100) +
        `"
            draggable="false" tabindex=0 class="channel_img"></a>
            <br>
            <a href="#" tabindex=-1>
            <p class="video_title" tabindex=0 style="font-size:0.72rem;">Video Title</p>
            </a>
            <a href="#" tabindex=-1>
            <p class="video_channel_name" tabindex=0 style="font-size:0.68rem;">Channel</p>
            </a>
            <p class="video_meta" style="font-size:0.68rem;"> ` +
        Math.floor(Math.random() * 999 + 1) +
        characters_length_en +
        " views • " +
        Math.floor(Math.random() * 5 + 1) +
        Math.floor(Math.random() * 9) +
        " " +
        dates_length_en +
        `</p>
            </ul>
            </div>`;
    } else if (theme == "dark" && lang == "eng") {
      characters_length_en =
        characters_en[Math.floor(Math.random() * characters_en.length)];
      dates_length_en = dates_en[Math.floor(Math.random() * dates_en.length)];
      let articles = document.createElement("article");
      document.getElementById("main_section").append(articles);
      articles.classList.add("video_boxes");
      articles.innerHTML =
        ` <ul>
            <a href="#" target="_self" tabindex=-1 data-duration="` +
        Math.floor(Math.random() * 100) +
        `:` +
        Math.floor(Math.random() * 6) +
        Math.floor(Math.random() * 9) +
        `" class="video_time"><img
            src="https://picsum.photos/240/140.webp?random=` +
        Math.floor(Math.random() * 100) +
        `" draggable="false" tabindex=0
            class="video_img"></a>
            <div class="video_bottom">
            <a href="#" target="_self" tabindex=-1><img src="https://picsum.photos/36/36.webp?random=` +
        Math.floor(Math.random() * 100) +
        `"
            draggable="false" tabindex=0 class="channel_img"></a>
            <br>
            <a href="#" tabindex=-1>
            <p class="video_title color_switch" tabindex=0 style="filter: invert(1);  font-size:0.72rem;">Video Title</p>
            </a>
            <a href="#" tabindex=-1>
            <p class="video_channel_name color_switch" tabindex=0 style="font-size:0.68rem;">Channel</p>
            </a>
            <p class="video_meta color_switch" style="font-size:0.68rem;"> ` +
        Math.floor(Math.random() * 999 + 1) +
        characters_length_en +
        " views • " +
        Math.floor(Math.random() * 5 + 1) +
        Math.floor(Math.random() * 9) +
        " " +
        dates_length_en +
        `</p>
            </ul>
            </div>`;
    }
  }
});

/* ///// */

/* randomize video meta*/

function randomizer(item) {
  item.dataset.duration =
    +Math.floor(Math.random() * 100) +
    ":" +
    Math.floor(Math.random() * 5) +
    Math.floor(Math.random() * 9);
}

function randomizer_meta_el(item) {
  characters_length_el =
    characters_el[Math.floor(Math.random() * characters_el.length)];
  dates_length_el = dates_el[Math.floor(Math.random() * dates_el.length)];
  item.innerHTML =
    +Math.floor(Math.random() * 999 + 1) +
    characters_length_el +
    " θεάσεις • " +
    Math.floor(Math.random() * 5 + 1) +
    Math.floor(Math.random() * 9) +
    " " +
    dates_length_el;
}

function randomizer_meta_eng(item) {
  characters_length_en =
    characters_en[Math.floor(Math.random() * characters_en.length)];
  dates_length_en = dates_en[Math.floor(Math.random() * dates_en.length)];
  item.innerHTML =
    +Math.floor(Math.random() * 999 + 1) +
    characters_length_en +
    " views • " +
    Math.floor(Math.random() * 5 + 1) +
    Math.floor(Math.random() * 9) +
    " " +
    dates_length_en;
}

/* fonts */

function widthadjust25(item) {
  item.style.width = "25px";
}

function fontsize_titles(item) {
  item.style.fontSize = "0.75rem";
}

function fontsize_titles_en(item) {
  item.style.fontSize = "0.85rem";
}

function fontsize_general(item) {
  item.style.fontSize = "0.68rem";
}

function fontsize_general_en(item) {
  item.style.fontSize = "0.6rem";
}

/* ///// */

/*  color mode functions*/

function invert_d() {
  document.querySelector("#bell_butt").classList.add("color_switch");
  document.querySelector("#burger_butt").classList.add("color_switch");
  document.querySelector("#camera_butt").classList.add("color_switch");
  document.querySelector("#dots_butt").classList.add("color_switch");
  document.querySelector("#search_butt").classList.add("color_switch");
  profile_butt.classList.add("color_switch");

  for (left_p = 0; left_p < sidebar_txt.length; left_p++) {
    sidebar_txt[left_p].classList.add("color_switch");
  }

  for (right_p = 0; right_p < sidebar_right_txt.length; right_p++) {
    sidebar_right_txt[right_p].classList.add("color_switch");
  }

  for (img = 0; img < sidebar_img.length; img++) {
    sidebar_img[img].classList.add("color_switch");
  }

  document.querySelector("#creator").classList.add("color_switch");
  document.querySelector("#line_right_1").classList.add("color_switch");
  document.querySelector("#line_right_2").classList.add("color_switch");

  document.querySelector("#sidebar_right").style.backgroundColor = "#202020";
  document.querySelector("#video_container").style.backgroundColor = "#181818";
  document.querySelector("body").style.backgroundColor = "#181818";
  document.querySelector("header").style.backgroundColor = "#202020";
  left_container.style.backgroundColor = "#202020";

  video_channel_array.forEach(meta_switch);
  video_img_array.forEach(shadow_back_dark);
  video_meta_array.forEach(meta_switch);
  video_title_array.forEach(meta_switch);

  Cookies.set("theme", "dark", {
    expires: 300,
    path: ''
  });
}

/* ///// */

function invert_l() {
  document.querySelector("#bell_butt").classList.remove("color_switch");
  document.querySelector("#burger_butt").classList.remove("color_switch");
  document.querySelector("#camera_butt").classList.remove("color_switch");
  document.querySelector("#dots_butt").classList.remove("color_switch");
  document.querySelector("#search_butt").classList.remove("color_switch");
  profile_butt.classList.remove("color_switch");

  for (left_p = 0; left_p < sidebar_txt.length; left_p++) {
    sidebar_txt[left_p].classList.remove("color_switch");
  }

  for (right_p = 0; right_p < sidebar_right_txt.length; right_p++) {
    sidebar_right_txt[right_p].classList.remove("color_switch");
  }

  for (img = 0; img < sidebar_img.length; img++) {
    sidebar_img[img].classList.remove("color_switch");
  }

  document.querySelector("#creator").classList.remove("color_switch");
  document.querySelector("#line_right_1").classList.remove("color_switch");
  document.querySelector("#line_right_2").classList.remove("color_switch");

  document.querySelector("#sidebar_right").style.backgroundColor = "white";
  document.querySelector("#video_container").style.backgroundColor = "white";
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("header").style.backgroundColor = "white";
  left_container.style.backgroundColor = "white";

  video_channel_array.forEach(meta_switch_del);
  video_img_array.forEach(shadow_back_light);
  video_meta_array.forEach(meta_switch_del);
  video_title_array.forEach(meta_switch_del);

  Cookies.set("theme", "light", {
    expires: 300,
    path: ''
  });
}

/* ///// */

function meta_switch(item) {
  item.classList.add("color_switch");
}

function meta_switch_del(item) {
  item.classList.remove("color_switch");
}

function shadow_back_dark(item) {
  item.classList.add("video_img_dark");
  item.classList.remove("video_img_light");
}

function shadow_back_light(item) {
  item.classList.add("video_img_light");
  item.classList.remove("video_img_dark");
}

/* ///// */

/*  language functions*/

function speak_gr() {
  video_channel_array.forEach(switch_channel_gr);
  video_meta_array.forEach(randomizer_meta_el);
  video_title_array.forEach(switch_title_gr);

  dark_txt.style.right = "4.2rem";
  eng_txt.style.right = "3.85rem";
  gr_txt.style.right = "3.1rem";
  light_txt.style.right = "3.2rem";

  search.setAttribute("placeholder", "Αναζήτηση");

  bell_li.dataset.tip = "Ειδο/σεις";
  burger_li.dataset.tip = "Μενού";
  camera_li.dataset.tip = "Δημιουργία Βιντεο";
  dots_li.dataset.tip = "Εφαρμογές";

  document.documentElement.style.setProperty("--tip_height_camera", "30px");
  document.documentElement.style.setProperty("--tip_mtop_camera", "2.3rem");
  document.documentElement.style.setProperty("--tip_width_bells", "75px");
  document.documentElement.style.setProperty("--tip_width_burger", "55px");
  document.documentElement.style.setProperty("--tip_width_camera", "90px");
  document.documentElement.style.setProperty("--tip_width_dots", "85px");
  document.documentElement.style.setProperty("--tip_width", "90px");

  document.documentElement.style.setProperty("--tip_mleft_bells", "-1.8rem");
  document.documentElement.style.setProperty("--tip_mleft_camera", "-2.1rem");
  document.documentElement.style.setProperty("--tip_mleft_dots", "-1.85rem");

  sidebar_txt[0].innerHTML = `Εξερεύνηση`;
  sidebar_txt[1].innerHTML = `Εγγραφές`;
  sidebar_txt[2].innerHTML = `Βιβλιοθήκη`;
  sidebar_txt[3].innerHTML = `Ιστορικό`;
  sidebar_txt[4].innerHTML = `Τα Βίντεό σας`;
  sidebar_txt[5].innerHTML = `Δείτε Αργότερα`;
  sidebar_txt[6].innerHTML = `Αρεσκόμενα Βίντεο`;

  creator.innerHTML = `Δημιουργός:<br>Γεώργιος Μαρίνος`;

  sidebar_right_txt[0].innerHTML = `Το Προφίλ μου`;
  sidebar_right_txt[1].innerHTML = `Ρυθμίσεις`;
  sidebar_right_txt[2].innerHTML = `Φωτεινό Θέμα`;
  sidebar_right_txt[3].innerHTML = `Σκοτεινό Θέμα`;
  sidebar_right_txt[4].innerHTML = `Ελληνικά`;
  sidebar_right_txt[5].innerHTML = `Αγγλικά`;

  Cookies.set("lang", "gr", {
    expires: 300,
    path: ''
  });
}

function switch_title_gr(item) {
  item.innerHTML = `Τίτλος βίντεο`;
}

function switch_channel_gr(item) {
  item.innerHTML = `Κανάλι`;
}

/* ///// */

function speak_eng() {
  video_channel_array = Array.from(
    document.getElementsByClassName("video_channel_name")
  );
  video_img_array = Array.from(document.getElementsByClassName("video_img"));
  video_meta_array = Array.from(document.getElementsByClassName("video_meta"));
  video_time_array = Array.from(document.getElementsByClassName("video_time"));
  video_title_array = Array.from(
    document.getElementsByClassName("video_title")
  );

  video_channel_array.forEach(switch_channel_eng);
  video_meta_array.forEach(randomizer_meta_eng);
  video_title_array.forEach(switch_title_eng);

  dark_txt.style.right = "3.75rem";
  eng_txt.style.right = "3.65rem";
  gr_txt.style.right = "2.65rem";
  light_txt.style.right = "2.85rem";

  bell_li.dataset.tip = "Notifications";
  burger_li.dataset.tip = "Menu";
  camera_li.dataset.tip = "Create";
  dots_li.dataset.tip = "Apps";
  search.setAttribute("placeholder", "Search");

  document.documentElement.style.setProperty("--tip_height_camera", "16px");
  document.documentElement.style.setProperty("--tip_mtop_camera", "2.65rem");
  document.documentElement.style.setProperty("--tip_width_bells", "94px");
  document.documentElement.style.setProperty("--tip_width_burger", "55px");
  document.documentElement.style.setProperty("--tip_width_camera", "55px");
  document.documentElement.style.setProperty("--tip_width_dots", "45px");
  document.documentElement.style.setProperty("--tip_width", "90px");

  document.documentElement.style.setProperty("--tip_mleft_bells", "-2.5rem");
  document.documentElement.style.setProperty("--tip_mleft_camera", "-1rem");
  document.documentElement.style.setProperty("--tip_mleft_dots", "-0.5rem");

  sidebar_txt[0].innerHTML = `Explore`;
  sidebar_txt[1].innerHTML = `Subscriptions`;
  sidebar_txt[2].innerHTML = `Library`;
  sidebar_txt[3].innerHTML = `History`;
  sidebar_txt[4].innerHTML = `Your Videos`;
  sidebar_txt[5].innerHTML = `Watch Later`;
  sidebar_txt[6].innerHTML = `Liked Videos`;

  creator.innerHTML = `Creator:<br>George Marinos`;

  sidebar_right_txt[0].innerHTML = `My profile`;
  sidebar_right_txt[0].style.bottom = "1.75rem";
  sidebar_right_txt[1].innerHTML = `Settings`;
  sidebar_right_txt[2].innerHTML = `Light Theme`;
  sidebar_right_txt[3].innerHTML = `Dark Theme`;
  sidebar_right_txt[4].innerHTML = `Greek`;
  sidebar_right_txt[5].innerHTML = `English`;

  Cookies.set("lang", "eng", {
    expires: 300,
    path: ''
  });
}

function switch_title_eng(item) {
  item.innerHTML = `Video Title`;
}

function switch_channel_eng(item) {
  item.innerHTML = `Channel`;
}





////////////////////////////////


