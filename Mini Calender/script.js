const monthNameEl = document.querySelector("#month-name");
const dayNameEl = document.querySelector("#day-name");
const dayNumEl = document.querySelector("#day-number");
const yearEl = document.querySelector("#year");

const date = new Date();
// const month = date.getMonth();


monthNameEl.innerText = date.toLocaleString("en", {month: "long"});

dayNameEl.innerText = date.toLocaleString("en", {weekday: "long"});

dayNumEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();
