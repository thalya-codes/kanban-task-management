import { Route, Routes } from 'react-router-dom';
import { PublicLayout } from '@/layouts/PublicLayout';
import { RegisterPage, LoginPage } from '@/pages';

export function Router() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
