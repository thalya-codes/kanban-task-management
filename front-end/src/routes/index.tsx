import { Route, Routes } from 'react-router-dom';
import { PublicLayout } from '@/layouts/PublicLayout';
import { RegisterPage } from '@/pages/RegisterPage';

export function Router() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}
