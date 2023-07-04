import Tasks from './Tasks'
import { Meta, StoryObj } from "@storybook/react"


const meta: Meta<typeof Tasks> = {
  component: Tasks,
  title: 'organisms/Tasks',
  decorators: [(story) => <div className="bg-cyan-400 p-14">{story()}</div>],
}

export default meta
type Story = StoryObj<typeof Tasks>;

export const Default: Story = {
  args: {
    tasks: [
      { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
      { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
      { id: '3', title: 'Task 3', state: 'TASK_INBOX' },
      { id: '4', title: 'Task 4', state: 'TASK_INBOX' },
      { id: '5', title: 'Task 5', state: 'TASK_ARCHIVED' },
      { id: '6', title: 'Task 6', state: 'TASK_ARCHIVED' },
    ],
  },
}

export const WithPinnedTasks: Story = {
  args: {
    tasks: [
      { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
      { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
      { id: '3', title: 'Task 3', state: 'TASK_PINNED' },
      { id: '4', title: 'Task 4', state: 'TASK_PINNED' },
      { id: '5', title: 'Task 5', state: 'TASK_ARCHIVED' },
      { id: '6', title: 'Task 6', state: 'TASK_PINNED' },
    ],
  },
}

export const Loading : Story= {
  args: {
    tasks: [],
    loading: true,
  },
}

export const Empty : Story = {
  args: {
    tasks: [],
    loading: false,
  },
}
