const busqueda = document.querySelector("form");

busqueda.addEventListener("submit", (event) => {
  event.preventDefault();
  let palabra = busqueda.elements["busqueda"].value;

  switch (palabra) {
    case "Helado de chocolate":
      location.href =
        "https://www.google.com/search?q=helado+de+chocolate&sca_es";
      break;
    case "Helado de coco":
      location.href =
        "https://www.google.com/search?q=helado+de+coco&sca_es";
      break;
    case "Helado de chicle":
        location.href="https://www.google.com/search?q=helado+de+chicle&sca_es"
        break;
    case "Helado de oreo":
        location.href="https://www.google.com/search?q=helado+de+oreo&sca_es"
        break;
    case "Helado de vainilla":
        location.href="https://www.google.com/search?q=helado+de+vainilla&sca_es"
  }
});
