import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { DatePicker } from './DatePicker'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from '@/components/ui/use-toast'
import getAuthToken from '@/lib/getAuthToken'
import { Loader2 } from 'lucide-react'

interface EventDetailsCardProps {
    onNext: () => void
    setEventId: (id: string) => void
    onEventSaved: () => void
    disabled: boolean
    initialData?: EventDetailsFormValues
    editingExistingEvent?: boolean
    eventId?: string | null
}

const eventDetailsSchema = z.object({
    eventName: z.string().min(1, 'Event Name is required'),
    eventDate: z
        .date()
        .refine((val) => !isNaN(val.getTime()), 'Event Date is required'),
    venueName: z.string().min(1, 'Venue Name is required'),
    eventDescription: z.string().optional(),
    venueAddress: z.string().optional(),
})

type EventDetailsFormValues = z.infer<typeof eventDetailsSchema>

export function EventDetailsCard({
    onNext,

    setEventId,
    onEventSaved,
    disabled,
    initialData,
    // isPublished,
    editingExistingEvent,
    eventId,
}: EventDetailsCardProps) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<EventDetailsFormValues>({
        resolver: zodResolver(eventDetailsSchema),
        defaultValues: initialData ?? {
            eventName: '',
            eventDate: new Date(),
            venueName: '',
            eventDescription: '',
            venueAddress: '',
        },
    })

    const mutation = useMutation({
        mutationFn: async (data: EventDetailsFormValues) => {
            const payload = {
                name: data.eventName,
                venue_name: data.venueName,
                description: data.eventDescription,
                venue_address: data.venueAddress,
                start: data.eventDate.toISOString(),
            }

            if (editingExistingEvent && eventId) {
                return axios.put(`/api/events/${eventId}`, payload, {
                    headers: {
                        Authorization: `Bearer ${getAuthToken()}`,
                    },
                })
            } else {
                return axios.post('/api/events', payload, {
                    headers: {
                        Authorization: `Bearer ${getAuthToken()}`,
                    },
                })
            }
        },
        onSuccess: (data) => {
            const event = data.data
            setEventId(event.id)
            onEventSaved()
            toast({
                variant: 'default',
                title: editingExistingEvent ? 'Event Updated' : 'Event Created',
                description: `Your event has been successfully ${editingExistingEvent ? 'updated' : 'created'}.`,
            })
            onNext()
        },
        onError: () => {
            toast({
                variant: 'destructive',
                title: 'Uh oh! Something went wrong.',
                description: 'There was a problem with your request.',
            })
        },
    })

    const onSubmit = (data: EventDetailsFormValues) => {
        mutation.mutate(data)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Event Details</CardTitle>
                <CardDescription>
                    Provide the necessary details for the event.
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent>
                    <div className="grid gap-6">
                        <div className="grid gap-3">
                            <Label htmlFor="name">
                                Event Name{' '}
                                <span className="text-red-500">*</span>
                            </Label>
                            <Input id="name" {...register('eventName')} />
                            {errors.eventName && (
                                <span className="text-red-500 text-xs">
                                    {errors.eventName.message}
                                </span>
                            )}
                        </div>

                        <div className="grid gap-3">
                            <Label htmlFor="date">
                                Event Date{' '}
                                <span className="text-red-500">*</span>
                            </Label>
                            <DatePicker
                                value={new Date('2024-01-01')}
                                onChange={(date) => setValue('eventDate', date)}
                            />
                            {errors.eventDate && (
                                <span className="text-red-500 text-xs">
                                    {errors.eventDate.message}
                                </span>
                            )}
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="venue">
                                Venue Name{' '}
                                <span className="text-red-500">*</span>
                            </Label>
                            <Input id="venue" {...register('venueName')} />
                            {errors.venueName && (
                                <span className="text-red-500 text-xs">
                                    {errors.venueName.message}
                                </span>
                            )}
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="address">Venue Address</Label>
                            <Input id="address" {...register('venueAddress')} />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="description">
                                Event Description
                            </Label>
                            <Textarea
                                id="description"
                                {...register('eventDescription')}
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="p-4 border-t">
                    <Button
                        size="sm"
                        className="w-full"
                        type="submit"
                        disabled={mutation.isPending}
                    >
                        {mutation.isPending ? (
                            <Loader2 className="animate-spin" />
                        ) : editingExistingEvent ? (
                            'Update Event Details'
                        ) : (
                            'Save'
                        )}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}
