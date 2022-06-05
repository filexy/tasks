<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    // all tasks
    public function index()
    {
        $tasks = Task::all()->toArray();
        return array_reverse($tasks);
    }

    // add task
    public function add(Request $request)
    {
        $task = new Task([
            'name' => $request->name,
            'created_by' => $request->created_by
        ]);
        $task->save();

        return response()->json('The task successfully added');
    }

    // edit task
    public function edit($id)
    {
        $task = Task::find($id);
        return response()->json($task);
    }

    // update task
    public function update($id, Request $request)
    {
        $task = Task::find($id);
        $task->update($request->all());

        return response()->json('The task successfully updated');
    }

    // delete task
    public function delete($id)
    {
        $task = Task::find($id);
        $task->delete();

        return response()->json('The task successfully deleted');
    }
}
