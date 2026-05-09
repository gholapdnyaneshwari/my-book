import Img1 from "./assets/ice-cream-1.png";
import Img2 from "./assets/ice-cream-2.png";
import Img3 from "./assets/ice-cream-3.png";
import Img4 from "./assets/ice-cream-4.png";
import Img5 from "./assets/ice-cream-5.png";
import {UtensilsCrossed,Cuboid,Truck,ChefHat } from "lucide-react";
const PRODUCTS = [
  {
    id: 1,
    title: "icecream Sandwich",
    price: 40,
    description: "A delightful frozen treat that melts in your mouth, ice cream is a perfect blend of rich cream, sweetness, and flavor. Every scoop brings a refreshing burst of joy, making it a favorite dessert for all ages.",
    image: Img1,
  },
  {
    id: 2,
    title: "Vanilla Icecream",
    price: 45,
    description: "Cold, creamy, and irresistibly delicious — happiness served in a scoop!",
    image: Img2,
  },
  {
    id: 3,
    title: "Strawberry Icecream",
    price: 50,
    description: "A smooth and creamy frozen dessert crafted with fresh dairy ingredients and infused with rich flavors. Served chilled to give you the ultimate refreshing experience.",
    image: Img3,
  },
  {
    id: 4,
    title: "Cooloo Cream",
    price: 90,
    description: "Ice cream is a sweet, frozen dessert made from milk, cream, sugar, and flavorings. It is soft, creamy, and enjoyed in many flavors like chocolate, vanilla, and strawberry.",
    image: Img4,
  },
  {
    id: 5,
    title: "Sweet Scoop",
    price: 45,
    description: "Indulge in a luxurious scoop of velvety ice cream, made with the finest ingredients and crafted to perfection. Its rich texture and exquisite flavor create a truly unforgettable dessert experience.",
    image: Img5,
  },
];
const OUR_SERVICES =[
  {
    id: 1,
    title: "Dine-in",
    description:"A delightful frozen treat that melts in your mouth, ice cream is a perfect blend of rich cream, sweetness, and flavor. Every scoop brings a refreshing burst of joy, making it a favorite dessert for all ages.",
    icon: <UtensilsCrossed height={"70px"}  width={"70px"}/>
  
  },
   {
    id: 2,
    title: "Takeaway",
    description:"A delightful frozen treat that melts in your mouth, ice cream is a perfect blend of rich cream, sweetness, and flavor. Every scoop brings a refreshing burst of joy, making it a favorite dessert for all ages.",
    icon: <Cuboid height={"70px"}  width={"70px"}/>
  
  },
   {
    id: 3,
    title: "Delivery",
    description:"A delightful frozen treat that melts in your mouth, ice cream is a perfect blend of rich cream, sweetness, and flavor. Every scoop brings a refreshing burst of joy, making it a favorite dessert for all ages.",
    icon: <Truck  height={"70px"}  width={"70px"}/>
  
  },
   {
    id: 4,
    title: "Catering",
    description:"A delightful frozen treat that melts in your mouth, ice cream is a perfect blend of rich cream, sweetness, and flavor. Every scoop brings a refreshing burst of joy, making it a favorite dessert for all ages.",
    icon: <ChefHat height={"70px"}  width={"70px"}/>
  
  }
];
export {PRODUCTS,  OUR_SERVICES};
