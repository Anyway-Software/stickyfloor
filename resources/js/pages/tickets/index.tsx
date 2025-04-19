import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { Loading } from '@/components/ui/loading'

import { useNavigate } from '@tanstack/react-router'

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

export function Tickets() {
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
                            <CardTitle>Tickets</CardTitle>
                        </div>
                    </CardHeader>
                </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="grid gap-4 grid-cols-3">
                    <Card className="col-span-3" x-chunk="dashboard-01-chunk-4">
                        <CardContent>
                            This is where you can lookup and process tickets.
                            Features will be something like:
                            <ul>
                                <li>
                                    Search tickets by scanning ticketholders QR
                                    code
                                </li>
                                <li>Search ticket holders by name</li>
                                <li>
                                    Viewing all ticket holders (printable
                                    format)
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
