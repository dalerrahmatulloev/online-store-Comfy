
let navbarUpRight = document.querySelector(".navbarUpRight");
let dialog = document.querySelector(".dialog");
let exit = document.querySelector(".bi-x");
let container = document.querySelector(".container");
let sum = document.querySelector('.sum')
let copy = JSON.parse(localStorage.getItem("arr")) || [];
navbarUpRight.onclick = () => {
  dialog.showModal();
  let s = 0
  exit.onclick = () => {
    dialog.close()
  };
  function got() {
    container.innerHTML = ''
    copy.forEach((element) => {
      let elem = document.createElement("div");
      elem.innerHTML = `
      <div class="elem">
      <img src="${element.img}" alt="">
      <h2 class="dalete">&times;</h2>
      <div class="elemDiv">
          <h3>${element.name}</h3>
          <p>${element.price}</p>
          <div class="elemDivCnt">
              <i class="bi bi-plus-square"></i>
              <h4>${element.items}</h4>
              <i class="bi bi-dash-square"></i>
          </div>
      </div>
      `;
      container.appendChild(elem);
      let dalete = document.querySelector(".dalete");
      dalete.onclick = () => {
        copy = copy.filter((el) => el.id != element.id);
        localStorage.setItem("arr", JSON.stringify(copy));
        got()
      };
      let r = ''
      for (let i = 1; i < element.price.length; i++) {
        if(element.price[i] == ','){
          r+='.'
        } else {
          r+= element.price[i]
        }
      }
      s += Number(r)
      sum.innerHTML = "$" + s.toFixed(2)
    });
  }
  got()
};