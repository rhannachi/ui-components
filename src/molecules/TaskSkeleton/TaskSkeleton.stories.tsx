import { Meta, StoryObj } from '@storybook/react'
import { TaskSkeleton } from './TaskSkeleton'

const meta: Meta<typeof TaskSkeleton> = {
  component: TaskSkeleton,
  title: 'molecules/TaskSkeleton',
  decorators: [(story) => <div className='bg-cyan-400 p-14'>{story()}</div>],
}
export default meta
type Story = StoryObj<typeof TaskSkeleton>

export const Default: Story = {
  args: {},
}
