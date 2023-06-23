import { useSelector } from "react-redux";
import styles from "./_Favorites.module.scss";
import { RootState } from "../../store/store";
import { IDataProducts } from "../../Types/Types";
import Card from "../common/Card/Card";
import NoProduct from '../common/NoProduct/NoProduct';

function Favorites() {
  const allCarts = useSelector((store: RootState) => store.products.favorites);

  return (
    <>
      {allCarts.length === 0 ? (
       <NoProduct title='избранных'/>
      ) : (
        <section className={styles.favoritesMain}>
          <h2>Мои Избранные</h2>
          <div className={styles.favoritesWrapper}>
            {allCarts.map((items: IDataProducts) => {
              return (
                <div className={styles.favoritesItems}>
                  <Card
                    img={items.image}
                    allProps={{ ...items }}
                    id={items.id}
                    nameProduct={items.name}
                    price={items.price}
                  />
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default Favorites;
