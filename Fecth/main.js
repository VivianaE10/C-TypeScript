"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//metodo para optener informacion
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    //comunicacion asincorna
    const API_URL = "https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json";
    const response = yield fetch(API_URL);
    const data = yield response.json();
    return data;
});
let button = document.querySelector(".btnInfo"); //desencadena la accion
let paragraph = document.querySelector(".info"); //va resivir eldocumento
button.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetchData(); //optiene la informacion al hacer click
    paragraph.innerHTML = JSON.stringify(data); //parrafo tenga en su contenido toda la informacion
}));
