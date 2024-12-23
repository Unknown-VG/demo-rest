<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use Faker\Factory as Faker;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create(); // This will now work with fakerphp/faker

        // Loop to create 300 products
        for ($i = 0; $i < 300; $i++) {
            Product::create([
                'title' => $faker->word(),
                'price' => $faker->randomFloat(2, 5, 500), // Price between 5 and 500
                'thumbnail' => $faker->imageUrl(200, 200, 'sports', true), // Random image URL
                'description' => $faker->sentence(10), // Random description
            ]);
        }
    }
}
