import styles from "./DeleteBtn.module.scss";

type DeleteBtnType = {
  title: string,
  id:number,
  deleteProduct: (id:number) => void
};

function DeleteBtn({ title, deleteProduct, id}: DeleteBtnType) {
  return (
    <>
      <button className={styles.deleteBtn} onClick={() => deleteProduct(id)}> удалить из {title}</button>
    </>
  );
}

export default DeleteBtn;
