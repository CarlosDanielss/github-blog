import { Outlet } from "react-router-dom";

import { Header } from "../../components/header";
import { Modal } from "../../components/modal";


export function DefaultLayout() {
  return (
    <>
      <Header />
      <Modal />
      <Outlet />
    </>
  );
}
