import { useLocation } from 'react-router-dom'
import { useEffect } from "react";

/* функция перелистывает страницу на верх если переключаешься на другую страницу */
function ScrollPageToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [pathname])
	return null;
}

export default ScrollPageToTop