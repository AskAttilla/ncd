import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="menu">
          <nav>
            <ul>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/faq`}>FAQ</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
            <Outlet/>
        </div>
      </>
    );
  }