<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\TicketCategory;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $userExists = User::where([
            'email' => 'test@stickyfloor.com',
        ]);

        if ($userExists) {
            $userExists->delete();
        }

        $user = User::factory()->create([
            'name' => 'Seedy User',
            'email' => 'test@stickyfloor.com',
            'password' => bcrypt('Password99'),
        ]);

        // Event::factory(4)->create([
        //     'user_id' => $user->id,
        // ])->each(function ($event) {
        //     TicketCategory::factory(rand(1, 3))->create([
        //         'event_id' => $event->id,
        //     ]);
        // });

        Event::factory()->create([
            'name' => 'Blazing Swan',
            'venue_name' => 'Kulin Racecourse',
            'user_id' => $user->id,
        ])->each(function ($event) {
            TicketCategory::factory()->create([
                'event_id' => $event->id,
                'name' => 'Theme Camp',
                'price' => 200,
            ]);
            TicketCategory::factory()->create([
                'event_id' => $event->id,
                'name' => '1st round general admission',
                'price' => 250,
            ]);
            TicketCategory::factory()->create([
                'event_id' => $event->id,
                'name' => '2nd round general admission',
                'price' => 300,
            ]);
        });

        Event::factory()->create([
            'name' => 'Toasty Beats',
            'venue_name' => 'Vinyl Cafe',
            'user_id' => $user->id,
        ])->each(function ($event) {
            TicketCategory::factory()->create([
                'event_id' => $event->id,
                'name' => 'General Admission',
                'price' => 10,
            ]);
        });
        // $user->events()->createMany([
        //     [
        //         'id' => Str::uuid(),
        //         'name' => 'Event 1',
        //         'venue_name' => 'Venue 1',
        //         'description' => 'Description 1',
        //     ],
        //     [
        //         'id' => Str::uuid(),
        //         'name' => 'Event 2',
        //         'venue_name' => 'Venue 2',
        //         'description' => 'Description 2',
        //     ],
        // ]);
    }
}
