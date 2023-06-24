import styles from "./_Card.module.scss";
import noPhoto from "../../../assets/img/noSneaker.png";
import { Link } from "react-router-dom";
import { IDataProducts } from "../../../Types/Types";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addCart,
  addFavorites,
  removeCart,
  toggleFavorite,
} from "../../../store/productsSlice";
import СreateGapForTheAmount from "../../../utils/СreateGapForTheAmount";

type CardType = {
  img: string;
  nameProduct: string;
  price: string | number;
  id: number;
  allProps: IDataProducts;
};

/* поиск одинакового айди товара true / false */
function findTheSameId(arr: IDataProducts[], id: number) {
  return arr.some((el) => el.id === id);
}

function Card({ img, nameProduct, price, id, allProps }: CardType) {
  const favorites = useSelector((state: RootState) => state.products.favorites);
  const carts = useSelector((state: RootState) => state.products.cart);

  /* сколько определенных товаров передано в корзину */
  const cartCounter = useSelector(
    (state: RootState) => state.products.cartCount
  );

  const dispatch = useDispatch();

  /* проверяю есть ли одинаковые товары */
  const findCart: any = carts.find((el:IDataProducts) => el.id === id);

  /* переключалка для favorites, если нет товара добавь товар, если есть прокинь его айди */
  const handlerFavorite = (id: number) => {
    const findToggleFavorite: any = favorites.find((el:IDataProducts) => el.id === id);
    if (findToggleFavorite) {
      /* если есть товар в корзине прокидываю айди */
      dispatch(toggleFavorite({ id: findToggleFavorite.id }));
    } else {
      /* если нет одинакового айди, прокидываю товар со всеми данными  */
      dispatch(addFavorites({ ...allProps }));
    }
  };

  return (
    <>
      <article className={styles.cardMain} key={id}>
        {/* если товары больше нуля и товары равны, покажи иконку добавленного товара */}
        {cartCounter > 0 && findCart && (
          <span className={styles.cardMain__countCards}>{findCart.count}</span>
        )}
        <button title='добавить/удалить товар в избранные '
          className={styles.cardMain__favoriteBtn}
          onClick={() => handlerFavorite(id)}
        >
          <svg
            viewBox="0 0 192 192"
            xmlns="http://www.w3.org/2000/svg"
            className={findTheSameId(favorites, id) ? styles.active : ""}
          >
            <path d="M60.732 29.7C41.107 29.7 22 39.7 22 67.41c0 27.29 45.274 67.29 74 94.89 28.744-27.6 74-67.6 74-94.89 0-27.71-19.092-37.71-38.695-37.71C116 29.7 104.325 41.575 96 54.066 87.638 41.516 76 29.7 60.732 29.7z" />
          </svg>
        </button>

        <Link to={`about-product/${id}`}>
          <img src={img ? img : noPhoto} alt="sneakers" />
        </Link>
        <h3>{nameProduct}</h3>

        <div className={styles.priceBox}>
          <p>
            <b> цена: </b>
            <span className={styles.priceBox__countPrice}>
              {/* если у определенного товара есть count, то умножь цену на count, или выведи цену */}
              {findCart?.count
                ? СreateGapForTheAmount(+price * findCart?.count)
                : СreateGapForTheAmount(price)}
            </span>
            <em>тенге</em>
          </p>

          <div className={styles.priceBox__priceBoxBtn}>
            <button title='уменьшить товар из корзины'
              onClick={() => dispatch(removeCart({ id: id }))}
              className={findTheSameId(carts, id) ? styles.activeMinus : ""}
            >
              <svg
                viewBox="-4 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 13.531h23.688v4.938h-23.688v-4.938z"></path>
              </svg>
            </button>

            <button title='добавить товар в корзину'
              onClick={() => dispatch(addCart({ ...allProps }))}
              className={findTheSameId(carts, id) ? styles.activePlus : ""}
            >
              <svg
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;
