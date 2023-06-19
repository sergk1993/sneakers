import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Root() {
  return (
    <div className="mainWrapper">
      <Header />

      <main className="container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Root;
