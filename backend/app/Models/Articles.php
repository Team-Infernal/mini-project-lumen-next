<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Articles extends Model
{
  use HasUuids;

  protected $fillable = [
    'title', 'author', 'content',
  ];

  protected $hidden = [];
}
