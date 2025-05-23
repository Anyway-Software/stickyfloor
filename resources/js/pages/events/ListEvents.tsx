import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { Loading } from '@/components/ui/loading'
import { Progress } from '@/components/ui/progress'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { useNavigate } from '@tanstack/react-router'

import React, { useEffect, useState } from 'react'
import { api } from '../../api'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'

type TicketCategory = {
    id: string
    event_id: string
    name: string
    description: string
    tickets_allocated: number
    tickets_sold: number
    price: number
    start_time: string
    end_time: string
    area_name: string
    created_at: string
    updated_at: string
}

type Event = {
    id: string
    name: string
    venue_name: string
    description: string
    ticket_category: TicketCategory[]
    updated_at: string
    created_at: string
}

export function ListEvents() {
    const [userName, setUserName] = useState('')
    const [events, setEvents] = useState<Event[]>([])
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

    const navigate = useNavigate()

    useEffect(() => {
        api.get('/auth/user')
            .then((response) => {
                setUserName(response.data.name)
            })
            .catch((error) => {
                console.error('Error fetching user data:', error)
            })

        api.get('/events')
            .then((response) => {
                setEvents(response.data)
                if (response.data.length > 0) {
                    setSelectedEvent(response.data[0])
                }
            })
            .catch((error) => {
                console.error('Error fetching events:', error)
            })
    }, [navigate])

    if (!userName) {
        return <Loading />
    }

    return (
        <div className="flex min-h-screen w-full flex-col">
            <header
                className="sticky top-0 flex items-center gap-4 border-b bg-background px-8"
                style={{ height: '57px', zIndex: 2 }}
            >
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <CardHeader className="flex flex-row items-center">
                        <div className="grid gap-2">
                            <CardTitle>Events</CardTitle>
                        </div>
                    </CardHeader>
                </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="grid gap-4 grid-cols-3">
                    <Card className="col-span-3" x-chunk="dashboard-01-chunk-4">
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Event</TableHead>
                                        <TableHead>Ticket Categories</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {events
                                        .sort(
                                            (a, b) =>
                                                new Date(
                                                    a.updated_at,
                                                ).getTime() -
                                                new Date(
                                                    b.updated_at,
                                                ).getTime(),
                                        )
                                        .map((event) => {
                                            const totalRevenue =
                                                event.ticket_category.reduce(
                                                    (acc, ticketCategory) =>
                                                        acc +
                                                        ticketCategory.tickets_sold *
                                                            ticketCategory.price,
                                                    0,
                                                )

                                            return (
                                                <React.Fragment key={event.id}>
                                                    <TableRow>
                                                        <TableCell>
                                                            <div className="text-lg font-medium">
                                                                {event.name}
                                                            </div>
                                                            <br></br>
                                                            <div className="text-sm font-medium">
                                                                {
                                                                    event.venue_name
                                                                }
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            {event.ticket_category.map(
                                                                (
                                                                    ticketCategory,
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            ticketCategory.id
                                                                        }
                                                                        className="mb-4"
                                                                    >
                                                                        <strong>
                                                                            {
                                                                                ticketCategory.name
                                                                            }
                                                                            :
                                                                        </strong>
                                                                        <br />
                                                                        <strong>
                                                                            Tickets
                                                                            Sold:
                                                                        </strong>{' '}
                                                                        {
                                                                            ticketCategory.tickets_sold
                                                                        }{' '}
                                                                        /{' '}
                                                                        {
                                                                            ticketCategory.tickets_allocated
                                                                        }
                                                                        <Progress
                                                                            value={
                                                                                (ticketCategory.tickets_sold /
                                                                                    ticketCategory.tickets_allocated) *
                                                                                100
                                                                            }
                                                                            colorScheme="green"
                                                                            size="sm"
                                                                        />
                                                                        <div
                                                                            key={
                                                                                ticketCategory.id
                                                                            }
                                                                            className="mb-4"
                                                                        >
                                                                            $
                                                                            {ticketCategory.tickets_sold *
                                                                                ticketCategory.price}{' '}
                                                                            / $
                                                                            {ticketCategory.tickets_allocated *
                                                                                ticketCategory.price}
                                                                        </div>
                                                                    </div>
                                                                ),
                                                            )}
                                                        </TableCell>
                                                        <TableCell>
                                                            {event
                                                                .ticket_category
                                                                .length > 0
                                                                ? 'Ready'
                                                                : 'Draft'}
                                                        </TableCell>
                                                        <TableCell>
                                                            <DropdownMenu>
                                                                <DropdownMenuTrigger>
                                                                    <Button variant="outline">
                                                                        ...
                                                                    </Button>
                                                                </DropdownMenuTrigger>
                                                                <DropdownMenuContent>
                                                                    <DropdownMenuItem
                                                                        onClick={() =>
                                                                            navigate(
                                                                                {
                                                                                    to: `/edit_event/${event.id}`,
                                                                                },
                                                                            )
                                                                        }
                                                                    >
                                                                        Edit
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem
                                                                        onClick={() =>
                                                                            api
                                                                                .delete(
                                                                                    `/events/${event.id}`,
                                                                                )
                                                                                .then(
                                                                                    () => {
                                                                                        setEvents(
                                                                                            (
                                                                                                prevEvents,
                                                                                            ) =>
                                                                                                prevEvents.filter(
                                                                                                    (
                                                                                                        e,
                                                                                                    ) =>
                                                                                                        e.id !==
                                                                                                        event.id,
                                                                                                ),
                                                                                        )
                                                                                        toast(
                                                                                            {
                                                                                                variant:
                                                                                                    'default',
                                                                                                duration: 3000,
                                                                                                title: 'Event deleted',
                                                                                                description: `The event has been successfully deleted.`,
                                                                                            },
                                                                                        )
                                                                                        navigate(
                                                                                            {
                                                                                                to: '/events',
                                                                                            },
                                                                                        )
                                                                                    },
                                                                                    (
                                                                                        error,
                                                                                    ) => {
                                                                                        console.error(
                                                                                            'Error deleting event:',
                                                                                            error,
                                                                                        )
                                                                                    },
                                                                                )
                                                                        }
                                                                    >
                                                                        Delete
                                                                    </DropdownMenuItem>
                                                                </DropdownMenuContent>
                                                            </DropdownMenu>
                                                        </TableCell>
                                                    </TableRow>
                                                </React.Fragment>
                                            )
                                        })}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
