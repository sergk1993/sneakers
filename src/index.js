import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Root from './Components/Root/Root';

import store from './store/store';
import { Provider } from 'react-redux';
import Cart from './Components/Cart/Cart';
import Favorites from './Components/Favorites/Favorites';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <App />,
            },
            {
                path: 'cart',
                element: <Cart />,
            },
            {
                path: 'favorite',
                element: <Favorites />,
            },
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

