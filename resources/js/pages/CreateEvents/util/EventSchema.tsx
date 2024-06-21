import { z } from "zod";

export const eventSchema = z.object({
    eventName: z.string().nonempty("Event name is required"),
    eventDate: z.date().optional(),
    venueName: z.string().nonempty("Venue name is required"),
    eventDescription: z.string().optional(),
    tickets: z
        .array(
            z.object({
                type: z.string(),
                price: z.number().nonnegative(),
                availability: z.number().int().nonnegative(),
            }),
        )
        .min(1, "At least one ticket type is required"),
});

export type EventSchema = z.infer<typeof eventSchema>;
