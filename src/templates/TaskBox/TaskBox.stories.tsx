import { TasksBox } from './TaskBox'
import { Meta, StoryObj } from "@storybook/react"


const meta: Meta<typeof TasksBox> = {
  component: TasksBox,
  title: 'templates/TasksBox',
  decorators: [(story) => <div className="bg-cyan-400 p-14">{story()}</div>],
}

export default meta
type Story = StoryObj<typeof TasksBox>;

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
