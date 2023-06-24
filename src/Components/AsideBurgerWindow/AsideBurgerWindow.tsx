import { useSelector } from 'react-redux';
import styles from './_AsideBurgerWindow.module.scss';
import { RootState } from '../../store/store';
import { IDataProducts } from '../../Types/Types';
import Card from '../common/Card/Card';
import NoProduct from '../common/NoProduct/NoProduct';



type AsideBurgerWindowType = {
	setClickBtn: (toFalse: boolean) => void,
	clickBtn: boolean,
}

function AsideBurgerWindow({ setClickBtn, clickBtn }: AsideBurgerWindowType) {
	const cart = useSelector((store: RootState) => store.products.cart)
	return (
		<>
			<div
				className={`${styles.asideBurgerWindow} ${clickBtn ? styles.asideBurgerWindowActiveBg : ""
					}`}
				onClick={() => setClickBtn(false)}
			></div>



	
				<div className={`${styles.asideBurgerWindowPanel} ${clickBtn ? styles.activewindowPanel : ""}`}>
					{cart.length === 0 ? <NoProduct title='корзине'/>
					:
					cart.map((items: IDataProducts) => {
						return (
							<div key={items.id} className={styles.asideBurgerWindowCard}>
								<div className={styles.asideBurgerWindowCardMargin}>
								</div>
								<Card
									allProps={items}
									key={items.id}
									id={items.id}
									img={items.image}
									nameProduct={items.name}
									price={items.price} />

							</div>
						)
					})
					}

				</div>

			


		</>
	)
}

export default AsideBurgerWindow