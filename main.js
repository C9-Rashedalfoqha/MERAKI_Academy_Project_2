const addToCart = [] || JSON.parse(localStorage.getItem("cart"));
const FavList = [] || JSON.parse(localStorage.getItem("fav"));
const getByContainer = $(".container");
let ahmad = [];
let users = JSON.parse(localStorage.getItem("users")) || [];

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
        <input id="search" type="text" placeholder="Search..."  />
        <li id="home"><a href="#">Home</a></li>
        <li id="about"><a href="#">About</a></li>
        <li id="fav"><a href="#">favList</a></li>
        <li><a href="#"><i style="font-size:24px" class="fa">&#xf07a;</i></a></li>
        
        <li id="login"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
      login</svg></a></li>
        <div class="them"><button class="dark" id="white"></button></div>


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
  const favList = $(`<div id="fav-list"></div>`);

  data.forEach((elem, index) => {
    const createProductDiv = $(`<div class="product-item"></div>`);
    const createImgTag = $(
      `<img class="product-image" src="${elem.image}" alt="product">`
    );
    const fav = $(`
    <i class="material-icons" style="font-size:25px;color:${
      elem.fav ? "red" : "black"
    }">favorite</i>
  `);

    fav.click(() => {
      elem.fav = !elem.fav;

      fav.css("color", elem.fav ? "red" : "white");
      if (elem.fav === true) {
        localStorage.setItem("fav", JSON.stringify(favList));
        const FavList = $(`<div class="fav-elem" date="index">
      <img  class="product-image" src="${elem.image}" alt="">
      <p class="product-title">${elem.title}</p>
      <p> ${elem.description}</p>
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
      container.hide();
      $("#cart-container").hide();

      getByBody.append(favList);
      favList.append(FavList);
    });
    const buttonAdd = $(`
    <button class="add-to-cart" data-index="${index}">Add to Cart</button>
  `);

    buttonAdd.click(() => {
      addToList(index);
    });
    const title = $(
      `<p class="product-title"><a class="title" href="#">${elem.title}</a></p>`
    );

    const price = $(`<p class="product-price">$${elem.price}</p>`);

    createProductDiv.append(createImgTag, title, fav, price, buttonAdd);
    container.append(createParentDiv);
    createParentDiv.append(createProductDiv);

    title.click(() => {
      createParentDiv.hide();
      const divProduct = $(`<div id="product"></div>`);
      const createImg = $(`
      
      <img class="product-image-about" src="${elem.image}" alt="">
      
      <br/>
      <p class="product-title-about">${elem.title}
        
      </p>
      <br/>
      <p class="product-paragraph-about">${elem.description}</p>
      <p class="product-paragraph-about">$${elem.price}</p>
    `);
      const buttonAddInfo = $(
        `<button class="add-to-cart"  id="add-to-cart-about" data-index="${index}">Add to Cart</button>
        `
      );
      container.append(divProduct);
      divProduct.append(createImg);
      divProduct.append(buttonAddInfo);
      divProduct.append(createParentDiv);

      buttonAddInfo.click(() => {
        addToList(index);
      });
    });
  });
};
const addToList = (index) => {
  getByBody.append(cartContainer);

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


  An e-commerce site is a digital marketplace where businesses showcase and sell their products or services online. With a user-friendly interface, customers can easily navigate through product listings, each featuring detailed information, high-quality images, and customer reviews. The shopping cart allows users to select and review items before proceeding to a secure checkout process, where various payment options are available. Mobile responsiveness ensures a seamless experience across devices, while customer accounts offer personalized features and order tracking. The site prioritizes security measures such as encryption to protect sensitive data. Customer support, shipping details, and transparent return and refund policies contribute to a comprehensive and trustworthy online shopping experience.
  </p>
`);
About.click(() => {
  createParentDiv.hide();
  divAbout.append(about);
  container.append(divAbout);
});

const cartContainer = $(`<div id="cart-container"></div>`);
const cart = $(".fa");
cart.click(() => {
  getByBody.append(cartContainer);
  $("#fav").hide();
  container.hide();
  cartContainer.empty();
  if (addToCart.length === 0) {
    cartContainer.append(`<p class="empty">Your cart is empty</p>`);
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
  $(`<div class="login"><h1>Login</h1><input type="text" class="user" id="user" placeholder="UserName"><label>Username</label>
<input type="password" class="pass" id="pass" placeholder="password"><label>Password</label></br><button class='Submit'>submit</button></div>`);
const REG = $(`<h2 class="reg"><a href="#" class="reg">Registration</a></h2>`);
loginDiv.append(REG);
$("#login").click(() => {
  $("#About").hide();
  createParentDiv.hide();
  container.append(loginDiv);
});
let isDarkTheme = false;

const darkThem = $(".dark");

darkThem.click(() => {
  isDarkTheme = !isDarkTheme;
  if (isDarkTheme) {
    darkThem.css("transform", "translate(40px)");
    $("#parent-div,#About, .product-item").css({
      "background-color": "#9B9B9B",
      border: "1px solid white",
    });
    $("p, .title, .material-icons").css("color", "black");
  } else {
    darkThem.css("transform", "translate(0)");
    $("#parent-div ,#About ,.product-item").css({
      "background-color": "white",
      border: "1px solid black",
    });
    $("p, .title, .material-icons").css("color", "black");
  }
});
const regDiv =
  $(`<div class="login"><h1>Register</h1><input type="email" class="user" placeholder="email"><input type="text" class="user" placeholder="UserName">
<input type="password" class="pass" placeholder="password"><input type="password" class="pass" id="passs" placeholder="confirm Password"></br><button class='submit'>submit</button></div>`);
REG.click(() => {
  loginDiv.hide();
  container.append(regDiv);

  $(".submit").click(() => {
    const email = $(".user:eq(0)").val();
    const username = $(".user:eq(1)").val();
    const password = $(".pass:eq(0)").val();
    const confirmPassword = $("#passs:eq(1)").val();

    if (!email || !username || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    } else {
      const newUser = {
        email: email,
        username: username,
        password: password,
      };

      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));

      alert("Registration successful. Please log in.");
      regDiv.hide();
      loginDiv.show();
    }
  });
});
