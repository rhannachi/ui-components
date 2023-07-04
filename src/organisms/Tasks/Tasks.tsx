import React from 'react'
import Task, { TaskProps } from "@/molecules/Task/Task"
import TaskSkeleton from "@/molecules/TaskSkeleton/TaskSkeleton"
import Icon from "@/atoms/Icon/Icon"

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
    return <div>
      <TaskSkeleton />
      <TaskSkeleton />
      <TaskSkeleton />
      <TaskSkeleton />
      <TaskSkeleton />
      <TaskSkeleton />
    </div>
  }

  if (tasks.length === 0) {
    return <div className=" flex justify-center items-center ">
      <Icon icon="check" color="fill-white" size="xl" />
      <p className="text-white ml-2 font-semibold ">You have no tasks</p>
    </div>
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
