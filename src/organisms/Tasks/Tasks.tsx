import React from 'react'
import Task, { TaskProps } from "@/molecules/Task/Task"

type TasksProps = Pick<TaskProps, 'onPinTask' | 'onArchiveTask'> & {
  tasks: TaskProps['task'][],
  loading?: boolean
}
const Tasks = ({ loading, tasks, onPinTask, onArchiveTask }: TasksProps) => {
  const events = {
    onPinTask,
    onArchiveTask,
  }

  if (loading) {
    return <div>loading</div>
  }

  if (tasks.length === 0) {
    return <div>empty</div>
  }

  return (
    <div>
      {[
        ...tasks.filter((t) => t.state === 'TASK_PINNED'),
        ...tasks.filter((t) => t.state !== 'TASK_PINNED'),
      ].map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  )
}

export default Tasks
