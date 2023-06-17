import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Root() {
  return (
    <div className="container">
      <div className="mainWrapper">
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Root;
