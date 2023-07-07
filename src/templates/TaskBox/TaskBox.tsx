import React from 'react'
import { Tasks, TasksProps } from "@/organisms/Tasks"

type TasksBoxProps = {
  tasks: TasksProps['tasks'],
}
export const TasksBox = ({ tasks }: TasksBoxProps) => {

  return (
    <div className="flex flex-col">
      <div className="bg-cyan-600 text-white p-5 text-lg font-semibold">TaskBox</div>
      <Tasks tasks={tasks} />
    </div>
  )
}
