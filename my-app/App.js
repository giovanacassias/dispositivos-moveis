"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expo_status_bar_1 = require("expo-status-bar");
const react_native_1 = require("react-native");
const Pet_1 = __importDefault(require("./src/components/Pet"));
const Car_1 = __importDefault(require("./src/components/Car"));
function App() {
    let obj = {
        car: "Fusca",
        brand: "Volkswagen",
        hp: 150,
    };
    return (<react_native_1.View style={styles.container}>
      <react_native_1.Text>Open up App.tsx to start working on your app!</react_native_1.Text>
      <expo_status_bar_1.StatusBar style="auto"/>
      <Pet_1.default></Pet_1.default>
      <Car_1.default car={obj.car} brand={obj.brand} hp={obj.hp}/>
    </react_native_1.View>);
}
exports.default = App;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
