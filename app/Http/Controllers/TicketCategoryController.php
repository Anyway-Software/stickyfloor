<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\TicketCategory;
use Illuminate\Http\Request;

class TicketCategoryController extends Controller
{
    /**
     * Display a listing of ticket categories for a specific event.
     */
    public function index($eventId)
    {
        $event = Event::with('ticketCategory')->findOrFail($eventId);

        return response()->json($event->ticketCategory);
    }

    public function save(Request $request, $eventId)
    {
        $event = Event::findOrFail($eventId);
    
        $request->validate([
            'categories' => 'required|array',
            'categories.*.name' => 'required|string|max:255',
            'categories.*.description' => 'nullable|string',
            'categories.*.tickets_allocated' => 'required|integer|min:0',
            'categories.*.price' => 'required|numeric|min:0',
            'categories.*.start_time' => 'nullable|date',
            'categories.*.end_time' => 'nullable|date|after:categories.*.start_time',
            'categories.*.area_name' => 'nullable|string|max:255',
            'categories.*.id' => 'nullable|uuid|exists:ticket_categories,id',
        ]);
    
        // Get all existing category IDs for the event
        $existingCategoryIds = $event->ticketCategory->pluck('id')->toArray();
    
        // Get all incoming category IDs
        $incomingCategoryIds = array_filter(array_column($request->categories, 'id'));
    
        // Find IDs to delete
        $idsToDelete = array_diff($existingCategoryIds, $incomingCategoryIds);
    
        // Delete categories not in the request
        TicketCategory::whereIn('id', $idsToDelete)->delete();
    
        foreach ($request->categories as $categoryData) {
            if (isset($categoryData['id'])) {
                $category = TicketCategory::findOrFail($categoryData['id']);
                $category->update($categoryData);
            } else {
                $categoryData['event_id'] = $eventId;
                $categoryData['tickets_sold'] = $categoryData['tickets_sold'] ?? 0;
                TicketCategory::create($categoryData);
            }
        }
    
        return response()->json(['message' => 'Ticket categories saved successfully.']);
    }
}
