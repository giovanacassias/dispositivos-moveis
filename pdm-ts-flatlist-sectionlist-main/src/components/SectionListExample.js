"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const MOCK_DATA_SECTION_json_1 = __importDefault(require("../services/MOCK_DATA_SECTION.json"));
function SectionListExample() {
    return (<react_native_1.View>
      <react_native_1.SectionList sections={MOCK_DATA_SECTION_json_1.default} renderItem={({ item }) => (<react_native_1.View>
            <react_native_1.Text>{item.id}</react_native_1.Text>
            <react_native_1.Text>{item.name}</react_native_1.Text>
          </react_native_1.View>)} renderSectionHeader={({ section }) => (<react_native_1.Text style={styles.sectionTitle}>{section.title}</react_native_1.Text>)}/>
    </react_native_1.View>);
}
exports.default = SectionListExample;
const styles = react_native_1.StyleSheet.create({
    sectionTitle: {
        marginTop: 16,
        fontWeight: "bold",
    },
});
