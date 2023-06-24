import { useDispatch } from 'react-redux';
import styles from "./DeleteBtn.module.scss";

type DeleteBtnType = {
  title: string,
  id: number,
  deleteAction: (id: {id:number}) => any
};
/* принимает название, экшен для удаления, кликнутый id */
function DeleteBtn({ title, deleteAction, id }: DeleteBtnType) {
  const dispatch = useDispatch()

  return (
    <>
      <button className={styles.deleteBtn} onClick={() => dispatch(deleteAction({id:id}))}> удалить из {title}</button>
    </>
  );
}

export default DeleteBtn;
