<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Event;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TicketCategory>
 */
class TicketCategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $tickets_allocated = $this->faker->numberBetween(50, 500);
        return [
            'id' => (string) Str::uuid(),
            'event_id' => Event::factory(),
            'name' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph(),
            'tickets_allocated' => $tickets_allocated,
            'tickets_sold' => $this->faker->numberBetween(50, $tickets_allocated),
            'price' => $this->faker->randomFloat(2, 10, 200),
            'start_time' => $this->faker->dateTimeBetween('-1 month', '+1 month'),
            'end_time' => $this->faker->dateTimeBetween('+1 month', '+2 months'),
            'area_name' => $this->faker->word(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
