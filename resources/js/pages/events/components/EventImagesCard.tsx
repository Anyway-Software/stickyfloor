import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Upload } from 'lucide-react'

export function EventImagesCard() {
    return (
        <Card className="overflow-hidden">
            <CardHeader>
                <CardTitle>Event Images</CardTitle>
                <CardDescription>
                    Upload images related to the event.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    <img
                        alt="Event image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="300"
                        src="https://placehold.co/600x400"
                        width="300"
                    />
                    <div className="grid grid-cols-3 gap-2">
                        <button>
                            <img
                                alt="Event image"
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src="https://placehold.co/600x400"
                                width="84"
                            />
                        </button>
                        <button>
                            <img
                                alt="Event image"
                                className="aspect-square w-full rounded-md object-cover"
                                height="84"
                                src="https://placehold.co/600x400"
                                width="84"
                            />
                        </button>
                        <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                            <Upload className="h-4 w-4 text-muted-foreground" />
                            <span className="sr-only">Upload</span>
                        </button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
