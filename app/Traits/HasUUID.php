<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

trait HasUUID
{
    /**
     * Boot functions from Laravel.
     */
    // protected static function boot() <- This line is INCORRECT
    protected static function bootHasUUID()
    {
        static::creating(function (Model $model) {
            $model->primaryKey = 'id';
            $model->keyType = 'string';
            $model->incrementing = false;

            if (empty($model->{$model->getKeyName()})) {
                $model->{$model->getKeyName()} = Str::uuid()->toString();
            }
        });
    }

    /**
     * Get the value indicating whether the IDs are incrementing.
     *
     * @return bool
     */
    public function getIncrementing()
    {
        return false;
    }

    /**
     * Get the auto-incrementing key type.
     *
     * @return string
     */
    public function getKeyType()
    {
        return 'string';
    }
}
