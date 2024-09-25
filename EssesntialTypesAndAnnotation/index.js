"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("please Print something here");
const rectangle = {
    width: 800,
    height: 600,
};
const TryingMyTypes = (rec) => {
    return `width: ${rec.width}
    height: ${rec.height}`;
};
console.log("trying my types...");
console.log(TryingMyTypes(rectangle));
