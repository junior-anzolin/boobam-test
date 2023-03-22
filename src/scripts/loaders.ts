import { Product } from "./product.dto";
import { Section } from "./section.dto";
import { generateHash, getElements } from "./utils";

export function loadProductCarousel(
  product: Product,
  loaderSectionKey: string
) {
  try {
    const { loaderSection, elementClone } = getElements(
      "productCarousel",
      loaderSectionKey
    );

    elementClone.children.image.style.backgroundImage = `url('${product.image}')`;
    elementClone.children[1].children.name.innerHTML = product.name;
    elementClone.children[1].children.author.innerHTML = product.author;
    elementClone.children[1].children.amount.innerHTML = product.amount;

    const result = document.createElement("div");
    result.className = "product ps-3";
    result.appendChild(elementClone);

    loaderSection.appendChild(result);
  } catch (error) {
    console.error(error);
  }
}

export function loadProductArtist(product: Product, loaderSectionKey: string) {
  try {
    const { loaderSection, elementClone } = getElements(
      "productArtist",
      loaderSectionKey
    );

    if (product.pro) {
      elementClone.children.image.className = `${elementClone.children.image.className} pro`;
    }

    elementClone.children.image.style.backgroundImage = `url('${product.image}')`;
    elementClone.children[1].children.name.innerHTML = product.name;
    elementClone.children[1].children.author.innerHTML = product.author;
    elementClone.children[1].children.amount.innerHTML = product.amount;

    const result = document.createElement("div");
    result.className = "product col-md-4 p-0 ps-3 pb-3";
    result.appendChild(elementClone);

    loaderSection.appendChild(result);
  } catch (error) {
    console.error(error);
  }
}

export function loadProductsInCarousel(
  products: Product[],
  hashOfResult: string
) {
  products.map((product) => {
    const productElement = loadProductCarousel(product, hashOfResult);
  });
}

export function loadProductsInArtist(
  products: Product[],
  hashOfResult: string
) {
  products.map((product) => {
    const productElement = loadProductArtist(product, hashOfResult);
  });
}

export function loadSectionCategory(section: Section) {
  try {
    const { loaderSection, elementClone } = getElements(section.typeView);

    if (
      section.carouselName &&
      elementClone.children?.[0]?.children?.[0]?.children?.carouselName
    ) {
      elementClone.children[0].children[0].children.carouselName.innerHTML =
        section.carouselName;
    }

    elementClone.children[1].children.image.style.backgroundImage = `url('${section.image}')`;

    elementClone.children[1].children.image.children.title.innerHTML =
      section.title;

    if (
      section.author &&
      elementClone?.children?.[1]?.children?.image?.children?.design
    ) {
      elementClone.children[1].children.image.children.design.innerHTML = `Design: ${section.author}`;
    }

    const hashOfResult = generateHash();
    elementClone.children[1].children.carouselItems.id = hashOfResult;

    const result = document.createElement("div");
    result.className = section.typeView;
    result.appendChild(elementClone);

    loaderSection.appendChild(result);

    loadProductsInCarousel(section.products, hashOfResult);
  } catch (error) {
    console.error(error);
  }
}

export function loadSectionArtist(section: Section) {
  try {
    const { loaderSection, elementClone } = getElements(section.typeView);

    elementClone.children[0].children.image.style.backgroundImage = `url('${section.image}')`;

    elementClone.children[0].children.image.children.title.innerHTML =
      section.title;

    const hashOfResult = generateHash();
    elementClone.children[0].children[1].children.artistItems.id = hashOfResult;

    const result = document.createElement("div");
    result.className = section.typeView;
    result.appendChild(elementClone);

    loaderSection.appendChild(result);

    loadProductsInArtist(section.products, hashOfResult);
  } catch (error) {
    console.error(error);
  }
}
