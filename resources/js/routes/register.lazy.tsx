import { Register } from "@/pages/register";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/register")({
    component: () => <Register />,
});
