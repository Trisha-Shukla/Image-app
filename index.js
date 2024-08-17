let accessKey="mIBlcNiKQ7GnT59QsTwXatMOhxCUplXzelz_F-P5PyA";
let inputvalue = document.getElementById("search-input");
let button = document.getElementById("btn");
let viewMore = document.getElementById("view-more");
let page = 1;

let apikey = `https://api.unsplash.com/search/photos/?page=${page}&query=${inputvalue.value}&client_id=${accessKey}`;

async function image(apikey) {
  console.log(inputvalue.value);

  apikey = `https://api.unsplash.com/search/photos/?page=${page}&query=${inputvalue.value}&client_id=${accessKey}`;
  let res = await fetch(apikey);
  let data = await res.json();
  let results = data.results;
  console.log(results);

  results.map((result) => {
    console.log(result.urls.small);

    document.querySelector(
      ".images"
    ).innerHTML += `<div class="image-box"><img src="${result.urls.small}"><a href="${result.links.html}" target="_blank">${result.alt_description}</a></div>`;
  });
  viewMore.style.display = "block";

  console.log(document.querySelector(".images"));
}

button.addEventListener("click", async (e) => {
  document.querySelector(".images").innerHTML = "";
  e.preventDefault();
  page = 1;
  await image();
});
viewMore.addEventListener("click", async (e) => {
  e.preventDefault();
  page++;
  await image();
});
