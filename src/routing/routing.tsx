import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFound } from '../pages';
import { useAppSelector } from '@redux';
import { GeneralLayout } from '@components';
import {
	adminRoutes,
	authRoutes,
	managerRoutes,
	ProtectedRoute,
	publicRoutes,
} from '@routing';
import { Address } from '../pages/Address.tsx';
import { BASE_URL } from '@constans';

export const Routing = () => {
	const user = useAppSelector((state) => state.user.current_user);
	return (
		<Routes>
			<Route element={<GeneralLayout />}>
				{publicRoutes.map(({ path, element }, index) => (
					<Route path={path} element={element} key={index} />
				))}
				<Route
					path={'address'}
					element={user ? <Address /> : <Navigate to={`${BASE_URL}/`} />}
				/>

				{authRoutes.map(({ path, element }, index) => (
					<Route
						key={index}
						path={path}
						element={
							user?.role === 'ADMIN' ? (
								<Navigate to={`${BASE_URL}admin`} />
							) : user?.role === 'MANAGER' ? (
								<Navigate to={`${BASE_URL}manager`} />
							) : user?.role === 'CUSTOMER' ? (
								<Navigate to={`${BASE_URL}/`} />
							) : (
								element
							)
						}
					/>
				))}
				{adminRoutes.map(({ path, element }, index) => (
					<Route
						key={index}
						path={path}
						element={
							<ProtectedRoute
								element={element}
								condition={user?.role === 'ADMIN'}
							/>
						}
					/>
				))}
				{managerRoutes.map(({ path, element }, index) => (
					<Route
						key={index}
						path={path}
						element={
							<ProtectedRoute
								element={element}
								condition={user?.role === 'MANAGER'}
							/>
						}
					/>
				))}
				<Route path={`${BASE_URL}404`} element={<NotFound />} />
				<Route path={`${BASE_URL}*`} element={<Navigate to={'404'} />} />
			</Route>
		</Routes>
	);
};
