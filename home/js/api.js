import { getData } from "./dom.js";

const API = "http://localhost:3000/data";

async function get() {
  let response = await fetch(API);
  let data = await response.json();
  getData(data);
}

export { get };