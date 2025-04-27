import { NavShell } from '@/components/shared/NavBar'
import { ListEvents } from '@/pages/events/ListEvents'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/events')({
    component: () => (
        <NavShell>
            <ListEvents />
        </NavShell>
    ),
})
