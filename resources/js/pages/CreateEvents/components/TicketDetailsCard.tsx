import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import getAuthToken from "@/lib/getAuthToken";
import { Loader2, PlusCircle } from "lucide-react";

interface TicketDetailsCardProps {
    onNext: () => void;
    onPrev: () => void;
    currentStep: number;
    eventId: string | null;
}

const ticketDetailsSchema = z.object({
    tickets: z.array(
        z.object({
            id: z.string().optional(),
            name: z.string().nonempty("Name is required"),
            tickets_allocated: z
                .number()
                .min(0, "Tickets allocated must be at least 0"),
            price: z.number().min(0, "Price must be at least 0"),
        }),
    ),
});

type TicketDetailsFormValues = z.infer<typeof ticketDetailsSchema>;

export function TicketDetailsCard({
    onNext,
    onPrev,
    currentStep,
    eventId,
}: TicketDetailsCardProps) {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<TicketDetailsFormValues>({
        resolver: zodResolver(ticketDetailsSchema),
        defaultValues: {
            tickets: [
                {
                    name: "VIP",
                    tickets_allocated: 50,
                    price: 150,
                },
                {
                    name: "General",
                    tickets_allocated: 200,
                    price: 50,
                },
            ],
        },
    });

    const { fields, append } = useFieldArray({
        control,
        name: "tickets",
    });

    const mutation = useMutation({
        mutationFn: async (data: TicketDetailsFormValues) => {
            if (!eventId) {
                throw new Error("Event ID is not available");
            }

            const response = await axios.put(
                `/api/events/${eventId}/ticket-categories`,
                {
                    categories: data.tickets.map((ticket) => ({
                        ...ticket,
                    })),
                },
                {
                    headers: {
                        Authorization: `Bearer ${getAuthToken()}`,
                    },
                },
            );
            return response.data;
        },
        onSuccess: () => {
            toast({
                variant: "default",
                title: "Tickets Created",
                description: "Your tickets have been successfully created.",
            });
            onNext();
        },
        onError: () => {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
            });
        },
    });

    const onSubmit = (data: TicketDetailsFormValues) => {
        mutation.mutate(data);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Ticket Details</CardTitle>
                <CardDescription>Specify the ticket details.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Tickets Allocated</TableHead>
                                <TableHead>Price</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {fields.map((field, index) => (
                                <TableRow key={field.id}>
                                    <TableCell className="font-semibold">
                                        <Input
                                            {...register(
                                                `tickets.${index}.name` as const,
                                            )}
                                        />
                                        {errors.tickets?.[index]?.name && (
                                            <p className="text-red-500">
                                                {
                                                    errors.tickets?.[index]
                                                        ?.name?.message
                                                }
                                            </p>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <Input
                                            type="number"
                                            {...register(
                                                `tickets.${index}.tickets_allocated` as const,
                                            )}
                                        />
                                        {errors.tickets?.[index]
                                            ?.tickets_allocated && (
                                            <p className="text-red-500">
                                                {
                                                    errors.tickets?.[index]
                                                        ?.tickets_allocated
                                                        ?.message
                                                }
                                            </p>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <Input
                                            type="number"
                                            {...register(
                                                `tickets.${index}.price` as const,
                                            )}
                                        />
                                        {errors.tickets?.[index]?.price && (
                                            <p className="text-red-500">
                                                {
                                                    errors.tickets?.[index]
                                                        ?.price?.message
                                                }
                                            </p>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button
                        size="sm"
                        variant="ghost"
                        className="gap-1"
                        onClick={() =>
                            append({
                                name: "",
                                tickets_allocated: 0,
                                price: 0,
                            })
                        }
                    >
                        <PlusCircle className="h-3.5 w-3.5" />
                        Add Category
                    </Button>
                </CardFooter>

                <CardFooter className="flex justify-between p-4 border-t">
                    {/* <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={onPrev}
                        disabled={currentStep === 0}
                    >
                        Back
                    </Button> */}
                    <div></div>
                    <Button
                        type="submit"
                        size="sm"
                        disabled={mutation.isPending}
                    >
                        {mutation.isPending ? (
                            <Loader2 className="animate-spin" />
                        ) : (
                            "Next"
                        )}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}
