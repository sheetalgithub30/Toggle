const toggle = document.querySelector("#toggle");

const circle = document.querySelector("#circle");

const container = document.querySelector("#container");

let flag = true;
toggle.addEventListener("click", () => {
  if (flag) {
    circle.classList.remove("left-0");
    circle.classList.add("right-0");
    toggle.style.backgroundColor = "rgb(33, 33, 32)";
    container.style.backgroundColor = "black";
    document.querySelector("p").style.color = "white";
    document.querySelector("#bird").src =
      "https://media.tenor.com/bJTY3F193JkAAAAj/chick-pio.gif";
      document.querySelector("h1").innerHTML = "Time to Sleep";
    flag = false;
  } 
  else 
  {
    circle.classList.remove("right-0");
    circle.classList.add("left-0");
    toggle.style.backgroundColor = "black";
    container.style.backgroundColor = "white";
    document.querySelector("p").style.color = "black";
    document.querySelector("#bird").src =
      "https://media.tenor.com/97NHobIyJ7IAAAAi/piyotaso-%E3%81%B4%E3%82%88%E3%81%9F%E3%81%9D.gif";
      document.querySelector("h1").innerHTML = "Time to Work";
    flag = true;
  }
});
