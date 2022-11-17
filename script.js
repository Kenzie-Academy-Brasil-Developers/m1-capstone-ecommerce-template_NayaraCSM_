// Banco de dados dos produtos

let games = [
  {
    id: 1,
    img: "./img/AventuraAcao/GTAV.webp",
    name: "GTAV",
    description:
      "Grand Theft Auto V oferece aos jogadores a opção de explorar o gigantesco e premiado mundo de Los Santos e Blaine County.",
    price: 70,
    addCart: "Adicionar ao carrinho",
    tag: ["Ação/Aventura"],
  },
  {
    id: 2,
    img: "./img/AventuraAcao/TombRaider.png",
    name: "Tomb Raider",
    description:
      "Nova edição da famosa série, com uma história intensa e corajosa sobre as origens de Lara Croft.",
    price: 40,
    addCart: "Adicionar ao carrinho",
    tag: ["Ação/Aventura"],
  },
  {
    id: 3,
    img: "./img/AventuraAcao/RiseTombRaider.png",
    name: "Rise of the Tomb Raider",
    description:
      "Nessa continuação você encontra aventuras novas com a familiar jogabilidade vista na obra anterior.",
    price: 45,
    addCart: "Adicionar ao carrinho",
    tag: ["Ação/Aventura"],
  },
  {
    id: 4,
    img: "./img/AventuraAcao/ShadowTombRaider.jpeg",
    name: "Shadow of the Tomb Raider",
    description:
      "Seguindo o que ocorreu na obra anterior, Shadow of the Tomb Raider conclui a chamada “Trilogia da sobrevivente”.",
    price: 50,
    addCart: "Adicionar ao carrinho",
    tag: ["Ação/Aventura"],
  },
  {
    id: 5,
    img: "../img/Corrida/NFSHeat.jpeg",
    name: "Need for Speed Heat",
    description:
      "A já conhecida franquia, com novos desafios e muita adrenalina, interaja com outros jogadores online e aproveite.",
    price: 250,
    addCart: "Adicionar ao carrinho",
    tag: ["Corrida"],
  },
  {
    id: 6,
    img: "../img/Corrida/NFSPayback.png",
    name: "Need for Speed Payback",
    description:
      "Payback traz muito mais ação em seu gameplay, deixando de lado o estilo simulação apresentado nas edições anteriores do game.",
    price: 182,
    addCart: "Adicionar ao carrinho",
    tag: ["Corrida"],
  },
  {
    id: 7,
    img: "./img/RPGsdeMesa/StrangerandDragons.webp",
    name: "Stranger Things Dungeons & Dragons",
    description:
      "Embarque em uma emocionante aventura de Dungeons & Dragons nessa versão baseado em Stranger Things.",
    price: 290,
    addCart: "Adicionar ao carrinho",
    tag:["RPG de Mesa"],
  },
  {
    id: 8,
    img: "./img/RPGsdeMesa/Paranormal.webp",
    name: "Paranormal Detectives",
    description:
      "Prepare-se para uma investigação paranormal! Descubra o motivo da morte inesplicável com seus amigos.",
    price: 300,
    addCart: "Adicionar ao carrinho",
    tag:["RPG de Mesa"],
  },
  {
    id: 9,
    img: "./img/RPGsdeMesa/SenhordosAneis.webp",
    name: "O Senhor dos Anéis RPG",
    description:
      "Embarque em uma jornada inesquecível pelo incrível mundo de J. R. R. Tolkien com O Senhor dos Anéis: Jornadas na Terra Média.",
    price: 730,
    addCart: "Adicionar ao carrinho",
    tag:["RPG de Mesa"],
  },
];

function createVitrine(list){
  let Vitrine = document.querySelector(".Vitrine");

  let section = document.createElement("section");
  let ul = document.createElement("ul");

  section.classList.add("section");
  ul.classList.add("ul");

  let finishPurchase = document.querySelector(".finishPurchase");

  let contDiv = document.createElement("div");
  let contText = document.createElement("p");
  let contTotal = document.createElement("p");
  let sumDiv = document.createElement("div");
  let sumText = document.createElement("p");
  let sumTotal = document.createElement("p");

  contDiv.classList.add("contDiv")
  contText.classList.add("contText");
  contTotal.classList.add("contTotal");
  sumDiv.classList.add("sumDiv")
  sumText.classList.add("sumText");
  sumTotal.classList.add("sumTotal");

  let cont = 0;
  let sum = 0;

  for(let i = 0; i < list.length; i++){
    let li = document.createElement("li");
    let a = document.createElement("a");
    let img = document.createElement("img");
    let tag = document.createElement("h3");
    let name = document.createElement("h4");
    let description = document.createElement("p");
    let price = document.createElement("span");
    let addCart = document.createElement("button");

    li.classList.add("card");
    img.classList.add("img");
    tag.classList.add("tag");
    name.classList.add("name");
    description.classList.add("description");
    price.classList.add("price");
    addCart.classList.add("addCart");

    img.src = list[i].img;
    tag.innerText = list[i].tag;
    name.innerText = list[i].name;
    description.innerText = list[i].description;
    price.innerText = "R$ " + list[i].price;
    addCart.innerText = list[i].addCart;
    addCart.id = list[i].id;

    ul.append(li);
    li.append(a);
    a.append(img, tag, name, description, price, addCart);

    addCart.addEventListener("click", function(){
      let cartBody = document.querySelector(".cartBody");
  
      let cartProduct = document.createElement("ul");
      let listProduct = document.createElement("li");
      let boxImgProduct = document.createElement("div");
      let imgProduct = document.createElement("img");
      let infoProduct = document.createElement("div");
      let nameProduct = document.createElement("h2");
      let priceProduct = document.createElement("h4");
      let removeCart = document.createElement("button");
      
      cartProduct.classList.add("cartProduct");
      listProduct.classList.add("listProduct");
      boxImgProduct.classList.add("boxImgProduct")
      imgProduct.classList.add("imgProduct");
      infoProduct.classList.add("infoProducts");
      nameProduct.classList.add("nameProduct");
      priceProduct.classList.add("priceProduct");
      removeCart.classList.add("removeCart");
      
      imgProduct.src = list[i].img;
      nameProduct.innerText = list[i].name;
      priceProduct.innerText = "R$ " + list[i].price;
      removeCart.innerText = "Remover produto";
      removeCart.id = list[i].id;
  
      cartBody.append(cartProduct);
      cartProduct.append(listProduct);
      listProduct.append(boxImgProduct, infoProduct);
      boxImgProduct.append(imgProduct);
      infoProduct.append(nameProduct, priceProduct, removeCart);
  
      cont += 1;
      sum += list[i].price;
      
      contText.innerText = "Quatidade: "
      contTotal.innerText = `${cont}`;
      sumText.innerText = "Total: "
      sumTotal.innerText = `R$ ${sum}`;

      finishPurchase.append(contDiv, sumDiv);
      contDiv.append(contText, contTotal);
      sumDiv.append(sumText, sumTotal);
  
      removeCart.addEventListener("click", function(){
        infoProduct.removeChild(nameProduct, priceProduct, removeCart);
        boxImgProduct.removeChild(imgProduct);
        listProduct.removeChild(boxImgProduct, infoProduct);
        cartProduct.removeChild(listProduct);
        cartBody.removeChild(cartProduct);
  
        cont -= 1;
        sum -= list[i].price;
        contText.innerText = "Quatidade: "
        contTotal.innerText =`${cont}`;
        sumText.innerText = "Total: "
        sumTotal.innerText = `R$ ${sum}`;
      })
    })
  }

  Vitrine.append(section);
  section.append(ul);

  return Vitrine;
}

createVitrine(games);
