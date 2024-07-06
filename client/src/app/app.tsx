import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from '../features/layout';
import { AddPost } from '../pages/add-post';
import { EditPost } from '../pages/edit-post';
import { Login } from '../pages/login';
import { PostPage } from '../pages/post-page';
import { PostsPage } from '../pages/posts-page';
import { Register } from '../pages/register';
import { RootPage } from '../pages/root-page';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: '/posts',
    element: <PostsPage />,
  },
  {
    path: ':id',
    element: <PostPage />,
  },
  {
    path: ':id/edit',
    element: <EditPost />,
  },
  {
    path: '/new',
    element: <AddPost />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const App = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
