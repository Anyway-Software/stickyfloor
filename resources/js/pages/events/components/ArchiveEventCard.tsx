import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function ArchiveEventCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Archive Event</CardTitle>
                <CardDescription>
                    Archive this event if it is no longer active.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div></div>
                <Button size="sm" variant="secondary">
                    Archive Event
                </Button>
            </CardContent>
        </Card>
    )
}
