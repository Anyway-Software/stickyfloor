<?php

namespace Database\Seeders;

use App\Models\Event;
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

        Event::factory(4)->create([
            'user_id' => $user->id,
        ]);

        // $user->events()->createMany([
        //     [
        //         'id' => Str::uuid(),
        //         'event_name' => 'Event 1',
        //         'venue_name' => 'Venue 1',
        //         'event_description' => 'Description 1',
        //     ],
        //     [
        //         'id' => Str::uuid(),
        //         'event_name' => 'Event 2',
        //         'venue_name' => 'Venue 2',
        //         'event_description' => 'Description 2',
        //     ],
        // ]);
    }
}
