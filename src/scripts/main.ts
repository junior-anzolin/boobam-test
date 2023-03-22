import { loadSectionArtist, loadSectionCategory } from "./loaders";
import { sections } from "./seed";

function startProject() {
  sections.map((section) => {
    switch (section.typeView) {
      case "carousel": {
        loadSectionCategory(section);
        break;
      }
      case "artist": {
        loadSectionArtist(section);
        break;
      }
    }
  });
}

startProject();
