import { Cart, Home, ProductCardInfo } from '../pages';
import { ProductByCategories } from '../pages/ProductByCategories.tsx';
import { Find } from '../pages/Find.tsx';
import { UserOrder } from '../pages/UserOrder.tsx';
import { BASE_URL } from '@constans';

export const publicRoutes = [
	{ path: `${BASE_URL}`, element: <Home /> },
	{ path: `${BASE_URL}product/:id`, element: <ProductCardInfo /> },
	{ path: `${BASE_URL}cart`, element: <Cart /> },
	{ path: `${BASE_URL}categories/:id`, element: <ProductByCategories /> },
	{ path: `${BASE_URL}find`, element: <Find /> },
	{ path: `${BASE_URL}order`, element: <UserOrder /> },
];
