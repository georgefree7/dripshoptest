// Получаем id товара из URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product');

let products = {
  techblack: {
    title: "Bluza Nike Tech Fleece – Czarny-szary",
    price: "299 PLN / 75 USD",
    img: "images/techblack.jpg",
    extraImgs: ["images/techblack1.jpg","images/techblack2.jpg"],
    desc: `
• Pozostań w komforcie i stylu dzięki nowoczesnej bluzie z kapturem Nike. 
Model wykonany jest z lekkiego, miękkiego i ciepłego materiału Tech Fleece, który utrzymuje ciepło, nie obciążając. Czarny-szary design sprawia, że bluza jest uniwersalna – łatwo zestawić ją z dżinsami, spodniami sportowymi lub szortami.

• Materiał: innowacyjny Tech Fleece dla ciepła i lekkości.
• Krój: wygodny, z miękką podszewką wewnętrzną.
• Detale: regulowany kaptur, pojemna kieszeń kangurka, elastyczne mankiety i dół bluzy.
• Styl: minimalistyczny czarno-szary kolor z charakterystycznym logo Nike.

Idealny wybór na sport, spacery lub codzienne noszenie.
`
  },
  techwhite: {
    title: "Bluza Nike Tech Fleece – Biały",
    price: "299 PLN / 75 USD",
    img: "images/techwhite.jpg",
    extraImgs: ["images/techwhite1.jpg","images/techwhite2.jpg"],
    desc: `
• Pozostań w komforcie i stylu dzięki nowoczesnej bluzie z kapturem Nike. 
Model wykonany jest z lekkiego, miękkiego i ciepłego materiału Tech Fleece, który utrzymuje ciepło, nie obciążając. Biały design sprawia, że bluza jest uniwersalna – łatwo zestawić ją z dżinsami, spodniami sportowymi lub szortami.

• Materiał: innowacyjny Tech Fleece dla ciepła i lekkości.
• Krój: wygodny, z miękką podszewką wewnętrzną.
• Detale: regulowany kaptur, pojemna kieszeń kangurka, elastyczne mankiety i dół bluzy.
• Styl: minimalistyczny biały kolor z charakterystycznym logo Nike.

Idealny wybór na sport, spacery lub codzienne noszenie.
`
  },
  ston: {
    title: "Stone Island Hoodie – Czarny z dwoma naszywkami",
    price: "499 PLN / 125 USD",
    img: "images/ston.jpg",
    extraImgs: ["images/ston1.jpg"],
    desc: `
• Ta stylowa bluza z kapturem od Stone Island łączy minimalizm z wyrazistymi detalami. 
Model wykonany jest z miękkiej i gęstej bawełny, zapewniając komfort i ciepło w codziennym użytkowaniu. Dwa charakterystyczne naszywki dodają unikalności i podkreślają premium charakter produktu.

• Materiał: wysokiej jakości bawełna dla miękkości i trwałości.
• Krój: wygodny, prosty, z elastycznymi mankietami i dołem bluzy.
• Detale: regulowany kaptur, dwie charakterystyczne naszywki.
• Styl: uniwersalny czarny kolor, łatwo zestawić z dżinsami lub spodniami sportowymi.
`
  },
  guess: {
    title: "Guess Męska Saszetka – Styl i Wygoda",
    price: "199 PLN / 50 USD",
    img: "images/guess.jpg",
    extraImgs: ["images/guess1.jpg","images/guess2.jpg"],
    desc: `
• Ta męska saszetka od Guess łączy praktyczność z nowoczesnym designem. 
Kompaktowy rozmiar pozwala mieć wszystko, co niezbędne, zawsze pod ręką, a regulowany pasek zapewnia wygodę noszenia zarówno przez ramię, jak i na klatce piersiowej.

• Materiał: trwały i lekki tekstyl z wodoodporną impregnacją.
• Krój i design: kompaktowy kształt, schludne linie, charakterystyczne logo Guess.
• Detale: jedna główna komora na zamek, wewnętrzna kieszeń na drobiazgi, regulowany pasek.
• Styl: nowoczesny, uniwersalny – idealny do miasta, podróży lub codziennego użytku.
`
  },
  tn: {
    title: "Nike TN – Edycja Spider-Man",
    price: "399 PLN / 100 USD",
    img: "images/tn.jpg",
    extraImgs: ["images/tn1.jpg","images/tn2.jpg"],
    desc: `
• Te sneakersy z kultowej serii Nike TN wprowadzają superbohaterski styl do codziennego obuwia. 
Jasna kolorystyka w stylu Spider-Mana łączy czerwony, niebieski i czarny, tworząc dynamiczny i wyróżniający się wygląd.

• Materiał: lekki i oddychający tekstyl i tworzywo syntetyczne.
• Amortyzacja: charakterystyczny system Air Max TN dla komfortu przy każdym kroku.
• Design: odważne kolory i grafika inspirowana Spider-Manem.
• Styl: sportowy, młodzieżowy, idealny do miejskiego looku i aktywnego wypoczynku.
`
  }
};

// Заполняем страницу
const product = products[productId];
if (product) {
  document.getElementById('product-title').textContent = product.title;
  document.getElementById('product-price').textContent = product.price;
  document.getElementById('product-img').src = product.img;
  document.getElementById('product-desc').innerHTML = product.desc.replace(/\n/g, '<br><br>');

  const galleryDiv = document.getElementById('product-gallery');
  product.extraImgs.forEach(src => {
    const imgEl = document.createElement('img');
    imgEl.src = src;
    imgEl.addEventListener('click', () => {
      document.getElementById('product-img').src = src;
    });
    galleryDiv.appendChild(imgEl);
  });
}

// Корзина
let cart = JSON.parse(localStorage.getItem('cart')) || [];
document.getElementById('add-to-cart').addEventListener('click', () => {
  cart.push({ id: productId, ...product });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.title} dodano do koszyka!`);
});
