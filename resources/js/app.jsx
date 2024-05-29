import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = [
    {
        path: '/',
        element: <div> Hello Laravel 11 from React18</div>,
    }
];

createRoot(document.getElementById('root')).render(
    <RouterProvider
        router={createBrowserRouter(routes)}
    />
)