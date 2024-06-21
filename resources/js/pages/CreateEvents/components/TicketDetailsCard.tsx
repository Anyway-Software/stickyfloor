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
import { PlusCircle } from "lucide-react";
import { Control, Controller, useFieldArray } from "react-hook-form";
import { EventSchema } from "../util/EventSchema";

interface TicketDetailsCardProps {
    control: Control<EventSchema>;
}

export function TicketDetailsCard({ control }: TicketDetailsCardProps) {
    const { fields, append } = useFieldArray({
        control,
        name: "tickets",
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle>Ticket Details</CardTitle>
                <CardDescription>
                    Specify the ticket types and prices.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Type</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Availability</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {fields.map((field, index) => (
                            <TableRow key={field.id}>
                                <TableCell className="font-semibold">
                                    <Controller
                                        name={`tickets.${index}.type`}
                                        control={control}
                                        render={({ field }) => (
                                            <Input {...field} />
                                        )}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Controller
                                        name={`tickets.${index}.price`}
                                        control={control}
                                        render={({ field }) => (
                                            <Input type="number" {...field} />
                                        )}
                                    />
                                </TableCell>
                                <TableCell>
                                    <Controller
                                        name={`tickets.${index}.availability`}
                                        control={control}
                                        render={({ field }) => (
                                            <Input type="number" {...field} />
                                        )}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter className="justify-center border-t p-4">
                <Button
                    size="sm"
                    variant="ghost"
                    className="gap-1"
                    onClick={() =>
                        append({ type: "", price: 0, availability: 0 })
                    }
                >
                    <PlusCircle className="h-3.5 w-3.5" />
                    Add Ticket Type
                </Button>
            </CardFooter>
        </Card>
    );
}
