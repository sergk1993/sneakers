import { useEffect, useState } from "react";
import { IDataProducts } from "../../Types/Types";
import Card from "../common/Card/Card";
import styles from "./_Products.module.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CardSkeleton from "../common/CardSceleton/CardSceleton";
import fetchErrorImg from "../../assets/img/404.png";

function Products() {
  const allUser = useSelector((state: RootState) => state.products.products);
  const isLoading = useSelector((state: RootState) => state.products.isLoading);
  const fetchError = useSelector((state: RootState) => state.products.error);

  const skeletons = [...new Array(12)].map((_, i) => <CardSkeleton key={i} />);

  return (
    <section>
      <div className={styles.productsWrapper}>
        {fetchError ? (
          <div className={styles.fetchError}>
            <span>{fetchError}</span>
            <img src={fetchErrorImg} alt="" />
          </div>
        ) : (
          <>
            {isLoading
              ? skeletons
              : allUser.map((items: IDataProducts) => {
                  return (
                    <Card
                      allProps={items}
                      key={items.id}
                      id={items.id}
                      img={items.image}
                      nameProduct={items.name}
                      price={items.price}
                    />
                  );
                })}
          </>
        )}
      </div>
    </section>
  );
}

export default Products;
