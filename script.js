const login = document.querySelector(".login");
const loginform = document.querySelector(".loginform");
const x = document.querySelector(".x");
const back = document.querySelector(".back");
const elements = document.querySelectorAll(".continuewithgoogle");
const box1 = document.querySelector(".box1");
const sidebar = document.querySelector(".sidemain");
const hamb = document.querySelector(".hamburger");
const xside = document.querySelector(".closeiconsidebar")
const sharelinktextcopy = document.querySelector(".sharelinktextcopy")
const share = document.querySelector(".share")

login.addEventListener("click", () => {
  loginform.classList.add("loginactive");
});

x.addEventListener("click", () => {
  loginform.classList.remove("loginactive");
});

login.addEventListener("click", () => {
  back.classList.add("s");
});

x.addEventListener("click", () => {
  back.classList.remove("s");
});

// for (let i = 0; i < elements.length; i++) {
//    elements[i].addEventListener("click", function() {
//        alert("This is under working");
//    });
// }

elements.forEach((element) => {
  element.addEventListener("click", () => {
    alert("This is under working");
  });
});

box1.addEventListener("click", () => {
  window.location.href = "uplode htmls/uplode ocr.html";
});

hamb.addEventListener("click", () => {
  sidebar.classList.add("barlefta");
});

xside.addEventListener("click", () => {
  sidebar.classList.remove("barlefta");
});

sharelinktextcopy.addEventListener("click", () => {
  var sharelinktext = document.querySelector(".sharelinktext");
  sharelinktext.select();
  alert('copied to clipboard:' + sharelinktext.value)
});




// hamb.addEventListener("click", () => {
 
//   if (sidebar.classList.contains("barlefta")) {
//     sidebar.classList.remove("barlefta");
//   } else {
//     sidebar.classList.add("barlefta");
//   }
// });

share.addEventListener("click", () => {
  share.classList.toggle("sharea");
});




   