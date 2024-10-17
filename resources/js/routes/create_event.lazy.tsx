import { NavShell } from "@/components/shared/NavBar";
import { CreateEvent } from "@/pages/CreateEvents";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/create_event")({
    component: () => (
        <NavShell>
            <CreateEvent />
        </NavShell>
    ),
});
