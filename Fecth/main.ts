//metodo para optener informacion
const fetchData = async () => {
  //comunicacion asincorna
  const API_URL =
    "https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json";
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

let button: HTMLAnchorElement = document.querySelector(
  ".btnInfo"
) as HTMLAnchorElement; //desencadena la accion
let paragraph: HTMLAnchorElement = document.querySelector(
  ".info"
) as HTMLAnchorElement; //va resivir eldocumento

button.addEventListener("click", async () => {
  const data = await fetchData(); //optiene la informacion al hacer click
  paragraph.innerHTML = JSON.stringify(data); //parrafo tenga en su contenido toda la informacion
});
