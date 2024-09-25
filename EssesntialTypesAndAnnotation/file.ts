import { mytypes } from "./shared-types";
console.log("Script running...");

const myMultiply: (value1: number, value2: number) => number = (value1, value2) => {
  return value1 * value2;
};

console.log(myMultiply(10, 20));

let userData: { name: string, Age: number } = {
    name: "solomon",
    Age:50
}

console.log(userData);

let myRealAge: string | number = 20;
let myRealAge2: string | number = "20";

console.log(typeof myRealAge);
console.log(typeof myRealAge2);

const Scientist: { name1: string, Age: number } = {
    name1: "solomon",
    Age: 50
}

const { name1, Age } = Scientist;
console.log("name1 is",name1);
console.log("The Age is",Age);


const Talk2Animalsz = (Animal: { name: string; age?: number; animalType: string }) => {
  return `The Animal is ${Animal.name} and Age is ${Animal.age} and is of type ${Animal.animalType}`;
};

const Animal1 = {
  name: "Cow",
  age: 100,
  animalType :"Mammal",
}


console.log(Talk2Animalsz(Animal1));


const usersDetails = (User: { name: string; faculty: string; regNo: number; age: number; }) => { 
  return `The Students Details:
  name: ${User.name},
  faculty: ${User.faculty},
  regNo: ${User.regNo},
  age: ${User.age}`
}

const OnyangosDetails = {
  name: "Onyanggo",
  faculty: "IT",
  regNo: 22222,
  age: 78
  
}
  
console.log(usersDetails(OnyangosDetails));


type Mnyama = {
  name: string;
  animalType: string;
  age: number;
};

const Ngombe: Mnyama = {
  name: "Gao",
  animalType: "mammal",
  age: 50
};

console.log(Talk2Animalsz(Ngombe));


const Talk2Animalsz2 = (Animal: Mnyama) => {
  return `The Animal is ${Animal.name} and Age is ${Animal.age} and is of type ${Animal.animalType}`;
};

console.log(Talk2Animalsz(Ngombe));


console.log("please Print something here");

const rectangle = {
    width: 800,
    height: 600,
}


// using imported types
const TryingMyTypes = (rec:mytypes) => {
    return rec.height*rec.width
}
console.log(TryingMyTypes(rectangle))

// Arrays
console.log("--------------------Arrays----------------------------");


let mylist: string[] = [
  "Nagato",
  "Minato",
  "Kushna",
  "NAruto",
  "sasuke"
]

let mylist2: Array<string> = [
  "Nagato",
  "Minato",
  "Kushna",
  "NAruto",
  "sasuke"
]
console.log();

console.log(mylist);
console.log(mylist2);


type Album = {
  title: string;
  author: string;
  year: number;
  
};

let selectedDiscography: Album[] = [
  {title:"Naruto",author:"susuke",year:2006},
  {title:"Demon-Slayer",author:"Tanjiro",year:2024},
  {title:"JJK",author:"Sukuna",year:2024},
  {title:"Kaiju_No_9",author:"kaiju",year:2025},
];

console.log(selectedDiscography);

selectedDiscography.forEach(element => {
  console.log(element.author); 
});

console.log();

let album: [string, number,string] = ["solomon", 100, "sthance"]
console.log(album);


let album2: [string, number, ...string[]] = ["solomon", 100, "sthance","cjhjc","Boruto","shikdae","sarada"]
console.log(album2);

console.log();

let AlbumWithArtist: [Album, number] = [
  {
    title: "Tokyo revengers",
    author: "mickey",
    year: 2014
  },
  10000000
]

console.log(AlbumWithArtist);

const formats = new Set<string>();
// formats.add(8)
console.log(formats);


function getAlbumFormats(album: Album, ...formats: string[]) {
  return `${album.title} is available in the following formats: ${formats.join(",")}
  )}`;
  }

  let miraformatAlbum = getAlbumFormats(
    { author: "Radiohead", title: "OK Computer", year: 1997 },
    "CD",
    "LP",
    "Cassette",
  );
    
console.log(miraformatAlbum);
  
// map over Items

const mapOverItems = (items: string[], map: (item: string) => number) => {
  return  items.map(map);
}

const ArrayOfItems = mapOverItems(["2", "3", "4", "5", "6", "7", "8", "9"],(item) =>{
  return parseInt(item)
});
 
console.log(ArrayOfItems);

console.log();

const  ojTypea = {
  small: "small",
  large: "large",
}


const logSize = (size: "small" | "large") => {
  console.log(ojTypea[size]);
}

logSize("small");

function logId(id: string | number) {
  console.log(id);
  
}
logId(1234);
logId("1234");



  




