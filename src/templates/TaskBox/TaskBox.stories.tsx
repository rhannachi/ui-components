import { Meta, StoryObj } from "@storybook/react"
import { expect } from '@storybook/jest'
import { screen, findByRole, fireEvent, prettyDOM, queryByRole, userEvent, waitFor, within } from "@storybook/testing-library"
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
  play: async ({ canvasElement })  => {
    const canvas = within(canvasElement)
    // TODO improvement - forof to test.each
    for (const { id } of tasksMock) {
      const task = await  canvas.getByTestId(`task-${id}`)
      await expect(task).toBeInTheDocument()
    }
  }
}

export const UnpinTask: Story = {
  args: {
    tasks: tasksMock.map((task) => ({...task, state: 'TASK_PINNED'})),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // console.log(prettyDOM(canvasElement))
    const task = await  canvas.getByTestId(`task-1`)
    await expect(task).toBeInTheDocument()
    // Find the pin button
    const pinButton = await findByRole(task, 'icon-task')
    // check if the color is 'cyan' (pin)
    await expect(pinButton.getElementsByClassName('fill-cyan-400').length).toBe(1)
    // // Click the pin button
    await userEvent.click(pinButton)
    // check if the color is 'cyan' (unpin)
    await expect(pinButton.getElementsByClassName('fill-gray-200').length).toBe(1)
  },
}

export const PinTask: Story = {
  args: {
    tasks: tasksMock.map((task) => ({...task, state: 'TASK_INBOX'})),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // console.log(prettyDOM(canvasElement))
    const task = await  canvas.getByTestId(`task-1`)
    await expect(task).toBeInTheDocument()
    // Find the pin button
    const pinButton = await findByRole(task, 'icon-task')
    // check if the color is 'cyan' (pin)
    await expect(pinButton.getElementsByClassName('fill-gray-200').length).toBe(1)
    // // Click the pin button
    await userEvent.click(pinButton)
    // check if the color is 'cyan' (unpin)
    await expect(pinButton.getElementsByClassName('fill-cyan-400').length).toBe(1)
  },
}

export const DisabledEditTask: Story = {
  args: {
    tasks: tasksMock.map((task) => ({...task, state: 'TASK_INBOX'})),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // console.log(prettyDOM(canvasElement))
    const task = await  canvas.getByTestId(`task-1`)
    await expect(task).toBeInTheDocument()
    // Find the input task
    // console.log(prettyDOM(task))
    const input: HTMLInputElement = await findByRole(task, 'input-task')
    // console.log(prettyDOM(taskInput))
    await userEvent.type(input, 'Task Test')
    await expect(input.value).toBe('Task 1')
  },
}

export const ArchiveTask: Story = {
  args: {
    tasks: tasksMock.map((task) => ({...task, state: 'TASK_INBOX'})),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // console.log(prettyDOM(canvasElement))
    const task = await canvas.findByTestId(`task-1`)
    await expect(task).toBeInTheDocument()
    // Find the input task
    const checkbox: HTMLInputElement = await findByRole(task, 'archive-task')
    //
    await expect(checkbox.checked).toBe(false)
    //
    const input: HTMLInputElement = await findByRole(task, 'input-task')
    // console.log(prettyDOM(input))
    //
    await expect(input.className).toContain('text-gray-500')
    //
    await userEvent.click(checkbox)
    await expect(checkbox).toBeChecked()
    //
    await waitFor(() => expect(input.className).toContain('line-through text-gray-200') )
    //
    await waitFor(() => expect(queryByRole(task, 'icon-task')).toBeNull())

  },
}
