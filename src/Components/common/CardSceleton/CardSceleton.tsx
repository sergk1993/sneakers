import styles from "./_CardSceleton.module.scss";

function CardSkeleton() {
  return (
    <>
      <article className={styles.cardSkeleton}>
        <button className={styles.cardSkeleton__favoriteBtn}></button>
        <h3></h3>
        
        <div>
          <p className={styles.cardSkeleton__smallText}></p>

          <div className={styles.cardSkeleton__priceBox}>
            <p></p>

            <button></button>
          </div>
        </div>
      </article>
    </>
  );
}

export default CardSkeleton;
