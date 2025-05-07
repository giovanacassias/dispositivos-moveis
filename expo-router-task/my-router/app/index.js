"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const expo_router_1 = require("expo-router");
function index() {
    const idRandom = Math.round(Math.random() * 10);
    return (<react_native_1.View>
      <expo_router_1.Stack.Screen options={{
            title: "HOMEPAGE",
        }}/>
      <react_native_1.Text>You're in the index</react_native_1.Text>
      <expo_router_1.Link href={"/details"}>Go to details</expo_router_1.Link>
      <expo_router_1.Link href={{
            pathname: "/product/[id]",
            params: { id: idRandom },
        }}>
        Go to product
      </expo_router_1.Link>
    </react_native_1.View>);
}
exports.default = index;
