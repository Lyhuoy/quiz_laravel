<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Book extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'body'];
    protected $hidden = ['updated_at'];

    public function author() {
        return $this->belongsTo(Author::class);
    }
}
