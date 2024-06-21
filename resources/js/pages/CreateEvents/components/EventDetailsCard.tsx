import React from "react";
import { Control, Controller } from "react-hook-form";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "./DatePicker";
import { EventSchema } from "../util/EventSchema";

interface EventDetailsCardProps {
    control: Control<EventSchema>;
}

export function EventDetailsCard({ control }: EventDetailsCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Event Details</CardTitle>
                <CardDescription>
                    Provide the necessary details for the event.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6">
                    <div className="grid gap-3">
                        <Label htmlFor="name">Event Name</Label>
                        <Controller
                            name="eventName"
                            control={control}
                            render={({ field }) => (
                                <Input id="name" {...field} />
                            )}
                        />
                    </div>

                    <div className="grid gap-3">
                        <Label htmlFor="date">Event Date</Label>
                        <Controller
                            name="eventDate"
                            control={control}
                            render={({ field }) => <DatePicker {...field} />}
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="venue">Venue Name</Label>
                        <Controller
                            name="venueName"
                            control={control}
                            render={({ field }) => (
                                <Input id="venue" {...field} />
                            )}
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="description">Event Description</Label>
                        <Controller
                            name="eventDescription"
                            control={control}
                            render={({ field }) => (
                                <Textarea id="description" {...field} />
                            )}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
