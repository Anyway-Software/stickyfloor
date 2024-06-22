import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EventDetailsCard } from "./components/EventDetailsCard";
import { TicketDetailsCard } from "./components/TicketDetailsCard";

export function CreateEvent() {
    const [currentStep, setCurrentStep] = useState(1);
    const [eventId, setEventId] = useState<string | null>(null);

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <div className="grid max-w-[50rem] flex-1 auto-rows-max gap-4">
                        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-1 lg:gap-8">
                            {currentStep === 0 && (
                                <div className="grid auto-rows-max items-start gap-4 lg:col-span-1 lg:gap-8">
                                    <EventDetailsCard
                                        onNext={handleNext}
                                        onPrev={handlePrev}
                                        currentStep={currentStep}
                                        setEventId={setEventId}
                                    />
                                </div>
                            )}
                            {currentStep === 1 && (
                                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                                    <TicketDetailsCard
                                        onNext={handleNext}
                                        onPrev={handlePrev}
                                        currentStep={currentStep}
                                        eventId={eventId}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
