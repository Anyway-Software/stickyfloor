<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = auth()->user()->events()->with('ticketCategory')->get();
        return response()->json($events);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'event_name' => 'required|string|max:255',
            'venue_name' => 'required|string|max:255',
            'event_description' => 'required|string',
        ]);

        $event = Event::create([
            'user_id' => Auth::id(),
            'event_name' => $request->event_name,
            'venue_name' => $request->venue_name,
            'event_description' => $request->event_description,
        ]);

        return response()->json($event, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $event = Event::findOrFail($id);

        if (!$event) {
            return response()->json(['error' => 'Event not found'], 404);
        }

        return response()->json($event);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $event = Event::find($id);

        if (!$event) {
            return response()->json(['error' => 'Event not found'], 404);
        }

        $request->validate([
            'event_name' => 'required|string|max:255',
            'venue_name' => 'required|string|max:255',
            'event_description' => 'required|string',
        ]);

        $event->update([
            'event_name' => $request->event_name,
            'venue_name' => $request->venue_name,
            'event_description' => $request->event_description,
        ]);

        return response()->json($event);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $event = Event::find($id);

        if (!$event) {
            return response()->json(['error' => 'Event not found'], 404);
        }

        $event->delete();
        return response()->json(null, 204);
    }
}
