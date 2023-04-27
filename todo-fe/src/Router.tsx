import { Route, Routes } from 'react-router-dom';
import { TodosPage } from './TodosPage';

export const Router = () => {
  return (
    <Routes>
      <Route index element={<TodosPage />}></Route>
    </Routes>
  );
};
