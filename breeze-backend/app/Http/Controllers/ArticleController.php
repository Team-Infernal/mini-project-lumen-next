<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
  public function showAll()
  {
    $articles = Articles::with("author")->get()->map(function ($a) {
      return [
        "id" => $a->id,
        "title" => $a->title,
        "content" => $this->shortenContent($a->content),
        "createdAt" => $a->created_at,
        "updatedAt" => $a->updated_at,
        "author" => [
          "id" => $a->author->id,
          "fullName" => $a->author->full_name(),
        ],
      ];
    });

    return response()->json($articles, 200);
  }

  public function showOne($id)
  {
    $a = Articles::with("author")->find($id);

    $article = [
      "id" => $a->id,
      "title" => $a->title,
      "content" => $this->shortenContent($a->content),
      "createdAt" => $a->created_at,
      "updatedAt" => $a->updated_at,
      "author" => [
        "id" => $a->author->id,
        "fullName" => $a->author->full_name(),
      ],
    ];

    return response()->json($article, 200);
  }

  public function create(Request $request)
  {
    $this->validate($request, [
      "title" => "required",
      "content" => "required",
    ]);
    $article = Articles::create(array_merge($request->all(), ["author_id" => $request->user()->id]));

    return response()->json($article, 201);
  }

  public function update($id, Request $request)
  {
    $article = Articles::findOrFail($id);
    $this->validate($request, [
      "title" => "required",
      "content" => "required",
    ]);
    $article->update($request->all());
    return response()->json($article, 200);
  }

  public function delete($id)
  {
    Articles::findOrFail($id)->delete();
    return response("Deleted successfully", 200);
  }

  private function shortenContent(string $content)
  {
    $words = explode(" ", $content);
    $sliced_words = array_slice($words, 0, 30);
    return join(" ", $sliced_words) . (sizeof($words) > 30 ? "..." : "");
  }
}
