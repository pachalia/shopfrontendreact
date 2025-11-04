import { Manager } from '../pages/Manager/manager.tsx';
import { AddProduct } from '@components';
import { Orders } from '../pages/Manager/Orders/orders.tsx';
import { OrderInfo } from '../pages/Manager/Orders/ordeInfo.tsx';
import { BASE_URL } from '@constans';

export const managerRoutes = [
	{
		path: `${BASE_URL}manager`,
		element: <Manager />,
	},
	{
		path: `${BASE_URL}manager/addproduct`,
		element: <AddProduct />,
	},
	{
		path: `${BASE_URL}manager/orders`,
		element: <Orders />,
	},
	{ path: `${BASE_URL}manager/payment/:id`, element: <OrderInfo /> },
];
