import { Meta, StoryObj } from "@storybook/react"
import { Task } from './Task'

const meta: Meta<typeof Task> = {
  component: Task,
  title: 'molecules/Task',
  decorators: [(story) => <div className="bg-cyan-400 p-10">{story()}</div>],
}
export default meta
type Story = StoryObj<typeof Task>;

export const Default: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
}

export const Pinned: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_PINNED',
    },
  },
}

export const Archived: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_ARCHIVED',
    },
  },
}
