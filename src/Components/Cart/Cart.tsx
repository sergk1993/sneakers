import { useSelector } from "react-redux";
import styles from "./_Cart.module.scss";
import { RootState } from "../../store/store";
import { IDataProducts } from "../../Types/Types";
import Card from "../common/Card/Card";
import NoProduct from "../common/NoProduct/NoProduct";
import DeleteBtn from '../common/DeleteBtn/DeleteBtn';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../../store/productsSlice';
import GoToProductsBtn from '../common/GoToProductsBtn/GoToProductsBtn';
import CalculateAllPrice from '../../utils/CalculateAllPrice';
import СreateGapForTheAmount from '../../utils/СreateGapForTheAmount';

function Cart() {
  const allCarts = useSelector((store: RootState) => store.products.cart);
  const dispatch = useDispatch()
  const handlerCart = (id: number) => {
    dispatch(deleteCart({ id }))
  }
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
                <div className={styles.cartItems} key={items.id}>
                  <Card
                    img={items.image}
                    allProps={{ ...items }}
                    id={items.id}
                    nameProduct={items.name}
                    price={items.price}
                  />
                  <DeleteBtn title='корзины' id={items.id} deleteProduct={handlerCart} />
                </div>
              );
            })}
          </div>
          {/* функц из utils, первая разбивает число на пробелы, вторая считает price */}
          <div className={styles.cartWrapper__price}><span>Общая цена:</span> {СreateGapForTheAmount(CalculateAllPrice(allCarts))}</div>
          <button className={styles.cartBuyAllProducts} onClick={() => alert(`поздравляю вас с покупкой, общая сумма: ${СreateGapForTheAmount(CalculateAllPrice(allCarts))} \nв будущем здесь будет форма с оплатой. `)}> купить все товары</button>
          <GoToProductsBtn />
        </section>
      )}
    </>
  );
}

export default Cart;
