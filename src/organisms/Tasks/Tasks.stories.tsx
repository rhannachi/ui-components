import { Tasks } from './Tasks'
import { Meta, StoryObj } from "@storybook/react"
import { within } from "@storybook/testing-library"
import { expect } from "@storybook/jest"

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
      { id: '4', title: 'Task 4', state: 'TASK_PINNED' },
      { id: '5', title: 'Task 5', state: 'TASK_ARCHIVED' },
      { id: '6', title: 'Task 6', state: 'TASK_ARCHIVED' },
    ],
  },
  play: async ({ args, canvasElement, step })  => {
    const canvas = within(canvasElement)
    await step('👇 Verify that the Tasks are displayed correctly.', async () => {
      const tasks = await  canvas.findAllByRole("task")
      await expect(tasks.length).toBe(args.tasks.length)
    })
  }
}

export const Loading : Story= {
  args: {
    tasks: [],
    loading: true,
  },
  play: async ({ canvasElement, step })  => {
    const canvas = within(canvasElement)
    await step('👇 Verify that TaskSkeleton is displayed correctly.', async () => {
      const tasks = await canvas.findAllByTestId(`task-skeleton`)
      await expect(tasks.length).toBe(6)
    })
  }
}

export const Empty : Story = {
  args: {
    tasks: [],
    loading: false,
  },
  play: async ({ canvasElement, step })  => {
    const canvas = within(canvasElement)
    await step('👇 Verify that the message "You have no tasks" is displayed.', async () => {
      await expect(await canvas.findByText(`You have no tasks`)).toBeInTheDocument()
    })
  }
}
