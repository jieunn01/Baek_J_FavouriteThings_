// promise
(() => {
  const infoEl = document.querySelector(".info");
  function getData() {
    fetch("./data.json") // when success -> then 
      .then((response) => response.json()) // json order succes -> then 
      .then((res) => {
        setEvent(res);
      });
  }

  function setEvent(data) {
    // console.log(data["first"]);
    const buttons = Array.from(document.querySelectorAll(".buttons .btn"));
    // console.log(buttons);
    let prevTarget; // remeber previous clicked button elements
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        // console.log(event.target);
        if (prevTarget !== undefined) {
             // X undefined -> already have selected button
          // console.log(`prevTarget`, prevTarget);
          prevTarget.classList.remove("selected"); // remove previous button selected class
        }
        const target = event.target;
        target.classList.add("selected"); // click -> add selected class
        prevTarget = target; // pass to previous button 
        // console.log(target.dataset.name);
        const key = target.dataset.name;
        // console.log(data[key]);
        makeInfo(data[key]);
      });
    });
  }

  function makeInfo(data) {
    // console.log(data);
    infoEl.innerHTML = `
      <div class="info__img">
        <img src="images/${data.img}" alt="${data.title}" />
      </div>
      <h2 class="info__title">${data.title}</h2>
      <h3 class="info__subtitle">${data.alt}</h3>
      <p class="info__content">${data.content}</p>
    `;
  }
  getData();
})();