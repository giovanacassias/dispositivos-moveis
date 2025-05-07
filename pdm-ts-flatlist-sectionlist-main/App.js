"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const FlatListExample_1 = __importDefault(require("./src/components/FlatListExample"));
function App() {
    console.log("Check App.tsx for FlatList and SectionList Examples");
    return (<react_native_1.View style={styles.container}>
      <FlatListExample_1.default />

      {/* <SectionListExample /> */}

      {/* <SectionListExampleConverted /> */}
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
