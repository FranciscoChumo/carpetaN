<?php
use App\Http\Controllers\datosPersController;
use App\Http\Controllers\FrutaController;
use Illuminate\Support\Facades\Route;
use App\Models\datosp;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/dato',[datosPersController::class,'inicio']);
Route::post('/dato',[datosPersController::class,'datos']);//para guardar mis datos

Route::get('/fruta',[FrutaController::class,'inicio']);
Route::post('fruta/all',[FrutaController::class,'guardarfruta']);
Route::get('/datos',[datosPersController::class,'guardar']);
