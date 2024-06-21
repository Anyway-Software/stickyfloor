import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import { ArchiveEventCard } from "./components/ArchiveEventCard";
import { EventDetailsCard } from "./components/EventDetailsCard";
import { TicketDetailsCard } from "./components/TicketDetailsCard";
import { EventSchema, eventSchema } from "./util/EventSchema";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CreateEvent() {
    const { control, handleSubmit } = useForm<EventSchema>({
        resolver: zodResolver(eventSchema),
        defaultValues: {
            eventName: "",
            eventDate: undefined,
            venueName: "",
            eventDescription: "",
            tickets: [
                { type: "VIP", price: 150, availability: 50 },
                { type: "General", price: 50, availability: 200 },
            ],
        },
    });

    const onSubmit = (data: EventSchema) => {
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex min-h-screen w-full flex-col bg-muted/40"
        >
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                        <div className="flex items-center gap-4">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-7 w-7"
                            >
                                <ChevronLeft className="h-4 w-4" />
                                <span className="sr-only">Back</span>
                            </Button>
                            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                                Create Event
                            </h1>
                            <Badge className="ml-auto sm:ml-0">Active</Badge>
                            <div className="hidden items-center gap-2 md:ml-auto md:flex">
                                <Button variant="outline" size="sm">
                                    Discard
                                </Button>
                                <Button size="sm" type="submit">
                                    Save Event
                                </Button>
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                                <EventDetailsCard control={control} />
                                <TicketDetailsCard control={control} />
                                {/* <EventCategoryCard /> */}
                            </div>
                            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                                {/* <EventStatusCard /> */}
                                {/* <EventImagesCard /> */}
                                <ArchiveEventCard />
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-2 md:hidden">
                            <Button variant="outline" size="sm">
                                Discard
                            </Button>
                            <Button size="sm" type="submit">
                                Save Event
                            </Button>
                        </div>
                    </div>
                </main>
            </div>
        </form>
    );
}
