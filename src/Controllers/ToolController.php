<?php

namespace Devpartners\AuditableLog\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ToolController extends Controller
{
    public function __construct()
    {
    }


    public function userAudits(Request $request, $resourceName, $resourceId)
    {
       $page = $request->query('page', false);

       if($page)
           $query = ['page' => $page];
       else
           $query = [];

       $client = new \GuzzleHttp\Client();
       $url = config('app.portal_url').'/api/audits/'.$resourceName.'/'.$resourceId;

       $result = $client->get($url,
           [
               'query' =>  $query,
               'verify' => false
           ]);

       $response = json_decode($result->getBody(), true);

       return response()->json($response);
    }


    public function adminAudits(Request $request, $resourceName, $resourceId)
    {
        $model = \Laravel\Nova\Nova::modelInstanceForKey($resourceName);
        $record = $model::find($resourceId);


        $audits = $record->audits()->with('user')->orderBy('created_at', 'desc')->paginate();

        return response()->json(['status' => 'OK', 'audits' => $audits]);
    }
}
