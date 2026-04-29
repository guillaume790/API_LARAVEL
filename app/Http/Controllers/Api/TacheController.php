<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tache;
use Illuminate\Http\Request;

class TacheController extends Controller
{
    public function index()
    {
        return Tache::all();
    }

    public function store(Request $request)
    {
        return Tache::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $tache = Tache::findOrFail($id);
        $tache->update($request->all());
        return $tache;
    }

    public function destroy($id)
    {
        return Tache::destroy($id);
    }
}
