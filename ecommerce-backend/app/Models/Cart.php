<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'products',
        'total',
        'discountedTotal',
        'totalProducts',
        'totalQuantity'
    ];

    protected $casts = [
        'products' => 'array',
    ];
}
