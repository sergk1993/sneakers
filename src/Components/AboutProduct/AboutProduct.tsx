import { useSelector } from 'react-redux';
import styles from './_AboutProduct.module.scss';
import { RootState } from '../../store/store';
import { IDataProducts } from '../../Types/Types';
import imgEmpty from '../../assets/img/noSneaker.png';
import GoToProductsBtn from '../common/GoToProductsBtn/GoToProductsBtn';
import DeleteBtn from '../common/DeleteBtn/DeleteBtn';
import { addCart, deleteCart } from '../../store/productsSlice';
import { useDispatch } from 'react-redux';

function AboutProduct() {
	const currentProduct = useSelector((store: RootState) => store.products.aboutProduct);
	const cart = useSelector((store: RootState) => store.products.cart);
	const dispatch = useDispatch()

	return (
		<>
			{
				currentProduct.map((items: IDataProducts) => {
					const checkTheSameIdInCart = cart.find((el: IDataProducts) => el.id === items.id);
					return (
						<div key={items.id} className={styles.aboutProductWrapper}>
							<img src={items.image ? items.image : imgEmpty} alt="" />
							<div className={styles.aboutProductAbout}>
								<p className={styles.aboutProductAbout__title}>{items.name}</p>
								<p className={styles.aboutProductText}>{items.about}</p>

								<div className={styles.aboutProductPriceWrapper}>
									<p>Размер: {items.size}</p>

									{checkTheSameIdInCart ? <DeleteBtn id={items.id} deleteAction={deleteCart} title='корзины' />
										:
										<button onClick={() => dispatch(addCart({ ...items }) )}>добавить корзину</button>
									}
									<GoToProductsBtn />
								</div>
							</div>
						</div>
					)
				})

			}
		</>
	)
}

export default AboutProduct