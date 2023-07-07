import React, { useEffect, useReducer } from "react"
import { Task, TaskProps } from "@/molecules/Task"
import { TaskSkeleton } from "@/molecules/TaskSkeleton"
import { Icon } from "@/atoms/Icon"
import taskReducer from "./Tasks.reducer"

export type TasksProps = {
  tasks: TaskProps['task'][],
  loading?: boolean
}
export const Tasks = ({ tasks, loading }: TasksProps) => {
  const [state, dispatch] = useReducer(taskReducer, { tasks })

  useEffect(() => {
    setTasksAction(tasks)
  }, [tasks])
  
  const setTasksAction = (tasks: TaskProps['task'][]) => dispatch({type: 'SET_TASKS', payload: { tasks }})
  const setTaskStatePinAction = (id: string) => dispatch({type: 'SET_TASK_STATE', payload: { id, action: 'onPin' }})
  const setTaskStateArchiveAction = (id: string, isArchive: boolean) => dispatch({type: 'SET_TASK_STATE', payload: {id, action: 'onArchive', isArchive }})

  if (loading) {
    return <div>
      <TaskSkeleton />
      <TaskSkeleton />
      <TaskSkeleton />
      <TaskSkeleton />
      <TaskSkeleton />
      <TaskSkeleton />
    </div>
  }

  if (state.tasks.length === 0) {
    return <div className="flex justify-center items-center h-80 ">
      <Icon icon="check" color="fill-white" size="xl" />
      <p className="text-white ml-2 font-semibold ">You have no tasks</p>
    </div>
  }

  return (
    <div>
      {state.tasks.map(task => (
        <Task key={task.id} task={task}
              onPinTask={setTaskStatePinAction}
              onArchiveTask={setTaskStateArchiveAction} />
      ))}
    </div>
  )
}