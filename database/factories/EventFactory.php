<?php

namespace Database\Factories;

use App\Models\Event;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    protected $model = Event::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => Str::uuid(),
            'user_id' => User::factory(),
            'name' => $this->faker->catchPhrase(),
            'description' => $this->faker->paragraphs(3, true),
            'venue_name' => $this->faker->colorName() . ' ' . $this->faker->word() . ' Hall',
            'venue_address' => $this->faker->address,
            'start' => $this->faker->dateTimeBetween('+3 months', '+1 year'),
        ];
    }
}
