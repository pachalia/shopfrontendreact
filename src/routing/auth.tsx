import { Login, Register } from '../pages';
import { BASE_URL } from '@constans';
export const authRoutes = [
	{ path: `${BASE_URL}login`, element: <Login /> },
	{ path: `${BASE_URL}register`, element: <Register /> },
];
