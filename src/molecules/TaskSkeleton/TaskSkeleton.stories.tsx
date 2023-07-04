import { Meta, StoryObj } from "@storybook/react"
import TaskSkeleton from "@/molecules/TaskSkeleton/TaskSkeleton"

const meta: Meta<typeof TaskSkeleton> = {
  component: TaskSkeleton,
  title: 'molecules/TaskSkeleton',
  decorators: [(story) => <div className="p-10">{story()}</div>],
}
export default meta
type Story = StoryObj<typeof TaskSkeleton>;

export const Default: Story = {
  args: {},
}

