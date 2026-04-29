<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TestController;
use App\Http\Controllers\Api\TacheController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route de test (si tu en as besoin)
Route::get('/test', [TestController::class, 'index']);

// Routes CRUD pour les tâches
Route::get('/taches', [TacheController::class, 'index']);
Route::post('/taches', [TacheController::class, 'store']);
Route::put('/taches/{id}', [TacheController::class, 'update']);
Route::delete('/taches/{id}', [TacheController::class, 'destroy']);
