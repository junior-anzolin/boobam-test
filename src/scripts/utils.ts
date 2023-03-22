export function getElements(key: string, loaderSectionKey = "loaderSection") {
  const loaderSection: any = document.getElementById(loaderSectionKey);
  const template: any = document.getElementById(key);

  if (!template) {
    console.error("Template is not found");
    throw "ERROR: NOT FOUND TEMPLATE";
  }

  const elementClone = template.content.cloneNode(true);

  if (!elementClone) {
    console.error("Is not possible clone element");
    throw "ERROR: CLONE ELEMENT";
  }

  return { loaderSection, elementClone };
}

export function generateHash() {
  return (Math.random() + 1).toString(36).substring(7);
}
