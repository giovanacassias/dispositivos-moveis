"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const expo_router_1 = require("expo-router");
function id() {
    const { id } = (0, expo_router_1.useLocalSearchParams)();
    const router = (0, expo_router_1.useRouter)();
    return (<react_native_1.View>
      <expo_router_1.Stack.Screen options={{
            title: "Product: " + id,
        }}/>

      <react_native_1.Text>Product number {id}</react_native_1.Text>
      <react_native_1.Button title="Ir para index" onPress={() => router.back()}></react_native_1.Button>
    </react_native_1.View>);
}
exports.default = id;
