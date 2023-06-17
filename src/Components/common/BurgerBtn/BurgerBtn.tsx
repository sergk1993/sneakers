import styles from "./_BurgerBtn.module.scss";

type BurgerBtnType = {
  clickBtn: boolean;
  setClickBtn: (item: boolean) => void;
};

function BurgerBtn({ clickBtn, setClickBtn }: BurgerBtnType) {
  return (
    
      <button 
        className={styles.burgerMenuBtn}
        onClick={() => setClickBtn(!clickBtn)}
      >
        <span className={clickBtn ? styles.active : ""}></span>
        <span className={clickBtn ? styles.active : ""}></span>
        <span className={clickBtn ? styles.active : ""}></span>
      </button>
    
  );
}

export default BurgerBtn;
