const addToCart = JSON.parse(localStorage.getItem("cart")) || [];
const product = [
  {
    id: 1,
    title: "about product",
    imageSrc:
      "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "some description about product",
    rate: 10,
    fav: true,
    price: 25,
  },
  {
    id: 2,
    title: "about product",
    imageSrc:
      "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "some description about product",
    rate: 10,
    fav: true,
    price: 25,
  },
  {
    id: 3,
    title: "about product",
    imageSrc:
      "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "some description about product",
    rate: 10,
    price: 25,
    fav: true,
  },
  {
    id: 4,
    title: "about product",
    imageSrc:
      "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "some description about productsome description about productsome description about productsome description about productsome description about productsome description about product",
    rate: 10,
    price: 25,
    fav: true,
  },
  {
    id: 5,
    title: "about product",
    imageSrc:
      "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "some description about product",
    rate: 10,
    price: 25,
    fav: true,
  },
  {
    id: 6,
    title: "about product",
    imageSrc:
      "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "some description about product",
    rate: 10,
    price: 25,
    fav: true,
  },
  {
    id: 7,
    title: "about product",
    imageSrc:
      "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "some description about product",
    rate: 10,
    price: 25,
    fav: true,
  },
  {
    id: 8,
    title: "about product",
    imageSrc:
      "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "some description about product",
    rate: 10,
    price: 25,
    fav: true,
  },
  {
    id: 9,
    title: "about product",
    imageSrc:
      "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "some description about product",
    rate: 10,
    price: 25,
    fav: true,
  },
  {
    id: 10,
    title: "about product",
    imageSrc:
      "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "some description about product",
    rate: 10,
    price: 25,
    fav: true,
  },
  {
    id: 11,
    title: "about product",
    imageSrc:
      "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "some description about product",
    rate: 10,
    price: 25,
    fav: true,
  },
  {
    id: 11,
    title: "about product",
    imageSrc:
      "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "some description about product",
    rate: 10,
    price: 25,
    fav: true,
  },
  {
    id: 11,
    title: "about product",
    imageSrc:
      "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "some description about product",
    rate: 10,
    price: 25,
    fav: true,
  },
  {
    id: 11,
    title: "about product",
    imageSrc:
      "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "some description about product",
    rate: 10,
    price: 25,
    fav: true,
  },
  {
    id: 11,
    title: "about product",
    imageSrc:
      "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "some description about product",
    rate: 10,
    price: 25,
    fav: true,
  },
];
const getByBody = $("body");
const navPar = $(`<div id="nav-par"><nav id="nav">
<h1 id="logo">LOGO</h1 ><ul id="par">
<input id="search" type="text" />
<li id="home"><a href="#">Home</a>
</li><li id="Product"><a href="#">Product</a>
</li><li id="about"><a href="#">About</a>
</li><li><a href="#"><i style="font-size:24px" class="fa">&#xf07a;</i>
</a>
</li></ul></nav></div>`);
getByBody.append(navPar);
const container = $(`<div id="container"></div>`);
getByBody.append(container);
const createParentDiv = $(`<div id="parent-div"></div>`);
product.forEach((elem, index) => {
  const createProductDiv = $(`<div id="div-img"></div>`);
  const createImgTag = $(`<img id="img"src="${elem.imageSrc}" alt="">`);
  const fav = $(
    `<i class="material-icons" style="font-size:25px;color:${
      false ? "red" : "white"
    }">favorite</i>`
  );
  fav.click(() => {
    elem.fav = !elem.fav;
    fav.css("color", elem.fav ? "red" : "white");
  });
  const buttonAdd = $(
    `<button id="add-to-cart" data-index="${index}">Add to Cart</button>`
  );

  buttonAdd.click(() => {
    addToList(index);
  });
  const tittle = $(`<p id="title"><a href="#">${elem.title}</a></p>`);
  const paragraph = $(`<p id="anotherPage">${elem.description}</p>`);
  const price = $(`<p id="price">$${elem.price}</p>`);
  const rate = $(`
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span></br>`);
  createProductDiv.append(
    createImgTag,
    fav,
    tittle,
    paragraph,
    price,
    buttonAdd,
    rate
  );
  container.append(createParentDiv);
  createParentDiv.append(createProductDiv);
  tittle.click(() => {
    createParentDiv.remove();
    const divProduct = $(`<div id="product"></div>`);
    const createImg = $(
      `<p id="titleOnly">${elem.title}<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span></p></br><img id="imgOnly" src="${elem.imageSrc}" alt="" ><br/><p id="paragraph">${elem.description}</p><p>${elem.id}</p></br><button id="add-cart">addToCart</button>`
    );
    container.append(divProduct);
    divProduct.append(createImg);
  });
});
const addToList = (index) => {
  
  addToCart.push(product[index]);
  console.log("Product added to cart:", product[index]);
  console.log("Cart contents:", addToCart);
  localStorage.setItem("cart", JSON.stringify(addToCart));
};
addToList();
console.log(addToCart);
const homeList = $("#home");
homeList.click(() => {
  location.reload();
});
// const aboutList=$("#product")

const About = $("#about");
const divAbout = $(`<div id="about" ></div>`);
const about = $(
  `<h1 id="ti">About</h1></br><p id="p-ti">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aut atque dignissimos itaque provident unde dolor modi laudantium impedit odit, cupiditate a, omnis magnam delectus tempore quo asperiores! Laudantium, saepeLorem ipsum dolor sit amet consectetur adipisicing elit. Magni aut atque dignissimos itaque provident unde dolor modi laudantium impedit odit, cupiditate a, omnis magnam delectus tempore quo asperiores! Laudantium, saepeLorem ipsum dolor sit amet consectetur adipisicing elit. Magni aut atque dignissimos itaque provident unde dolor modi laudantium impedit odit, cupiditate a, omnis magnam delectus tempore quo asperiores! Laudantium, saepeLorem ipsum dolor sit amet consectetur adipisicing elit. Magni aut atque dignissimos itaque provident unde dolor modi laudantium impedit odit, cupiditate a, omnis magnam delectus tempore quo asperiores! Laudantium, saepeLorem ipsum dolor sit amet consectetur adipisicing elit. Magni aut atque dignissimos itaque provident unde dolor modi laudantium impedit odit, cupiditate a, omnis magnam delectus tempore quo asperiores! Laudantium, saepeLorem ipsum dolor sit amet consectetur adipisicing elit. Magni aut atque dignissimos itaque provident unde dolor modi laudantium impedit odit, cupiditate a, omnis magnam delectus tempore quo asperiores! Laudantium, saepe.</p>`
);
About.click(() => {
  container.remove();
  getByBody.append(divAbout);
  divAbout.append(about);
});

// search input
// <i style="font-size:24px" class="fa">&#xf002;</i>
const cartContainer = $(`<div id="cart-container"></div>`);
getByBody.append(cartContainer);
const cart = $(".fa");
const AddToCard = $(``);
cart.click(() => {
  container.remove();
  cartContainer.empty();
  if (addToCart.length === 0) {
    cartContainer.append(`<p>Your cart is empty</p>`);
  } else {
    addToCart.forEach((elem) => {
      const cartElem = $(`
        <div class="cart-elem">
          <img src="${elem.imageSrc}" alt="">
          <p>${elem.title}</p>
          <p>$${elem.price}</p>
        </div>
      `);
      cartContainer.append(cartElem);
    });
  }
});
