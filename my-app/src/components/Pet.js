"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
function Pet() {
    let pet2 = {
        animal: "dog",
        name: "Heidi",
        age: 15,
        imgDog: "../assets/images/cachorro-caramelo",
    };
    let pet1 = {
        animal: "cat",
        name: "Richard",
        age: 2,
    };
    let message = "";
    if (pet1.animal == "dog") {
        message = `Who let the dogs out? ${pet1.name}, ${pet1.age}`;
    }
    else {
        message = `Are we in Jumanji? ${pet1.animal}, ${pet1.age}`;
    }
    return <react_native_1.Text>{message}</react_native_1.Text>;
}
exports.default = Pet;
