import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/productsSlice";
import ScrollPageToTop from '../../utils/ScrollPageToTop';
import ButtonToTop from '../common/ButtonToTop/ButtonToTop';

function Root() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <ScrollPageToTop />
      <ButtonToTop />
      <div className="mainWrapper">
        <Header />

        <main className="container">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Root;
