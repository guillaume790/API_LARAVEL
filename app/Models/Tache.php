<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tache extends Model
{
    use HasFactory;

    // Champs autorisés en création / mise à jour
    protected $fillable = ['titre', 'terminee'];
}
