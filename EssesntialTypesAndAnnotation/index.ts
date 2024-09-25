import { mytypes } from "./shared-types";

console.log("please Print something here");

const rectangle = {
    width: 800,
    height: 600,
}


const TryingMyTypes = (rec:mytypes) => {
    return `width: ${rec.width}
    height: ${rec.height}`
}
console.log("trying my types...");

console.log(TryingMyTypes(rectangle));
