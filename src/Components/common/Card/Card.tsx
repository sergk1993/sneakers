import styles from "./_Card.module.scss";
import noPhoto from "../../../assets/img/noSneaker.png";
import { Link } from "react-router-dom";
import { IDataProducts } from '../../../Types/Types';

type CardType = {
  img: string;
  nameProduct: string;
  price: string | number;
  id: number;
  handlerAddProduct: (payload: IDataProducts) => void;
  allProps: IDataProducts,
};

function Card({ img, nameProduct, price, id , handlerAddProduct, allProps}: CardType) {
  return (
    <>
      <article className={styles.cardMain}>
        <button className={styles.cardMain__favoriteBtn}>
          <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
            <path d="M60.732 29.7C41.107 29.7 22 39.7 22 67.41c0 27.29 45.274 67.29 74 94.89 28.744-27.6 74-67.6 74-94.89 0-27.71-19.092-37.71-38.695-37.71C116 29.7 104.325 41.575 96 54.066 87.638 41.516 76 29.7 60.732 29.7z" />
          </svg>
        </button>

        <Link to={`about-product/${id}`}>
          <img src={img ? img : noPhoto} alt="sneakser" />
        </Link>
        <h3>{nameProduct}</h3>

        <div className={styles.cardMain__priceBox}>
          <p>
            цена: <span>{price}</span>
          </p>

          <button onClick={() => handlerAddProduct(allProps)}>
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" />
            </svg>
          </button>
        </div>
      </article>
    </>
  );
}

export default Card;
