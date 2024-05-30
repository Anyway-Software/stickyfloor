import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = [
    {
        path: '/',
        element: <div> Hello Laravel 11 from React 18</div>,
    },
    {
        path: '/boop',
        element: <div> Boop front end route</div>,
    }
];

createRoot(document.getElementById('root')).render(
    <RouterProvider
        router={createBrowserRouter(routes)}
    />
)
