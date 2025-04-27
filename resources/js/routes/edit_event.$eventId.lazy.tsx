import { createLazyFileRoute } from '@tanstack/react-router'
import { NavShell } from '@/components/shared/NavBar'
import { EditEvent } from '@/pages/events/EditEvent'

export const Route = createLazyFileRoute('/edit_event/$eventId')({
    component: () => (
        <NavShell>
            <EditEvent />
        </NavShell>
    ),
})
