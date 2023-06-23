import { useSelector } from "react-redux";
import styles from "./_Cart.module.scss";
import { RootState } from "../../store/store";
import { IDataProducts } from "../../Types/Types";
import Card from "../common/Card/Card";
import NoProduct from "../common/NoProduct/NoProduct";

function Cart() {
  const allCarts = useSelector((store: RootState) => store.products.cart);

  return (
    <>
      {allCarts.length === 0 ? (
        <NoProduct title="корзине" />
      ) : (
        <section className={styles.cartMain}>
          <h2>Мои Корзина</h2>
          <div className={styles.cartWrapper}>
            {allCarts.map((items: IDataProducts) => {
              return (
                <div className={styles.cartItems}>
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

export default Cart;
