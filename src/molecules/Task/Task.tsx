import clsx from 'clsx'
import { Checkbox } from '@/atoms/Checkbox'
import { Icon } from '@/atoms/Icon'

export type TaskType = {
  id: string
  title: string
  state: 'TASK_INBOX' | 'TASK_ARCHIVED' | 'TASK_PINNED'
}

type TaskProps = {
  task: TaskType
  onArchiveTask: (id: string, isArchive: boolean) => void
  onPinTask: (id: string) => void
}

export const Task = ({ task: { id, title, state }, onPinTask, onArchiveTask }: TaskProps) => {
  return (
    <div
      role='task'
      data-testid={`task-${id}`}
      className='flex flex-row p-3 bg-white border-2 border-gray-50'
    >
      <Checkbox
        role='archive-task'
        className='mr-4'
        checked={state === 'TASK_ARCHIVED'}
        onChange={(isArchive) => onArchiveTask(id, isArchive)}
      />

      <input
        type='text'
        value={title}
        readOnly={true}
        name='title'
        role='input-task'
        placeholder='Input title'
        className={clsx(
          'w-full',
          state === 'TASK_ARCHIVED' ? 'line-through text-gray-200' : 'text-gray-500',
        )}
      />

      {state !== 'TASK_ARCHIVED' && (
        <button role='button-icon-task' onClick={() => onPinTask(id)}>
          <Icon
            role='icon-task'
            className='mb-1'
            color={state === 'TASK_PINNED' ? 'fill-cyan-400' : 'fill-gray-200'}
            icon='star-full'
            size='sm'
          />
        </button>
      )}
    </div>
  )
}
