<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Articles extends Model
{
  use HasUuids;

  protected $fillable = [
    "title",
    "content",
    "author_id",
  ];

  protected $hidden = [];

  public function author()
  {
    return $this->belongsTo(User::class);
  }
}
