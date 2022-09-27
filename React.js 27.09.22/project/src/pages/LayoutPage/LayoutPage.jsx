import { Outlet } from "react-router-dom";

import Header from "../../shared/Components/Header/Header";

const LayoutPage = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutPage;
