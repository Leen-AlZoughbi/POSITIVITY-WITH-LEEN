let submit = document.querySelector(".submit");
let card = document.querySelector(".card");
let categ = " ";
let diff = " ";
let index = 0;

function category(value) {
  categ = value;
}

function difficulty(value) {
  diff = value;
}


submit.addEventListener("click", () => { fetching() });

function fetching() {
  fetch("https://the-trivia-api.com/api/questions?" + categ + "&limit=20&" + diff)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      renderdata(data)
    }
    )
}
function renderdata(data) {
  let question = document.createElement("p");
  question.category = data.category;
  question.difficulty = data.type;

  question.innerHTML = data[index].question;
  index = (index + 1) % data.length;
  card.appendChild(question);
  let choices=document.createElement("ul")
//   choices=data.
}


fetching()