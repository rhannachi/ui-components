import { Meta, StoryObj } from "@storybook/react"
import { expect } from '@storybook/jest'
import { findByRole, queryByRole, userEvent, waitFor, within } from "@storybook/testing-library"
import { TasksBox } from './TaskBox'
import { TaskType } from "@/molecules/Task"

const meta: Meta<typeof TasksBox> = {
  component: TasksBox,
  title: 'templates/TasksBox',
  decorators: [(story) => <div className="bg-cyan-400 p-14">{story()}</div>],
}

export default meta
type Story = StoryObj<typeof TasksBox>;

const tasksMock: TaskType[] = [
  { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
  { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
  { id: '3', title: 'Task 3', state: 'TASK_PINNED' },
  { id: '4', title: 'Task 4', state: 'TASK_PINNED' },
  { id: '5', title: 'Task 5', state: 'TASK_ARCHIVED' },
  { id: '6', title: 'Task 6', state: 'TASK_ARCHIVED' },
]

export const Default: Story = {
  args: {
    tasks: tasksMock,
  },
  play: async ({ args, canvasElement, step })  => {
    const canvas = within(canvasElement)
    await step('👇 Verify that the Tasks are displayed correctly.', async () => {
      // TODO improvement - forof to test.each
      for (const { id } of args.tasks ) {
        const task = await  canvas.getByTestId(`task-${id}`)
        await expect(task).toBeInTheDocument()
        // console.log(prettyDOM(canvasElement))
      }
    })
  }
}

export const UnpinTask: Story = {
  args: {
    tasks: tasksMock.map((task) => ({...task, state: 'TASK_PINNED'})),
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('👇 Get the first Task "task-1" ', async () => {
      const task = await  canvas.getByTestId(`task-1`)
      await expect(task).toBeInTheDocument()

      await step('👇 Search for the "button-icon-task" button', async () => {
        const button = await findByRole(task, 'button-icon-task')
        await expect(button).toBeInTheDocument()

        await step('👇 Click on the Pin icon and verify that it changes color from "cyan-400" to "gray-200"', async () => {
          const icon: HTMLElement = await findByRole(button, 'icon-task')
          await expect(icon.classList).toContain('fill-cyan-400')
          await userEvent.click(button, { detail: 100 })
          await expect(icon.classList).toContain('fill-gray-200')
        })
      })
    })
  },
}

export const PinTask: Story = {
  args: {
    tasks: tasksMock.map((task) => ({...task, state: 'TASK_INBOX'})),
  },
  play: async ({ canvasElement , step}) => {
    const canvas = within(canvasElement)

    await step('👇 Get the first Task "task-1" ', async () => {
      const task = await  canvas.getByTestId(`task-1`)
      await expect(task).toBeInTheDocument()

      await step('👇 Search for the "button-icon-task" button', async () => {
        const button = await findByRole(task, 'button-icon-task')

        await step('👇 Click on the Pin icon and verify that it changes color from "gray-200" to "cyan-400"', async () => {
          const icon: HTMLElement = await findByRole(button, 'icon-task')
          await expect(icon.classList).toContain('fill-gray-200')
          await userEvent.click(button, { detail: 100 })
          await expect(icon.classList).toContain('fill-cyan-400')
        })
      })
    })
  },
}

export const DisabledEditTask: Story = {
  args: {
    tasks: tasksMock.map((task) => ({...task, state: 'TASK_INBOX'})),
  },
  play: async ({ canvasElement , step}) => {
    const canvas = within(canvasElement)

    await step('👇 Get the first Task "task-1" ', async () => {
      const task = await  canvas.getByTestId(`task-1`)
      await expect(task).toBeInTheDocument()

      await step('👇 Search for the input text field "input-task" and attempt to make modifications', async () => {
        const input: HTMLInputElement = await findByRole(task, 'input-task')
        await userEvent.type(input, 'Task Test', {delay: 100 } )
        await expect(input.value).toBe('Task 1')
      })
    })
  },
}

export const ArchiveTask: Story = {
  args: {
    tasks: tasksMock.map((task) => ({...task, state: 'TASK_INBOX'})),
  },
  play: async ({ canvasElement , step}) => {
    const canvas = within(canvasElement)

    await step('👇 Get the first Task', async () => {
      const task = await canvas.findByTestId(`task-1`)
      await expect(task).toBeInTheDocument()

      await step('👇 Search for the checkbox and verify that it is not checked', async () => {
        const checkbox: HTMLInputElement = await findByRole(task, 'archive-task')
        await expect(checkbox.checked).toBe(false)

        await step('👇 Search for the input text and verify that it contains the correct color "gray-500" and is not crossed out', async () => {
          const input = await findByRole(task, 'input-task')
          await expect(input.className).toContain('text-gray-500')
          await expect(input.className).not.toContain('line-through')

          await step('👇 Click on the checkbox, verify that the text changes to the "gray-200" color, becomes crossed out, and the button-icon-task is no longer displayed', async () => {
            await userEvent.click(checkbox, { detail: 100 })
            await expect(checkbox).toBeChecked()
            await waitFor(() => expect(input.className).toContain('line-through text-gray-200') )
            await waitFor(() => expect(queryByRole(task, 'button-icon-task')).toBeNull())
          })
        })
      })
    })
  },
}
