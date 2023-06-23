import styles from "./_Header.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import BurgerBtn from "../common/BurgerBtn/BurgerBtn";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import СreateGapForTheAmount from "../../utils/СreateGapForTheAmount";

function Header() {
  const [clickBtn, setClickBtn] = useState(false);

  const cartCount = useSelector((state: RootState) => state.products.cartCount);
  const cart = useSelector((state: RootState) => state.products.cart);

  const favoriteCount = useSelector(
    (state: RootState) => state.products.favoritCounter
  );

  const findAmount = cart.reduce(
    (total, amount) => total + amount.price * amount.count,
    0
  );

  return (
    <>
      <BurgerBtn clickBtn={clickBtn} setClickBtn={setClickBtn} />
      <div
        className={`${styles.asideBurgerPanelBg}  ${
          clickBtn ? styles.activeBurgerPanelBg : ""
        }`}
        onClick={() => setClickBtn(false)}
      ></div>

      <div
        className={`${styles.asideBurgerPanel} ${
          clickBtn ? styles.active : ""
        }`}
      ></div>

      <header className={styles.headerMain}>
        <div className="container">
          <div className={styles.headerMainWrapper}>
            <Link className={styles.headerTitle} to="/" title="На главную ">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.202 512.202"
              >
                <g transform="translate(-1)">
                  <g>
                    <path
                      style={{ fill: "#58555D" }}
                      d="M36.513,180.965c-4.873,0-8.828-3.946-8.828-8.828c0-9.852-8.015-17.858-17.858-17.858
			c-4.882,0-8.828-3.955-8.828-8.828c0-4.882,3.946-8.828,8.828-8.828c19.58,0,35.513,15.925,35.513,35.513
			C45.341,177.019,41.386,180.965,36.513,180.965z"
                    />
                    <path
                      style={{ fill: "#58555D" }}
                      d="M252.725,227.887L252.725,227.887c-7.777-5.879-9.331-16.949-3.452-24.726l15.96-21.133
			c5.879-7.786,16.949-9.331,24.726-3.452c7.786,5.87,9.331,16.949,3.452,24.726l-15.96,21.133
			C271.581,232.212,260.502,233.766,252.725,227.887"
                    />
                    <path
                      style={{ fill: "#58555D" }}
                      d="M311.134,263.224L311.134,263.224c-7.777-5.879-9.331-16.949-3.452-24.735l15.96-21.124
			c5.879-7.786,16.949-9.331,24.726-3.46c7.786,5.879,9.331,16.949,3.452,24.735l-15.96,21.133
			C329.99,267.549,318.911,269.094,311.134,263.224"
                    />
                  </g>
                  <path
                    style={{ fill: "#0cd1b7" }}
                    d="M513.151,309.249L513.151,309.249c1.563,10.62-51.933,23.217-66.454,28.813
		c-2.728,1.042-5.164,2.639-7.23,4.705c-0.98,0.98-2.048,1.854-3.187,2.613c-3.416,2.277-7.45,3.513-11.608,3.513H64.974H18.435
		c-11.838,15.545-9.516,26.58-4.228,33.73c5.094,6.885,13.594,10.408,22.157,10.408h349.122c39.38,0,78.265-8.828,113.788-25.838
		l4.361-2.083C514.475,359.955,513.151,309.249,513.151,309.249"
                  />
                  <path
                    style={{ fill: "#07a09b" }}
                    d="M474.582,287.103c-26.368,0.777-55.852-15.086-55.852-15.086l-70.744-28.301l-11.555,15.298
		c-5.297,7.018-15.007,9.905-22.784,5.809c-9.913-5.235-12.429-17.77-5.967-26.333l7.698-10.178
		c-9.534-5.323-18.582-11.396-27.383-17.832l-9.975,13.197c-5.297,7.018-14.998,9.913-22.784,5.809
		c-9.913-5.235-12.42-17.77-5.959-26.333l11.529-15.263c-6.497-6.215-12.774-12.685-18.644-19.553
		c-21.972-25.759-48.605-51.765-64.662-48.958c-3.734,0.653-7.459,1.677-11.273,2.94c-6.824,17.09-26.289,33.589-52.206,42.019
		c-26.553,8.633-52.586,6.435-68.017-3.999c-5.111-3.46-10.893-5.694-17.064-5.65h-1.271v88.073c0,0-52.824,44.862-9.234,106.134
		h46.548h359.689c5.35,0,10.717-1.827,14.398-5.711c2.145-2.26,4.732-4.017,7.627-5.129c14.521-5.588,67.734-18.105,66.454-28.804
		C511.649,296.716,500.959,286.326,474.582,287.103"
                  />
                  <g>
                    <path
                      style={{ fill: "#d9d9d9" }}
                      d="M33.091,348.896h31.885h53.213c8.333-5.42,15.095-12.782,18.767-22.863
			c5.809-15.996,59.215-101.385,105.578-157.299c-0.124-0.141-0.256-0.256-0.371-0.397c-21.972-25.759-48.614-51.765-64.671-48.958
			c-3.725,0.653-7.45,1.677-11.264,2.94c-6.824,17.09-26.289,33.589-52.206,42.019c-5.473,1.774-10.893,2.993-16.234,3.866
			c-24.991,60.849-57.935,140.173-57.935,140.173L33.091,348.896z"
                    />
                    <path
                      style={{ fill: "#d9d9d9" }}
                      d="M375.931,254.896c-22.502,28.425-40.519,56.514-40.519,56.514l-6.25,37.482h88.594
			c6.426-5.067,11.714-11.449,14.76-19.827c2.931-8.051,18.247-24.514,37.897-41.993c-25.229-0.839-51.686-15.06-51.686-15.06
			L375.931,254.896z"
                    />
                    <path
                      style={{ fill: "#58555D" }}
                      d="M266.031,286.896c0,14.627-11.855,26.483-26.483,26.483c-14.627,0-26.483-11.855-26.483-26.483
			s11.855-26.483,26.483-26.483C254.175,260.413,266.031,272.268,266.031,286.896"
                    />
                  </g>
                  <g>
                    <path
                      style={{ fill: "#77757E" }}
                      d="M151.272,233.93h-35.31c-4.873,0-8.828-3.946-8.828-8.828s3.955-8.828,8.828-8.828h35.31
			c4.873,0,8.828,3.946,8.828,8.828S156.145,233.93,151.272,233.93"
                    />
                    <path
                      style={{ fill: "#77757E" }}
                      d="M168.927,198.62h-35.31c-4.873,0-8.828-3.946-8.828-8.828c0-4.882,3.955-8.828,8.828-8.828h35.31
			c4.873,0,8.828,3.946,8.828,8.828C177.755,194.674,173.8,198.62,168.927,198.62"
                    />
                    <path
                      style={{ fill: "#77757E" }}
                      d="M133.617,269.241h-35.31c-4.873,0-8.828-3.946-8.828-8.828s3.955-8.828,8.828-8.828h35.31
			c4.873,0,8.828,3.946,8.828,8.828S138.49,269.241,133.617,269.241"
                    />
                    <path
                      style={{ fill: "#77757E" }}
                      d="M115.962,304.551h-35.31c-4.873,0-8.828-3.946-8.828-8.828c0-4.882,3.955-8.828,8.828-8.828h35.31
			c4.873,0,8.828,3.946,8.828,8.828C124.789,300.605,120.834,304.551,115.962,304.551"
                    />
                  </g>
                </g>
              </svg>
              <div className={styles.headerTitleWrapper}>
                <h1>Sneakers</h1>
                <p>Магазин лучших кроссовок</p>
              </div>
            </Link>

            <div className={styles.headerAboutIcons}>
              <div
                className={`${styles.headerAboutCart} ${
                  clickBtn ? styles.activeCart : ""
                }`}
              >
                <Link
                  to="cart"
                  className={styles.headerAboutCartLink}
                  onClick={() => setClickBtn(false)}
                >
                  <span>{cartCount}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9117 7.99735 16.5454 7.54548 16.5454C7.09361 16.5454 6.72729 16.9117 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9117 16.9973 16.5454 16.5455 16.5454C16.0936 16.5454 15.7273 16.9117 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <p>
                  {СreateGapForTheAmount(findAmount)} <span> тенг</span>
                </p>
              </div>
              <Link
                to="favorite"
                className={`${styles.headerFavoriteLink}  ${
                  clickBtn ? styles.activeFavoriteSvg : ""
                }`}
                onClick={() => setClickBtn(false)}
              >
                <span>{favoriteCount}</span>

                <svg
                  fill="none"
                  viewBox="0 0 192 192"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M60.732 29.7C41.107 29.7 22 39.7 22 67.41c0 27.29 45.274 67.29 74 94.89 28.744-27.6 74-67.6 74-94.89 0-27.71-19.092-37.71-38.695-37.71C116 29.7 104.325 41.575 96 54.066 87.638 41.516 76 29.7 60.732 29.7z" />
                </svg>
              </Link>
              <Link to="profile" onClick={() => setClickBtn(false)}>
                <svg
                  className={`${styles.headerProfileSvg}  ${
                    clickBtn ? styles.activeProfileSvg : ""
                  }`}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
