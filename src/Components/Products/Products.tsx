import { useEffect, useState } from "react";
import { IDataProducts } from "../../Types/Types";
import Card from "../common/Card/Card";
import styles from "./_Products.module.scss";

function Products() {
  const [getDataUser, setDataUser] = useState<IDataProducts | any>([]);
  useEffect(() => {
    try {
      fetch("https://63c6490edcdc478e15be59ac.mockapi.io/sneakers")
        .then((data) => data.json())
        .then((data) => setDataUser(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <section>
      <div className={styles.productsWrapper}>
        {getDataUser.map((items: IDataProducts) => {
          return (
            <Card
              key={items.id}
              id={items.id}
              img={items.image}
              nameProduct={items.name}
              price={items.price}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Products;
