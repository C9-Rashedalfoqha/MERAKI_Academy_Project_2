const product = [
  {
    id: 1,
    title: "about product",
    imageSrc:
      "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 2,
    title: "about product",
    imageSrc:
      "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 3,
    title: "about product",
    imageSrc:
      "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 4,
    title: "about product",
    imageSrc:
      "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 5,
    title: "about product",
    imageSrc:
      "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 6,
    title: "about product",
    imageSrc:
      "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 7,
    title: "about product",
    imageSrc:
      "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 8,
    title: "about product",
    imageSrc:
      "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 9,
    title: "about product",
    imageSrc:
      "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
  {
    id: 10,
    title: "about product",
    imageSrc:
      "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "some description about product",
    rate: 10,
    price: 25,
  },
];
const getByBody = $("body");
const navPar = $(`<div id="nav-par"><nav id="nav">

<h1 id="logo">LOGO</h1 ><ul id="par">
<input id="search" type="text"/>
<li><a href="#">HOME</a>
</li><li><a href="#">HOME</a>
</li><li><a href="#">HOME</a>
</li><li><a href="#">HOME</a>
</li><li><a href="#">HOME</a>
</li></ul></nav></div>`);
getByBody.append(navPar);

product.forEach((elem) => {
  const createProductDiv = $(`<div id="div-img"></div>`);
  getByBody.append(createProductDiv);
  const createImgTag = $(
    `<img src="${elem.imageSrc}" alt=""><br/><p>${elem.description}</p>`);
    createProductDiv.append(createImgTag);

});
