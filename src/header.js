import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function Header() {
  return (
    <div className="header">
      <h1>Bookshelf</h1>
      <input id="search-q" type="text" placeholder="Search notebooks" />
      <i><FontAwesomeIcon icon={faPlus} color="#FFBA54" size="2x" /></i>
    </div>
  );
}
