import { getData } from "./dom.js";

const API = "http://localhost:3000/data";
let data
async function get() {
  let response = await fetch(API);
  data = await response.json();
  getData(data);
}

async function editFun(id, user){
  let response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  get()
}

export { get, editFun, data };