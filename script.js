/* =========================================================
   1. DADOS DO CARDÁPIO

   Os produtos ficam concentrados no array "burgers".
   Para modificar um item, altere nome, preço, ingredientes,
   imagem ou etiqueta diretamente no objeto correspondente.
========================================================= */

const burgers = [
  {
    number: 1,
    name: "Clássico da Casa",
    price: "R$ 34,90",
    ingredients:
      "Pão artesanal de casca crocante, hambúrguer bovino de 180 g grelhado, queijo prato derretido e maionese da casa.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    tag: "Clássico",
    vegetarian: false
  },
  {
    number: 2,
    name: "Paulista",
    price: "R$ 37,90",
    ingredients:
      "Pão artesanal de casca crocante, hambúrguer bovino de 180 g grelhado, queijo prato, alface americana, tomate fresco e maionese da casa.",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85",
    tag: "Da casa",
    vegetarian: false
  },
  {
    number: 3,
    name: "Bacon da Casa",
    price: "R$ 42,90",
    ingredients:
      "Pão artesanal de casca crocante, hambúrguer bovino de 180 g grelhado, cheddar fatiado, bacon crocante e maionese da casa.",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=85",
    tag: "Bacon",
    vegetarian: false
  },
  {
    number: 4,
    name: "Cheddar & Cebola",
    price: "R$ 41,90",
    ingredients:
      "Pão brioche tostado, hambúrguer bovino de 180 g grelhado, cheddar fatiado, cebola caramelizada e maionese da casa.",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85",
    tag: "Especial",
    vegetarian: false
  },
  {
    number: 5,
    name: "Barbecue Rústico",
    price: "R$ 45,90",
    ingredients:
      "Pão artesanal de casca crocante, hambúrguer bovino de 180 g grelhado, cheddar fatiado, bacon crocante, cebola roxa e molho barbecue.",
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=85",
    tag: "Barbecue",
    vegetarian: false
  },
  {
    number: 6,
    name: "Provolone da Brasa",
    price: "R$ 44,90",
    ingredients:
      "Pão artesanal de casca crocante, hambúrguer bovino de 180 g grelhado, provolone derretido, cebola caramelizada, rúcula e maionese da casa.",
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=85",
    tag: "Na brasa",
    vegetarian: false
  },
  {
    number: 7,
    name: "Tradicional Completo",
    price: "R$ 47,90",
    ingredients:
      "Pão artesanal de casca crocante, hambúrguer bovino de 180 g grelhado, queijo prato, bacon crocante, ovo na chapa, alface americana, tomate e maionese da casa.",
    image:
      "https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=900&q=85",
    tag: "Completo",
    vegetarian: false
  },
  {
    number: 8,
    name: "Duplo da Casa",
    price: "R$ 59,90",
    ingredients:
      "Pão brioche tostado, dois hambúrgueres bovinos de 180 g cada, cheddar fatiado, bacon crocante, picles e maionese da casa.",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=85",
    tag: "Duplo",
    vegetarian: false
  },
  {
    number: 9,
    name: "Horta da Casa",
    price: "R$ 38,90",
    ingredients:
      "Pão artesanal de casca crocante, hambúrguer de grão-de-bico com cogumelos de 150 g, queijo prato, rúcula, tomate, cebola caramelizada e maionese da casa.",
    image:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=85",
    tag: "Vegetariano",
    vegetarian: true
  }
];

/* =========================================================
   2. RENDERIZAÇÃO DOS NOVE CARDS

   A estrutura é gerada automaticamente com base no array.
   O método padStart mantém a numeração no formato 01, 02 etc.
========================================================= */

const menuGrid = document.querySelector("#menu-grid");

if (menuGrid) {
  menuGrid.innerHTML = burgers
    .map((burger) => {
      const formattedNumber = String(burger.number).padStart(2, "0");

      const vegetarianIcon = burger.vegetarian
        ? '<i class="fa-solid fa-leaf" aria-hidden="true"></i>'
        : "";

      return `
        <article class="menu-card reveal">
          <div class="menu-image">
            <img
              src="${burger.image}"
              alt="${burger.name}"
              loading="lazy"
            >

            <span class="menu-tag">
              ${vegetarianIcon}
              ${burger.tag}
            </span>
          </div>

          <div class="menu-content">
            <span class="menu-number">
              ${formattedNumber}
            </span>

            <div class="menu-title-row">
              <h3>${burger.name}</h3>

              <span class="menu-price">
                ${burger.price}
              </span>
            </div>

            <p>${burger.ingredients}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

/* =========================================================
   3. MENU DE NAVEGAÇÃO NO CELULAR
========================================================= */

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function closeMobileMenu() {
  if (!menuButton || !navLinks) {
    return;
  }

  navLinks.classList.remove("open");
  document.body.classList.remove("menu-open");

  menuButton.setAttribute("aria-expanded", "false");

  menuButton.innerHTML =
    '<i class="fa-solid fa-bars"></i>';
}

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    document.body.classList.toggle("menu-open", isOpen);

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

/* =========================================================
   4. ALTERAÇÃO DO CABEÇALHO DURANTE A ROLAGEM
========================================================= */

const header = document.querySelector(".header");

function updateHeader() {
  if (!header) {
    return;
  }

  header.classList.toggle(
    "scrolled",
    window.scrollY > 40
  );
}

window.addEventListener("scroll", updateHeader, {
  passive: true
});

updateHeader();

/* =========================================================
   5. ANIMAÇÕES DE ENTRADA DURANTE A ROLAGEM
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((item) => {
  observer.observe(item);
});

/* =========================================================
   6. SOMBRA SUAVE QUE ACOMPANHA O MOUSE
========================================================= */

const cursorShadow = document.querySelector("#cursor-shadow");

const shadowMediaQuery = window.matchMedia(
  "(hover: hover) and (pointer: fine) and " +
  "(prefers-reduced-motion: no-preference)"
);

let animationFrame = null;
let cursorX = 0;
let cursorY = 0;

function updateCursorShadow() {
  if (cursorShadow) {
    cursorShadow.style.left = `${cursorX}px`;
    cursorShadow.style.top = `${cursorY}px`;
  }

  animationFrame = null;
}

function hideCursorShadow() {
  if (cursorShadow) {
    cursorShadow.classList.remove("is-active");
  }

  if (animationFrame !== null) {
    window.cancelAnimationFrame(animationFrame);
    animationFrame = null;
  }
}

if (cursorShadow) {
  window.addEventListener("pointermove", (event) => {
    if (!shadowMediaQuery.matches || event.pointerType !== "mouse") {
      hideCursorShadow();
      return;
    }

    cursorX = event.clientX;
    cursorY = event.clientY;

    cursorShadow.classList.add("is-active");

    if (animationFrame === null) {
      animationFrame = window.requestAnimationFrame(
        updateCursorShadow
      );
    }
  });

  document.documentElement.addEventListener(
    "pointerleave",
    hideCursorShadow
  );

  window.addEventListener("blur", hideCursorShadow);

  shadowMediaQuery.addEventListener(
    "change",
    hideCursorShadow
  );
}

/* =========================================================
   7. ANO AUTOMÁTICO DO RODAPÉ
========================================================= */

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

/* =========================================================
   8. LIMPEZA DO REQUESTANIMATIONFRAME

   Evita que a animação continue caso a página seja encerrada.
========================================================= */

window.addEventListener("beforeunload", () => {
  if (animationFrame) {
    window.cancelAnimationFrame(animationFrame);
  }
});
