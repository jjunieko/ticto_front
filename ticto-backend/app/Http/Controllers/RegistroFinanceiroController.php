<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Registro;
use Illuminate\Support\Facades\Storage;

class RegistroFinanceiroController extends Controller
{
    public function listarRegistros()
    {
        $registros = Registro::all();

        return response()->json($registros);
    }

    // public function cadastrarRegistro(Request $request)
    // {
    //     // Aqui você pode implementar a lógica para cadastrar um novo registro no banco de dados
    //     // Receba os dados do registro através do objeto $request
    //     // Retorne a resposta adequada para o cliente (sucesso, erro, etc.)
    //     return response()->json(['message' => 'Registro cadastrado com sucesso']);
    // }

    public function criarRegistro(Request $request)
    {
        try {
            $registro = new Registro;
            $registro->descricao = $request->input('descricao');
            $registro->tipo = $request->input('tipo');
            $registro->categoria = $request->input('categoria');
            $registro->valor = $request->input('valor');
            $registro->save();

            return response()->json(['message' => 'Registro criado com sucesso']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Erro ao criar registro'], 500);
        }
    }

    public function atualizarRegistro(Request $request, $id)
    {
        $registro = Registro::find($id);
        if (!$registro) {
            return response()->json(['message' => 'Registro não encontrado'], 404);
        }

        $registro->descricao = $request->input('descricao');
        $registro->tipo = $request->input('tipo');
        $registro->categoria = $request->input('categoria');
        $registro->valor = $request->input('valor');
        $registro->save();

        return response()->json(['message' => 'Registro atualizado com sucesso']);
    }

    public function deletarRegistro($id)
    {
        $registro = Registro::find($id);
        if (!$registro) {
            return response()->json(['message' => 'Registro não encontrado'], 404);
        }

        $registro->delete();

        return response()->json(['message' => 'Registro deletado com sucesso']);
    }
}
