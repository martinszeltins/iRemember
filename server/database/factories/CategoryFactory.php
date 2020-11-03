<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Category::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $descriptions = [
            'Priority', 'Next week', 'Later',
            'Next month', 'Important', 'Urgent',
            'ASAP', 'Trash', 'Ideas',
        ];

        return [
            'user_id' => User::factory()->create()->id,
            'description' => $descriptions[array_rand($descriptions)],
            'color' => $this->faker->hexcolor,
        ];
    }
}
