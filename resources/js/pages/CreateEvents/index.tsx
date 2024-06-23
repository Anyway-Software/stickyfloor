import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EventDetailsCard } from "./components/EventDetailsCard";
import { TicketDetailsCard } from "./components/TicketDetailsCard";
import { EventCategoryCard } from "./components/EventCategoryCard";
import { EventImagesCard } from "./components/EventImagesCard";
import { EventStatusCard } from "./components/EventStatusCard";

export function CreateEvent() {
    const [currentStep, setCurrentStep] = useState(0);
    const [eventId, setEventId] = useState<string | null>(null);
    const [eventDetailsSaved, setEventDetailsSaved] = useState(false);

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleEventSaved = () => {
        setEventDetailsSaved(true);
    };

    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                    <EventDetailsCard
                        onNext={handleNext}
                        setEventId={setEventId}
                        onEventSaved={handleEventSaved}
                        disabled={!eventDetailsSaved}
                    />
                    {/* <EventCategoryCard /> */}
                </div>
                <div
                    className={`space-y-4 ${!eventDetailsSaved ? "opacity-50 pointer-events-none" : ""}`}
                >
                    {/* <EventStatusCard /> */}
                    <TicketDetailsCard
                        onNext={handleNext}
                        onPrev={handlePrev}
                        currentStep={currentStep}
                        eventId={eventId}
                        disabled={!eventDetailsSaved}
                    />
                    {/* <EventImagesCard /> */}
                </div>
            </div>
        </div>
    );
}
