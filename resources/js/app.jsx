import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Button } from "@/components/ui/button";

const routes = [
    {
        path: "/",
        element: <div> Hello Laravel 11 from React 18</div>,
    },
    {
        path: "/boop",
        element: (
            <div>
                <Button>Click me</Button>
            </div>
        ),
    },
];

createRoot(document.getElementById("root")).render(
    <RouterProvider router={createBrowserRouter(routes)} />
);
