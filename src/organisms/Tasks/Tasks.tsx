import React, { useReducer } from "react"
import { Task, TaskProps } from "@/molecules/Task"
import { TaskSkeleton } from "@/molecules/TaskSkeleton"
import { Icon } from "@/atoms/Icon"

/**/
type StateType = {
  tasks: TaskProps['task'][]
}

// Actions
type TaskStatePinnedActionType = {
  type: 'STATE_PINNED_ACTION',
  payload: { id: string }
};
type TaskStateArchivedActionType = {
  type: 'STATE_ARCHIVED_ACTION', payload: { id: string, isArchive: boolean }
};
type ActionsType = TaskStatePinnedActionType | TaskStateArchivedActionType;

// Reducer
const taskReducer = (state: StateType, action: ActionsType): StateType => {

  switch (action.type) {
    case 'STATE_ARCHIVED_ACTION': {
        return {
          ...state,
          tasks: state.tasks.map((task) => {
            if (action.payload.id === task.id) {
              return {
                ...task,
                state: action.payload.isArchive ? 'TASK_ARCHIVED' : 'TASK_INBOX'
              }
            }
            return task
          })
        }
    }
    case 'STATE_PINNED_ACTION': {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (action.payload.id === task.id) {
            return {
              ...task,
              state: task.state === 'TASK_PINNED' ? 'TASK_INBOX' : 'TASK_PINNED'
            }
          }
          return task
        })
      }
    }
    default:
      return state
  }
}

export type TasksProps = {
  tasks: TaskProps['task'][],
  loading?: boolean
}
export const Tasks = ({ tasks, loading }: TasksProps) => {
  const [state, dispatch] = useReducer(taskReducer, { tasks })

  const onPinTask = (id: string) => dispatch({type: 'STATE_PINNED_ACTION', payload: { id }})
  const onArchiveTask = (id: string, isArchive: boolean) => dispatch({type: 'STATE_ARCHIVED_ACTION', payload: {id, isArchive }})

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
              onPinTask={onPinTask}
              onArchiveTask={onArchiveTask} />
      ))}
    </div>
  )
}