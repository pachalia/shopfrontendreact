import { Admin, AdminCategory, Users } from '../pages';
import { BASE_URL } from '@constans';

export const adminRoutes = [
	{
		path: `${BASE_URL}admin`,
		element: <Admin />,
	},
	{
		path: `${BASE_URL}admin/user`,
		element: <Users />,
	},
	{
		path: `${BASE_URL}admin/category`,
		element: <AdminCategory />,
	},
];
