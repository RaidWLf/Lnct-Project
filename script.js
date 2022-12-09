/** @format */

function toggle(elem) {
  var toBeBlur = document.getElementById("blur");
  toBeBlur.classList.toggle("active");
  console.log(elem.id);
  switch (elem.id) {
    case "insta":
      var toBePopped = document.getElementById("pop-1");
      toBePopped.classList.toggle("active-insta");
      break;
    case "linkedin":
      var toBePopped = document.getElementById("pop-2");
      toBePopped.classList.toggle("active-linkedin");
      break;
    case "gith":
      var toBePopped = document.getElementById("pop-3");
      toBePopped.classList.toggle("active-gith");
      break;
    default:
      break;
  }
}
