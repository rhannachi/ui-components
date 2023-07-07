import React from 'react'
import clsx from "clsx"
import { Checkbox } from "@/atoms/Checkbox"
import { Icon } from "@/atoms/Icon"

// export const TASK_STATE = ['TASK_INBOX', 'TASK_ARCHIVED', 'TASK_PINNED'] as const

export type TaskProps = {
  task: {
    id: string,
    title: string,
    state: 'TASK_INBOX' | 'TASK_ARCHIVED' | 'TASK_PINNED' // typeof TASK_STATE[number]
  },
  onArchiveTask: (id: string, isArchive: boolean) => void,
  onPinTask: (id: string) => void
}

export const Task = ({ task: { id, title, state }, onPinTask, onArchiveTask }: TaskProps) => {

  return (
    <div className="flex flex-row p-3 bg-white border-2 border-gray-50">

      <Checkbox
        className="mr-4"
        checked={state === "TASK_ARCHIVED"}
        onChange={(isArchive) => onArchiveTask(id, isArchive)}
      />

      <label className="w-full" htmlFor="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
          className={clsx(state === "TASK_ARCHIVED" ? 'line-through text-gray-200' : 'text-gray-500')}
        />
      </label>

      {state !== "TASK_ARCHIVED" && (
        <button onClick={() => onPinTask(id)} >
          <Icon
            className="mb-1"
            color={state === "TASK_PINNED" ? "fill-cyan-400" : "fill-gray-200"}
            icon="star-full"
            size="sm"
          />
        </button>
      )}
    </div>
  )
}

