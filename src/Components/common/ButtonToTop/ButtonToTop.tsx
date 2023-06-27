import { useEffect, useState } from 'react';
import styles from './_ButtonToTop.module.scss'

/* функция показывает кнопку если высота больше 450, при нажатии пролистывает на верх */
function ButtonToTop() {
	const [isHeightMore, setIsHeightMore] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 450) {
				setIsHeightMore(true)
			} else {
				setIsHeightMore(false)
			}

		})
	}, [])

	return (
		<>
			{isHeightMore && <button className={styles.btnToTopMain} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
				<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18V2m0 0l7 7m-7-7L3 9" />
				</svg>
			</button>
			}
		</>
	)
}

export default ButtonToTop