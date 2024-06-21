import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export function TicketDetailsCard() {
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
                        <TableRow>
                            <TableCell className="font-semibold">VIP</TableCell>
                            <TableCell>
                                <Label htmlFor="price-1" className="sr-only">
                                    Price
                                </Label>
                                <Input
                                    id="price-1"
                                    type="number"
                                    defaultValue="150"
                                />
                            </TableCell>
                            <TableCell>
                                <Label
                                    htmlFor="availability-1"
                                    className="sr-only"
                                >
                                    Availability
                                </Label>
                                <Input
                                    id="availability-1"
                                    type="number"
                                    defaultValue="50"
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-semibold">
                                General
                            </TableCell>
                            <TableCell>
                                <Label htmlFor="price-2" className="sr-only">
                                    Price
                                </Label>
                                <Input
                                    id="price-2"
                                    type="number"
                                    defaultValue="50"
                                />
                            </TableCell>
                            <TableCell>
                                <Label
                                    htmlFor="availability-2"
                                    className="sr-only"
                                >
                                    Availability
                                </Label>
                                <Input
                                    id="availability-2"
                                    type="number"
                                    defaultValue="200"
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter className="justify-center border-t p-4">
                <Button size="sm" variant="ghost" className="gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    Add Ticket Type
                </Button>
            </CardFooter>
        </Card>
    );
}
