interface BaseEntity2{
    id: string;
    createdAt: Date;
    
}

interface User2 extends BaseEntity2{
    name: string;
    email: string;
} 
  
  interface Product1 extends BaseEntity2 {
    name: string;
    price: number;
  };
  

//   testing
const user3: User2 = {
    id: "1234",
    createdAt: new Date(),
    name: "solomon",
    email: "solo@gmail.com",
}

console.log(user1);

