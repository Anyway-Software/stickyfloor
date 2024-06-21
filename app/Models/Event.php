<?php

namespace App\Models;

use App\Traits\HasUUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory, HasUUID;

    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'user_id',
        'name',
        'description',
        'venue_name',
        'venue_address',
        'start',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function ticketCategory()
    {
        return $this->hasMany(TicketCategory::class);
    }
}
