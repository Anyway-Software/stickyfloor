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

export function EventDetailsCard() {
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
                        <Input
                            id="name"
                            type="text"
                            className="w-full"
                            defaultValue="Music Concert"
                        />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="description">Event Description</Label>
                        <Textarea
                            id="description"
                            defaultValue="Join us for an evening of amazing music and entertainment."
                            className="min-h-32"
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
