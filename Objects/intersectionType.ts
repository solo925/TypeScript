type BaseEntity = {
    id: string;
    createdAt: Date;
    
}

type User = {
    name: string;
    email: string;
} & BaseEntity;
  
  type Product = {
    name: string;
    price: number;
  } & BaseEntity;
  

//   testing
const user1: User = {
    id: "1234",
    createdAt: new Date(),
    name: "solomon",
    email: "solo@gmail.com",
}

console.log(user1);

