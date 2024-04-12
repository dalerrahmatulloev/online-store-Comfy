let cnt = 1;
let contenth1 = document.querySelector('.contenth1')
let navbarUpRight = document.querySelector(".navbarUpRight");
let dialog = document.querySelector(".dialog");
let exit = document.querySelector(".bi-x");
let container = document.querySelector(".container");
let sum = document.querySelector('.sum')
let window = document.querySelector('.window')
let footerRight = document.querySelector('.footerRight')
let footerImg = document.querySelector('.footerImg')
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

function getData(data) {
  let content = document.querySelector(".content");
  data.forEach((element) => {
    let card = document.createElement("div");
    if (cnt > 3) return;
    cnt++;
    card.innerHTML = `
        <div class="card">
            <img src="${element.img}" alt="">
            <h3>${element.name}</h3>
            <p>${element.price}</p>
        </div>
    `;
    content.appendChild(card);
    card.onclick = () => {
      window.style.display = "block";
      contenth1.innerHTML = "Products / " + element.name;
      footerImg.src = element.img;
      let name = document.createElement("h1");
      name.innerHTML = element.name;
      footerRight.appendChild(name);
      let company = document.createElement("h2");
      company.innerHTML = "BY " + element.company.toUpperCase();
      footerRight.appendChild(company);
      let div = document.createElement("div");
      footerRight.appendChild(div);
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.justifyContent = "space-between";
      let price = document.createElement("h3");
      price.innerHTML = element.price;
      div.appendChild(price);
      let divDiv = document.createElement("div");
      div.appendChild(divDiv);
      divDiv.style.display = "flex";
      divDiv.style.alignItems = "center";
      divDiv.style.marginTop = "30px";
      let red = document.createElement("div");
      red.classList.add("red");
      red.style.backgroundColor = "red";
      divDiv.appendChild(red);
      let black = document.createElement("div");
      black.classList.add("black");
      black.style.backgroundColor = "rgba(34, 34, 34, 1)";
      divDiv.appendChild(black);
      let text = document.createElement("p");
      text.innerHTML = element.about;
      text.style.lineHeight = "26px";
      text.style.fontFamily = "sans-serif";
      text.style.fontSize = "18px";
      text.style.color = "rgba(35, 82, 117, 1)";
      text.style.marginTop = "20px";
      footerRight.appendChild(text);
      let but = document.createElement("button");
      but.innerHTML = "ADD TO CART";
      but.style.backgroundColor = "rgba(186, 93, 44, 1)";
      but.style.border = "none";
      but.style.width = "220px";
      but.style.height = "50px";
      footerRight.appendChild(but);
      but.style.fontSize = "20px";
      but.style.color = "white";
      but.style.marginTop = "40px";
      but.onclick = () => {
        if (element.items == 0) {
          element.items = 1;
          copy.push(element);
        } else {
          element.items += 1;
        }
        editFun(element.id, element);
        localStorage.setItem("arr", JSON.stringify(copy));
      };
    };
  });
}

export { getData };