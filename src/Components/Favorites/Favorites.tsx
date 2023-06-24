import { useSelector } from "react-redux";
import styles from "./_Favorites.module.scss";
import { RootState } from "../../store/store";
import { IDataProducts } from "../../Types/Types";
import Card from "../common/Card/Card";
import NoProduct from "../common/NoProduct/NoProduct";
import DeleteBtn from "../common/DeleteBtn/DeleteBtn";
import { useDispatch } from 'react-redux';
import { addCart, deleteFavorite } from '../../store/productsSlice';
import GoToProductsBtn from '../common/GoToProductsBtn/GoToProductsBtn';

function Favorites() {
  const allCarts = useSelector((store: RootState) => store.products.favorites);
  const dispatch = useDispatch()

  const handlerCart = (id: number) => {
    dispatch(deleteFavorite({ id }))
  }

  return (
    <>
      {allCarts.length === 0 ? (
        <NoProduct title="избранных" />
      ) : (
        <section className={styles.favoritesMain}>
          <h2>Мои Избранные</h2>
          <div className={styles.favoritesWrapper}>
            {allCarts.map((items: IDataProducts) => {
              return (
                <div className={styles.favoritesItems} key={items.id}>
                  <Card
                    img={items.image}
                    allProps={{ ...items }}
                    id={items.id}
                    nameProduct={items.name}
                    price={items.price}
                  />
                  <button className={styles.favoriteAddToCart} onClick={() => dispatch(addCart({ ...items }))}>добавить в корзину</button>
                  <DeleteBtn title='избранных' id={items.id} deleteProduct={handlerCart} />
                </div>
              );
            })}
          </div>
          <GoToProductsBtn />
        </section>
      )}
    </>
  );
}

export default Favorites;
