<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegistroFinanceiroController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::post('/registros', [RegistroFinanceiroController::class, 'cadastrarRegistro']);

Route::get('/registros', [RegistroFinanceiroController::class, 'listarRegistros']);
Route::post('/registros', [RegistroFinanceiroController::class, 'criarRegistro']) ->middleware('cors');
// Route::post('/criar-registro', 'RegistroFinanceiroController@criarRegistro')
//     ->withoutMiddleware(['csrf'])
//     ->name('criar-registro');
Route::put('/registros/{id}', [RegistroFinanceiroController::class, 'atualizarRegistro']);
Route::delete('/registros/{id}', [RegistroFinanceiroController::class, 'deletarRegistro']);


