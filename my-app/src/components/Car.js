"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
function Car({ car, brand, hp }) {
    return (<react_native_1.View>
      <react_native_1.Text>The car is: {car}</react_native_1.Text>
      <react_native_1.Text>The brand is: {brand}</react_native_1.Text>
      <react_native_1.Text>The hp is: {hp}</react_native_1.Text>
    </react_native_1.View>);
}
exports.default = Car;
