"use strict";
/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeColor = void 0;
const Colors_1 = require("@/constants/Colors");
const useColorScheme_1 = require("@/hooks/useColorScheme");
function useThemeColor(props, colorName) {
    var _a;
    const theme = (_a = (0, useColorScheme_1.useColorScheme)()) !== null && _a !== void 0 ? _a : 'light';
    const colorFromProps = props[theme];
    if (colorFromProps) {
        return colorFromProps;
    }
    else {
        return Colors_1.Colors[theme][colorName];
    }
}
exports.useThemeColor = useThemeColor;
