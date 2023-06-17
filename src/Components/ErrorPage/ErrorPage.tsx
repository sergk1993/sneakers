import errorImg from "../../assets/img/error.png";
import styles from './_ErrorPage.module.scss';

function ErrorPage() {
  return (
    <section className={styles.errorMain}>
      <div className={styles.errorWrapper}>
        <img src={errorImg} alt="Error img" />
        <p> Oops... Something wrong</p>
      </div>
    </section>
  );
}

export default ErrorPage;