let form = document.getElementById("form");
let button = document.getElementById("button");
let urlDiv = document.getElementById("resultUrl");

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
    resultUrl = res.data.result.full_short_link;
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
