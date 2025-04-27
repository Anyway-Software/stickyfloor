/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useParams } from '@tanstack/react-router'
import { EventDetailsCard } from './components/EventDetailsCard'
import { TicketDetailsCard } from './components/TicketDetailsCard'
import { CardHeader, CardTitle } from '@/components/ui/card'
import axios from 'axios'
import getAuthToken from '@/lib/getAuthToken'

export function EditEvent() {
    const params = useParams({ from: '/edit_event/$eventId' })
    const { eventId } = params
    const [currentStep, setCurrentStep] = useState(0)
    const [eventDetailsSaved, setEventDetailsSaved] = useState(false)
    const [initialEventData, setInitialEventData] = useState<any>(null)
    const [initialTicketData, setInitialTicketData] = useState<any>(null)
    const [isPublished, setIsPublished] = useState(false)

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1)
    }

    const handlePrev = () => {
        setCurrentStep((prevStep) => prevStep - 1)
    }

    const handleEventSaved = () => {
        setEventDetailsSaved(true)
    }

    useEffect(() => {
        async function fetchEvent() {
            if (!eventId) return

            const { data: event } = await axios.get(`/api/events/${eventId}`, {
                headers: {
                    Authorization: `Bearer ${getAuthToken()}`,
                },
            })

            setInitialEventData({
                eventName: event.name,
                eventDate: new Date(event.start),
                venueName: event.venue_name,
                eventDescription: event.description,
                venueAddress: event.venue_address,
            })

            setInitialTicketData({
                tickets: event.ticket_category.map((ticket: any) => ({
                    id: ticket.id,
                    name: ticket.name,
                    tickets_allocated: ticket.tickets_allocated,
                    price: ticket.price,
                })),
            })

            setIsPublished(event.is_published)
            setEventDetailsSaved(true) // Assume if loading an existing event, details are already saved
        }

        fetchEvent()
    }, [eventId])

    if (!initialEventData || !initialTicketData) {
        return <div>Loading...</div> // Or a nice spinner if you want
    }

    return (
        <div className="flex min-h-screen w-full flex-col">
            <header
                className="sticky top-0 flex items-center gap-4 border-b bg-background px-8"
                style={{ height: '57px', zIndex: 2 }}
            >
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Edit Event</CardTitle>
                    </div>
                </CardHeader>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <EventDetailsCard
                                onNext={handleNext}
                                setEventId={() => {}} // We don't need to setEventId again, we already have it
                                onEventSaved={handleEventSaved}
                                disabled={!eventDetailsSaved || isPublished}
                                eventId={eventId || null}
                                initialData={initialEventData}
                                editingExistingEvent={true}
                            />
                            {/* <EventCategoryCard /> */}
                        </div>
                        <div
                            className={`space-y-4 ${!eventDetailsSaved ? 'opacity-50 pointer-events-none' : ''}`}
                        >
                            {/* <EventStatusCard /> */}
                            <TicketDetailsCard
                                onNext={handleNext}
                                onPrev={handlePrev}
                                currentStep={currentStep}
                                eventId={eventId || null}
                                disabled={!eventDetailsSaved || isPublished}
                                initialData={initialTicketData}
                                editingExistingEvent={true}
                            />
                            {/* <EventImagesCard /> */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
