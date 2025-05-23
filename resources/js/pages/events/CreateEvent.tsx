import { useState } from 'react'
import { EventDetailsCard } from './components/EventDetailsCard'
import { TicketDetailsCard } from './components/TicketDetailsCard'
import { CardHeader, CardTitle } from '@/components/ui/card'

export function CreateEvent() {
    const [currentStep, setCurrentStep] = useState(0)
    const [eventId, setEventId] = useState<string | null>(null)
    const [eventDetailsSaved, setEventDetailsSaved] = useState(false)

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1)
    }

    const handlePrev = () => {
        setCurrentStep((prevStep) => prevStep - 1)
    }

    const handleEventSaved = () => {
        setEventDetailsSaved(true)
    }

    return (
        <div className="flex min-h-screen w-full flex-col">
            <header
                className="sticky top-0 flex items-center gap-4 border-b bg-background px-8"
                style={{ height: '57px', zIndex: 2 }}
            >
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Create Event</CardTitle>
                    </div>
                </CardHeader>
            </header>
            <main className="gap-4 p-4 md:gap-8 md:p-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-4">
                            {!eventDetailsSaved && (
                                <EventDetailsCard
                                    onNext={handleNext}
                                    setEventId={setEventId}
                                    onEventSaved={handleEventSaved}
                                    disabled={!eventDetailsSaved}
                                    editingExistingEvent={false}
                                    eventId={null}
                                />
                            )}
                        </div>
                        <div
                            className={`space-y-4 ${!eventDetailsSaved ? 'opacity-50 pointer-events-none' : ''}`}
                        >
                            {eventDetailsSaved && (
                                <TicketDetailsCard
                                    onNext={handleNext}
                                    onPrev={handlePrev}
                                    currentStep={currentStep}
                                    eventId={eventId}
                                    disabled={!eventDetailsSaved}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
