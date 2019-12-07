<?php

use Illuminate\Support\Facades\Route;
use \Devpartners\AuditableLog\Controllers\ToolController;

/*
|--------------------------------------------------------------------------
| Tool API Routes
|--------------------------------------------------------------------------
|
| Here is where you may register API routes for your tool. These routes
| are loaded by the ServiceProvider of your tool. You're free to add
| as many additional routes to this file as your tool may require.
|
*/

Route::get('/audits/{resourceName}/{resourceId}/user', [ToolController::class, 'userAudits']);

Route::get('/audits/{resourceName}/{resourceId}/admin', [ToolController::class, 'adminAudits']);
