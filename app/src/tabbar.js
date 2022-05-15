import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faBook,
  faPuzzlePiece
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
export default function Tabbar() {
  return (
    <main id="tabbar">
        <i> <FontAwesomeIcon icon={faBook} size="1x"/>  Bookshelf</i>
        <i> <FontAwesomeIcon icon={faPuzzlePiece} size="1x"/> Addons</i>
        <i> <FontAwesomeIcon icon={faCog} size="1x"/> Settings</i>
    </main>
  );
}
