import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { Loading } from '@/components/ui/loading'
import { Progress } from '@/components/ui/progress'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Link, useNavigate } from '@tanstack/react-router'
import {
    Activity,
    ArrowUpRight,
    CircleUser,
    CreditCard,
    DollarSign,
    Menu,
    Package2,
    Users,
} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { api } from '../../api'

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
}

export function Dashboard() {
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
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    {userName && (
                        <CardHeader className="flex flex-row items-center">
                            <div className="grid gap-2">
                                <CardTitle>{userName}'s Dashboard</CardTitle>
                            </div>
                        </CardHeader>
                    )}
                </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    <Card
                        className="xl:col-span-2"
                        x-chunk="dashboard-01-chunk-4"
                    >
                        <CardHeader className="flex flex-row items-center">
                            <div className="grid gap-2">
                                <CardTitle>Event Overview</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Event</TableHead>
                                        <TableHead>Total Tickets</TableHead>
                                        <TableHead>Total Revenue</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {events.map((event) => {
                                        // Calculate total tickets sold and allocated
                                        const totalTicketsSold =
                                            event.ticket_category.reduce(
                                                (acc, ticketCategory) =>
                                                    acc +
                                                    ticketCategory.tickets_sold,
                                                0,
                                            )
                                        const totalTicketsAllocated =
                                            event.ticket_category.reduce(
                                                (acc, ticketCategory) =>
                                                    acc +
                                                    ticketCategory.tickets_allocated,
                                                0,
                                            )

                                        // Calculate total revenue
                                        const totalRevenue =
                                            event.ticket_category.reduce(
                                                (acc, ticketCategory) =>
                                                    acc +
                                                    ticketCategory.tickets_sold *
                                                        ticketCategory.price,
                                                0,
                                            )
                                        const totalPotentialRevenue =
                                            event.ticket_category.reduce(
                                                (acc, ticketCategory) =>
                                                    acc +
                                                    ticketCategory.tickets_allocated *
                                                        ticketCategory.price,
                                                0,
                                            )

                                        // Calculate progress percentage
                                        const progressPercentage =
                                            (totalTicketsSold /
                                                totalTicketsAllocated) *
                                            100

                                        return (
                                            <React.Fragment key={event.id}>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="text-lg font-medium">
                                                            {event.name}
                                                        </div>
                                                        <div className="text-sm font-medium">
                                                            {event.venue_name}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <strong>
                                                            Tickets Sold:
                                                        </strong>{' '}
                                                        {totalTicketsSold} /{' '}
                                                        {totalTicketsAllocated}
                                                        <Progress
                                                            value={
                                                                progressPercentage
                                                            }
                                                            colorScheme="green"
                                                            size="sm"
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <div>
                                                            <strong>
                                                                Total Revenue:
                                                            </strong>{' '}
                                                            ${totalRevenue} / $
                                                            {
                                                                totalPotentialRevenue
                                                            }
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            </React.Fragment>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    <Card x-chunk="dashboard-01-chunk-5">
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-8">
                            <div className="flex items-center gap-4">
                                <Avatar className="hidden h-9 w-9 sm:flex">
                                    <AvatarImage
                                        src="/avatars/01.png"
                                        alt="Avatar"
                                    />
                                    <AvatarFallback>OM</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium leading-none">
                                        Olivia Martin
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        olivia.martin@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">
                                    +$1,999.00
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Avatar className="hidden h-9 w-9 sm:flex">
                                    <AvatarImage
                                        src="/avatars/02.png"
                                        alt="Avatar"
                                    />
                                    <AvatarFallback>JL</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium leading-none">
                                        Jackson Lee
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        jackson.lee@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">
                                    +$39.00
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Avatar className="hidden h-9 w-9 sm:flex">
                                    <AvatarImage
                                        src="/avatars/03.png"
                                        alt="Avatar"
                                    />
                                    <AvatarFallback>IN</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium leading-none">
                                        Isabella Nguyen
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        isabella.nguyen@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">
                                    +$299.00
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Avatar className="hidden h-9 w-9 sm:flex">
                                    <AvatarImage
                                        src="/avatars/04.png"
                                        alt="Avatar"
                                    />
                                    <AvatarFallback>WK</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium leading-none">
                                        William Kim
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        will@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">
                                    +$99.00
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Avatar className="hidden h-9 w-9 sm:flex">
                                    <AvatarImage
                                        src="/avatars/05.png"
                                        alt="Avatar"
                                    />
                                    <AvatarFallback>SD</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium leading-none">
                                        Sofia Davis
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        sofia.davis@email.com
                                    </p>
                                </div>
                                <div className="ml-auto font-medium">
                                    +$39.00
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
