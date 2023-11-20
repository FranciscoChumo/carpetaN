<?php

namespace App\Http\Controllers;
use App\Models\Fruta;
use Illuminate\Http\Request;

class FrutaController extends Controller
{
    //
    public function inicio (){
 return view('frutas');
    }
    public function guardarfruta(Request $request){
        $guardarfruta =new Fruta();
        $guardarfruta->nombre=$request->name;
        $guardarfruta->cantida=$request->cantidad;
        $guardarfruta->save();
    }
}
