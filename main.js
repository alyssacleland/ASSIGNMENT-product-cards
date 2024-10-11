// array of product objects 
const products = [
  {
    id: "",
    name: "Pink",
    imgURL: "https://i.etsystatic.com/8576402/r/il/44f0db/6061870800/il_1588xN.6061870800_e2dq.jpg",
    description: "make your hair sparkle. become a fairy. all the cool kids are doing it.",
    availability:"Available",
    size: "biggggg",
    weight: "so so light",
    specsDeadline: "who knows",
  }
  ,

  {
    id: "",
    name: "Purple",
    imgURL: "https://pixilated.com/cdn/shop/products/tinsel-photo-booth-backdrop-757342.webp?v=1675806666&width=1445",
    description: "make your hair sparkle. become a fairy. all the cool kids are doing it.",
    availability:"Available",
    size: "gigantic",
    weight: "so so light",
    specsDeadline: "someday",
  }
  ,
  
  {
    id: "",
    name: "Gold",
    imgURL: "https://i.etsystatic.com/10086762/r/il/8fe36d/4591016051/il_1588xN.4591016051_5b4o.jpg",
    description: "make your hair sparkle. become a fairy. all the cool kids are doing it.",
    availability:"Unavailable",
    size: "medium?",
    weight: "so so light",
    specsDeadline: "never",
  }
  ,

  {
    id: "",
    name: "Orange",
    imgURL: "https://i.etsystatic.com/10086762/r/il/24380f/4591017285/il_1588xN.4591017285_ie4p.jpg",
    description: "make your hair sparkle. become a fairy. all the cool kids are doing it.",
    availability:"Available",
    size: "teeny tiny",
    weight: "so so light",
    specsDeadline: "whenever",
  }
  ,
  {
    id: "",
    name: "Silver",
    imgURL: "https://i.etsystatic.com/10086762/r/il/d9f2ef/4543616814/il_1588xN.4543616814_epvb.jpg",
    description: "make your hair sparkle. become a fairy. all the cool kids are doing it.",
    availability:"Available",
    size: "SO BIG",
    weight: "so so light",
    specsDeadline: "whenever",
  }
  ,
  {
    id: "",
    name: "Blue",
    imgURL: "https://i.etsystatic.com/10086762/r/il/c27bb7/4590943355/il_1588xN.4590943355_nadw.jpg",
    description: "make your hair sparkle. become a fairy. all the cool kids are doing it.",
    availability:"Unavailable",
    size: "larger than life",
    weight: "so so light",
    specsDeadline: "whenever",
  }

]

const targetingApp = document.querySelector("#app");
let domString = "";
for (const product of products) {
  const cardHTML = `<div class="card" style="width: 18rem;">
  <header>
    <h2> ${product.name} </h2>
  </header>
  <div class="card-info">
    <img src="${product.imgURL}" class="card-img-top" alt="insert name prop on obj">
    <p class="description">${product.description}</p>
    <p class="availability">${product.availability}</p>
  </div>

  <div class="card-specifications"> Specifications 
    <p style="font-weight: bold; padding-left: 20px;"> Size: ${product.size}</p>
    <p style="font-weight: bold; padding-left: 20px;"> Weight: ${product.weight}</p>
    <p style="font-size: x-small;">**Specifications valid until ${product.specsDeadline}</p>
  </div>

  <div class="card-specifications"> Pricing 
    <p style="font-weight: bold; padding-left: 20px;"> 10 Strands: $23</p>
    <p style="font-weight: bold; padding-left: 20px;"> 15 Strands: $33</p>
    <p style="font-weight: bold; padding-left: 20px;"> 20 Strands: $40</p>
  </div>

  <div class="card-pricing">
    
  </div>
</div>
`;

console.log(cardHTML);
domString += cardHTML;
};
targetingApp.innerHTML = domString;
