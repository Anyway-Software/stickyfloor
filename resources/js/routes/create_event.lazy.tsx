import { CreateEvent } from "@/pages/CreateEvents";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/create_event")({
    component: () => <CreateEvent />,
});
