import Task from './Task'
import { Meta, StoryObj } from "@storybook/react"
import Incrementor from "../../examples/Incrementor/Incrementor"

const meta: Meta<typeof Incrementor> = {
  component: Task,
  title: 'molecules/Task',
  decorators: [(story) => <div className="bg-cyan-400 p-6">{story()}</div>],
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
