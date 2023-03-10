let input = document.querySelector("#search-bar")
let button = document.querySelector("#button")
let quote_text = document.querySelector(".quote_text")
let author = document.querySelector(".quote-by")

function fetching(search) {
  fetch("https://api.quotable.io/random?tags=" + search)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      renderdata(data)
    }
    )
}
function renderdata(data) {
  console.log(data.content)
  quote_text.innerText = data.content;
  author.innerText = data.author;

}

button.addEventListener("click", () => {
  fetching(input.value)
  input.value = ""
})

// fetching("friendship")