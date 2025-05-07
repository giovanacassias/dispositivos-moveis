"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convertData = (oldData) => {
    const newData = [];
    const categories = new Set(oldData.map((od) => od.category));
    categories.forEach((c) => {
        newData.push({
            title: c,
            data: oldData.filter((od) => od.category == c),
        });
    });
    return newData;
};
exports.default = convertData;
