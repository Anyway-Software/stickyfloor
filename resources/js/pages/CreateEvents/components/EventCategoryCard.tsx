import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { PlusCircle } from 'lucide-react'

export function EventCategoryCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Event Category</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6 sm:grid-cols-3">
                    <div className="grid gap-3">
                        <Label htmlFor="category">Category</Label>
                        <Select>
                            <SelectTrigger
                                id="category"
                                aria-label="Select category"
                            >
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="music">Music</SelectItem>
                                <SelectItem value="sports">Sports</SelectItem>
                                <SelectItem value="conference">
                                    Conference
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="subcategory">
                            Subcategory (optional)
                        </Label>
                        <Select>
                            <SelectTrigger
                                id="subcategory"
                                aria-label="Select subcategory"
                            >
                                <SelectValue placeholder="Select subcategory" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="rock">Rock</SelectItem>
                                <SelectItem value="pop">Pop</SelectItem>
                                <SelectItem value="classical">
                                    Classical
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-4 border-t">
                <Button size="sm" className="w-full" type="submit">
                    Save
                </Button>
            </CardFooter>
        </Card>
    )
}
