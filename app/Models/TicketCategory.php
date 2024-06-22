<?php

namespace App\Models;

use App\Traits\HasUUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class TicketCategory extends Model
{
    use HasFactory, HasUUID;

    protected $keyType = 'string';

    public $incrementing = false;

    protected $fillable = [
        'event_id',
        'name',
        'description',
        'tickets_allocated',
        'tickets_sold',
        'price',
        'start_time',
        'end_time',
        'area_name',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->{$model->getKeyName()})) {
                $model->{$model->getKeyName()} = (string) Str::uuid();
            }
        });
    }

    public function event()
    {
        return $this->belongsTo(Event::class);
    }
}
