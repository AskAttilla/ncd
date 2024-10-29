import { Outlet } from "react-router-dom";

import Menu from '../components/menu/menu.jsx'
import Header from '../components/header/header.jsx'

export default function Root() {
    return (
      <>
        <Menu />
        <Outlet/>
      </>
    );
  }