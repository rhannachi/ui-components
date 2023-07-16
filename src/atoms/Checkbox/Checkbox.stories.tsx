import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { COLORS_CHECKBOX, SIZES_CHECKBOX } from './types'
import { userEvent, within } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'atoms/Checkbox',
  argTypes: {
    color: {
      options: COLORS_CHECKBOX,
      control: 'select',
    },
    size: {
      options: SIZES_CHECKBOX,
      control: 'select',
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'onChange' },
  },
  decorators: [(story) => <div className='p-14'>{story()}</div>],
}
export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    color: 'cyan',
    size: 'base',
    checked: true,
    label: '',
    disabled: false,
    role: 'checkbox',
  },
}

export const Label: Story = {
  args: { ...Default.args, label: 'checkbox label test' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Validate that the checkbox can be disabled', async () => {
      const firstElement = await canvas.getByRole('checkbox').parentElement
      await expect(firstElement?.children[2].innerHTML).toBe('checkbox label test')
    })
  },
}

const onChangeMock = jest.fn()

export const SelectedDeselected: Story = {
  name: 'Selected/Deselected',
  args: { ...Default.args, checked: false, onChange: onChangeMock },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Check that the checkbox can be selected and deselected', async () => {
      const firstElement = await canvas.getByRole('checkbox')

      await expect(firstElement).not.toBeChecked()
      await expect(onChangeMock).toBeCalledWith(false)

      await userEvent.click(firstElement, { detail: 100 })
      await expect(onChangeMock).toBeCalledWith(true)
      await expect(firstElement).toBeChecked()

      await userEvent.click(firstElement, { detail: 100 })
      await expect(firstElement).not.toBeChecked()
      await expect(onChangeMock).toBeCalledWith(false)
    })
  },
}

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Validate that the checkbox can be disabled', async () => {
      const firstElement = await canvas.getByRole('checkbox').parentElement
      await expect(firstElement?.children[0]).toBeDisabled()
      await expect(firstElement?.children[1].className).toContain('border-gray-200')
      await expect(firstElement?.children[2].className).toContain('text-gray-200')
    })
  },
}

/**
 * COLOR
 */
export const ColorRed: Story = {
  args: { ...Default.args, color: 'red' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Check that the checkbox is red in color', async () => {
      const firstElement = await canvas.getByRole('checkbox').parentElement
      await expect(firstElement?.children[1].className).toContain('border-red-400')
    })
  },
}
export const ColorCyan: Story = {
  args: { ...Default.args, color: 'cyan' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Check that the checkbox is cyan in color', async () => {
      const firstElement = await canvas.getByRole('checkbox').parentElement
      await expect(firstElement?.children[1].className).toContain('border-cyan-400')
    })
  },
}
export const ColorGray: Story = {
  args: { ...Default.args, color: 'gray' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Check that the checkbox is gray in color', async () => {
      const firstElement = await canvas.getByRole('checkbox').parentElement
      await expect(firstElement?.children[1].className).toContain('border-gray-400')
    })
  },
}

/**
 * SIZE
 */
export const SizeSm: Story = {
  args: { ...Default.args, size: 'sm' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Check that the checkbox is size sm', async () => {
      const firstElement = await canvas.getByRole('checkbox').parentElement
      await expect(firstElement?.children[0].className).toContain('w-4 h-4')
      await expect(firstElement?.children[1].className).toContain('w-4 h-4')
    })
  },
}
export const SizeBase: Story = {
  args: { ...Default.args, size: 'base' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Check that the checkbox is size base', async () => {
      const firstElement = await canvas.getByRole('checkbox').parentElement
      await expect(firstElement?.children[0].className).toContain('w-5 h-5')
      await expect(firstElement?.children[1].className).toContain('w-5 h-5')
    })
  },
}
export const SizeLg: Story = {
  args: { ...Default.args, size: 'lg' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Check that the checkbox is size lb', async () => {
      const firstElement = await canvas.getByRole('checkbox').parentElement
      await expect(firstElement?.children[0].className).toContain('w-6 h-6')
      await expect(firstElement?.children[1].className).toContain('w-6 h-6')
    })
  },
}
