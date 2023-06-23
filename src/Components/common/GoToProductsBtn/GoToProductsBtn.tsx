import { Link } from 'react-router-dom'
import styles from './GoToProductsBtn.module.scss';

function GoToProductsBtn() {
	return (
		<>
			<Link to='/' className={styles.GoToProductsBtn}>
				вернуться к покупкам
			</Link>
		</>
	)
}

export default GoToProductsBtn