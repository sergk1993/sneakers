import { Link } from "react-router-dom";
import errorImg from "../../assets/img/error.png";
import styles from "./_ErrorPage.module.scss";

function ErrorPage() {
  return (
    <section className={styles.errorMain}>
      <div className={styles.errorWrapper}>
        <img src={errorImg} alt="Error img" />
        <p> Ой... Такой страницы не существует</p>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </section>
  );
}

export default ErrorPage;
