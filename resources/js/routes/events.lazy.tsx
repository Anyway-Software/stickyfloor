import { NavShell } from '@/components/shared/NavBar'
import { Events } from '@/pages/events'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/events')({
    component: () => (
        <NavShell>
            <Events />
        </NavShell>
    ),
})
