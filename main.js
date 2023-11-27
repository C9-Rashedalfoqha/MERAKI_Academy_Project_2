const addToCart = [] || JSON.parse(localStorage.getItem("cart"));
const FavList = [] || JSON.parse(localStorage.getItem("fav"));
const getByContainer = $(".container");
let ahmad = [];
$.ajax({
  url: "https://fakestoreapi.com/products",
  success: (data) => {
    console.log(data);
    ajaxProduct(data);
  },
  error: (err) => {
    error("error in the website");
  },
});
// const product = [
//   {
//     id: 1,
//     title: "about product",
//     image:
//       "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "some description about product",
//     rate: 10,
//     fav: false,
//     price: 25,
//   },
//   {
//     id: 2,
//     title: "about product",
//     image:
//       "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "some description about product",
//     rate: 10,
//     fav: false,
//     price: 25,
//   },
//   {
//     id: 3,
//     title: "about product",
//     image:
//       "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "some description about product",
//     rate: 10,
//     price: 25,
//     fav: false,
//   },
//   {
//     id: 4,
//     title: "about product",
//     image:
//       "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description:
//       "some description about productsome description about productsome description about productsome description about productsome description about productsome description about product",
//     rate: 10,
//     price: 25,
//     fav: false,
//   },
//   {
//     id: 5,
//     title: "about product",
//     image:
//       "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "some description about product",
//     rate: 10,
//     price: 25,
//     fav: false,
//   },
//   {
//     id: 6,
//     title: "about product",
//     image:
//       "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "some description about product",
//     rate: 10,
//     price: 25,
//     fav: false,
//   },
//   {
//     id: 14,
//     title: "about product",
//     image:
//       "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "some description about product",
//     rate: 10,
//     price: 25,
//     fav: false,
//   },
//   {
//     id: 8,
//     title: "about product",
//     image:
//       "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "some description about product",
//     rate: 10,
//     price: 25,
//     fav: false,
//   },
//   {
//     id: 9,
//     title: "about product",
//     image:
//       "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "some description about product",
//     rate: 10,
//     price: 25,
//     fav: false,
//   },
//   {
//     id: 10,
//     title: "about product",
//     image:
//       "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "some description about product",
//     rate: 10,
//     price: 25,
//     fav: false,
//   },
//   {
//     id: 11,
//     title: "about product",
//     image:
//       "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "some description about product",
//     rate: 10,
//     price: 25,
//     fav: false,
//   },
//   {
//     id: 11,
//     title: "about product",
//     image:
//       "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "some description about product",
//     rate: 10,
//     price: 25,
//     fav: false,
//   },
//   {
//     id: 11,
//     title: "about product",
//     image:
//       "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "some description about product",
//     rate: 10,
//     price: 25,
//     fav: false,
//   },
//   {
//     id: 11,
//     title: "about product",
//     image:
//       "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "some description about product",
//     rate: 10,
//     price: 25,
//     fav: false,
//   },
//   {
//     id: 11,
//     title: "rashed",
//     image:
//       "https://images.pexels.com/photos/19026031/pexels-photo-19026031/free-photo-of-marina-at-the-asy-plato-in-kazakhstan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     description: "some description about product",
//     rate: 10,
//     price: 25,
//     fav: false,
//   },
// ];

const getByBody = $("body");
const navPar = $(`
  <div id="nav-par">
    <nav id="nav">
      <h1 id="logo">LOGO</h1>
      <ul id="par">
        <input id="search" type="text" placeholder="search..." />
        <li id="home"><a href="#">Home</a></li>
        <li id="about"><a href="#">About</a></li>
        <li id="fav"><a href="#">favList</a></li>
        <li><a href="#"><i style="font-size:24px" class="fa">&#xf07a;</i></a></li>
        <div class="them"><button class="dark"></button></div>
        <li id="login"><a href="#">login</a></li>


      </ul>
    </nav>
  </div>
`);
getByBody.append(navPar);

const container = $(`<div id="container"></div>`);
getByBody.append(container);

const createParentDiv = $(`<div id="parent-div"></div>`);
const ajaxProduct = (data) => {
  ahmad = data;
  data.forEach((elem, index) => {
    const createProductDiv = $(`<div class="product-item"></div>`);
    const createImgTag = $(
      `<img class="product-image" src="${elem.image}" alt="product">`
    );
    const fav = $(`
    <i class="material-icons" style="font-size:25px;color:${
      elem.fav ? "red" : "white"
    }">favorite</i>
  `);
    const favList = $(`<div id="fav-list"></div>`);

    fav.click(() => {
      elem.fav = !elem.fav;

      fav.css("color", elem.fav ? "red" : "white");
      if (elem.fav === true) {
        localStorage.setItem("fav", JSON.stringify(favList));
        const FavList = $(`<div class="fav-elem" date="index">
      <img  class="product-image" src="${elem.image}" alt="">
      <p class="product-title">${elem.title}</p>
      <p>$${elem.price}</p>
    </div>`);
        favList.append(FavList);
      } else if (elem.fav === false) {
        favList.click(() => {
          FavList.splice(index, 1);
          localStorage.setItem("fav", JSON.stringify(favList));
          FavList.remove();
        });
      }
      {
      }
    });
    $("#fav").click(() => {
      container.remove();
      getByBody.append(favList);
      favList.append(FavList)
    });
    const buttonAdd = $(`
    <button class="add-to-cart" data-index="${index}">Add to Cart</button>
  `);

    buttonAdd.click(() => {
      addToList(index);
    });
    const title = $(
      `<p class="product-title"><a href="#">${elem.title}</a></p>`
    );
    const paragraph = $(
      `<p class="product-description">${elem.description}</p>`
    );
    const price = $(`<p class="product-price">$${elem.price}</p>`);
    // const rate = $(`
    //   <span class="fa fa-star checked"></span>
    //   <span class="fa fa-star checked"></span>
    //   <span class="fa fa-star checked"></span>
    //   <span class="fa fa-star"></span>
    //   <span class="fa fa-star"></span>
    // `);

    createProductDiv.append(
      createImgTag,
      fav,
      title,
      paragraph,
      price,
      buttonAdd
    );
  
    container.append(createParentDiv);
    createParentDiv.append(createProductDiv);

    title.click(() => {
      createParentDiv.remove();
      const divProduct = $(`<div id="product"></div>`);
      const createImg = $(`
      <p class="product-title">${elem.title}
        
      </p>
      <br/>
      <img class="product-image" src="${elem.image}" alt="">
      <br/>
      <p class="product-paragraph">${elem.description}</p>
      <p>${elem.id}</p>
    `);
    const buttonAddInfo=$(`<button class="add-to-cart" data-index="${index}">Add to Cart</button>`)
      container.append(divProduct);
      divProduct.append(createImg);
      divProduct.append(buttonAddInfo)
      buttonAddInfo.click(()=>{
    addToList(index)
      })
    });
    
  });

};
const addToList = (index) => {
  addToCart.push(ahmad[index]);
  console.log("Product added to cart:", ahmad[index]);
  console.log("Cart contents:", addToCart);
  localStorage.setItem("cart", JSON.stringify(addToCart));
};

const homeList = $("#home");
homeList.click(() => {
  location.reload();
});

const About = $("#about");
const divAbout = $(`<div id="About"></div>`);
const about = $(`
  <h1 id="ti">About</h1>
  <br/>
  <p id="p-ti">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aut atque dignissimos itaque
    provident unde dolor modi laudantium impedit odit, cupiditate a, omnis magnam delectus tempore
    quo asperiores! Laudantium, saepeLorem ipsum dolor sit amet consectetur adipisicing elit.
    Magni aut atque dignissimos itaque provident unde dolor modi laudantium impedit odit, cupiditate
    a, omnis magnam delectus tempore quo asperiores! Laudantium, saepeLorem ipsum dolor sit amet
    consectetur adipisicing elit. Magni aut atque dignissimos itaque provident unde dolor modi
    laudantium impedit odit, cupiditate a, omnis magnam delectus tempore quo asperiores! Laudantium,
    saepeLorem ipsum dolor sit amet consectetur adipisicing elit. Magni aut atque dignissimos itaque
    provident unde dolor modi laudantium impedit odit, cupiditate a, omnis magnam delectus tempore
    quo asperiores! Laudantium, saepeLorem ipsum dolor sit amet consectetur adipisicing elit. Magni
    aut atque dignissimos itaque provident unde dolor modi laudantium impedit odit, cupiditate a,
    omnis magnam delectus tempore quo asperiores! Laudantium, saepeLorem ipsum dolor sit amet
    consectetur adipisicing elit. Magni aut atque dignissimos itaque provident unde dolor modi
    laudantium impedit odit, cupiditate a, omnis magnam delectus tempore quo asperiores! Laudantium,
    saepe
  </p>
`);

About.click(() => {

  createParentDiv.hide();
  divAbout.append(about);
  container.append(divAbout);
});



const cart = $(".fa");
cart.click(() => {
  const cartContainer = $(`<div id="cart-container"></div>`);
getByBody.append(cartContainer);
  container.remove();
  cartContainer.empty();
  if (addToCart.length === 0) {
    cartContainer.append(`<p>Your cart is empty</p>`);
  } else {
    addToCart.forEach((elem, index) => {
      const cartElem = $(`
        <div class="product-image" data-index="${index}">
          <img src="${elem.image}"  class="product-image" alt="">
          <p class="product-title">${elem.title}</p>
          <p class="product-price">$${elem.price}</p>
          <button class="btn-del">delete</button>
        </div>
      `);
      cartElem.find(".btn-del").click(() => {
        addToCart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(addToCart));
        cartElem.remove();
      });

      cartContainer.append(cartElem);
    });
  }
});

$(document).ready(function () {
  $("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".product-item").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
const error = (err) => {
  const con = $("#container");
  con.text(err);
  getByBody.append(con);
};
const loginDiv =
  $(`<div class="login"><h1>Login</h1><input type="text" class="user" placeholder="UserName">
<input type="password" class="pass" placeholder="password"></br><button class='submit'>submit</button><h2><a href="#" class="reg">Registration</a></h2></div>`);
$("#login").click(() => {
  $("#About").hide()
  createParentDiv.hide();
  container.append(loginDiv);
});
const regDiv =
  $(`<div class="registration"><h1>Login</h1><input type="email" class="pass" placeholder="password"><input type="text" class="user" placeholder="UserName">
<input type="password" class="pass" placeholder="password"><input type="password" class="pass" placeholder="con password"></br><button class='submit'>submit</button>`);
const select = $(".reg");
select.click(() => {});
const darkThem = $(".dark");
darkThem.click(() => {
  $("#parent-div").css("background", "black");
  $("p").css("color", "white");
  darkThem.click(() => {
    $("#parent-div").css("background", "white");
    $("p").css("color", "black");
  });
});
$(".submit").click(() => {});
// const divFilter=$(`<div><h1>filter</h1></div>`)
// container.append(divFilter)