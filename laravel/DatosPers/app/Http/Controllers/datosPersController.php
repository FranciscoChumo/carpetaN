<?php

namespace App\Http\Controllers;

use App\Models\datosp;
use Illuminate\Http\Request;

class datosPersController extends Controller
{
    public  function datos(Request $request){
        //dd($request->all());
        $datos =new datosp();
        $datos->nombre=$request->name;
        $datos->apellido=$request->apellido;
        $datos->cedula=$request->cedula;
        $datos->save();
    
        return view ('datosp');

    }
    public function inicio(){
        return view('datosp');
    }
    public function guardar(Request $request){
      return view ('muestra'); 
     } // dd($request->all());
}
