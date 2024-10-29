import { Link } from "react-router-dom";

import "./menu.scss"

const Menu = () => {
    return (
        <div className="menu">
            <nav className="menu__nav">
                <ul className="menu__list">
                    <li className="menu__list-item">
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li className="menu__list-item">
                        <Link to={`/faq`}>FAQ</Link>
                    </li>
                </ul>
            </nav>
        </div>
  );
}

export default Menu;