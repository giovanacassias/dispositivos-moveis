"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = __importDefault(require("react"));
const MOCK_DATA_json_1 = __importDefault(require("../services/MOCK_DATA.json"));
function FlatListExample() {
    return (<react_native_1.View>
      {/* Forma manual de desenhar a coleção */}
      {/* {data.map((d) => (
          <Text key={d.id}>{d.id}</Text>
        ))} */}

      {/* Forma automática com FlatList */}
      <react_native_1.FlatList data={MOCK_DATA_json_1.default} renderItem={({ item }) => (<react_native_1.View style={styles.itemContainer}>
            <react_native_1.Text>{item.id}</react_native_1.Text>
            <react_native_1.Text>{item.currency}</react_native_1.Text>
            <react_native_1.Text>{item.card}</react_native_1.Text>
          </react_native_1.View>)}/>
    </react_native_1.View>);
}
exports.default = FlatListExample;
const styles = react_native_1.StyleSheet.create({
    itemContainer: {
        marginTop: 16,
    },
});
