"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const expo_router_1 = require("expo-router");
function details() {
    return (<react_native_1.View>
      <expo_router_1.Stack.Screen options={{
            title: "Details page",
        }}/>
      <react_native_1.Text>This is the details page</react_native_1.Text>
      <expo_router_1.Link href={"/"}>Go back to index!</expo_router_1.Link>
    </react_native_1.View>);
}
exports.default = details;
