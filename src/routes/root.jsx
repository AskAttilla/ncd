import { Outlet } from "react-router-dom";

import Menu from '../components/menu/menu.jsx'

export default function Root() {
    return (
      <>
        <Menu />
        <Outlet/>
      </>
    );
  }