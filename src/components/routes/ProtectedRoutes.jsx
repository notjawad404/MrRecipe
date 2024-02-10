
import { Navigate } from 'react-router-dom';
import Favourites from '../Favourites';

export default function ProtectedRoutes() {
  const token = localStorage.getItem('token');
  return token ? <Favourites /> : <Navigate to="/login" />;
}
