<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
  public function showAll()
  {
    $formatted_articles = Articles::all()->map(function ($item, $key) {
      $preview_array = explode(" ", $item["content"]);
      $preview_array_sliced = array_slice($preview_array, 0, 30);
      $preview_length = sizeof($preview_array);
      $item["content"] = join(" ", $preview_array_sliced) . ($preview_length > 30 ? "..." : "");
      return $item;
    });

    return response()->json($formatted_articles);
  }

  public function showOne($id)
  {
    return response()->json(Articles::find($id));
  }

  public function create(Request $request)
  {
    $this->validate($request, [
      'title' => 'required',
      'author' => 'required',
      'content' => 'required',
    ]);
    $article = Articles::create($request->all());

    return response()->json($article, 201);
  }

  public function update($id, Request $request)
  {
    $article = Articles::findOrFail($id);
    $this->validate($request, [
      'title' => 'required',
      'author' => 'required',
      'content' => 'required',
    ]);
    $article->update($request->all());
    return response()->json($article, 200);
  }

  public function delete($id)
  {
    Articles::findOrFail($id)->delete();
    return response('Deleted Successfully', 200);
  }
}
