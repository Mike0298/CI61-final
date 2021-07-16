let form = document.getElementById("form");
let button = document.getElementById("button");
let urlDiv = document.getElementById("resultUrl");

let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");

let choosen = 1;

option1.addEventListener("click", () => {
  choosen = 1;
});

option2.addEventListener("click", () => {
  choosen = 2;
});

option3.addEventListener("click", () => {
  choosen = 3;
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  urlDiv.href = "";
  urlDiv.innerHTML = "";
  console.log("begin operation");
  let url = form.link.value;
  let resultUrl = "";
  try {
    console.log("begin api request");
    button.disabled = true;
    button.value = "Loading...";
    res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
    switch (choosen) {
      case 1:
        resultUrl = res.data.result.full_short_link;
        break;
      case 2:
        resultUrl = res.data.result.full_short_link2;
        break;
      case 3:
        resultUrl = res.data.result.full_short_link3;
        break;
      default:
        resultUrl = res.data.result.full_short_link;
    }
    console.log(resultUrl);
    urlDiv.href = resultUrl;
    urlDiv.innerHTML = resultUrl;
    console.log("end api request");
  } catch (error) {
    alert(error.message);
  }
  button.disabled = false;
  button.value = ">";

  console.log("end operation");
});
