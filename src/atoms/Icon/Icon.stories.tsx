import { Meta, StoryObj } from '@storybook/react'
import { COLORS_ICON, SIZES_ICON, ICONS } from './types'
import { Icon } from './Icon'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'atoms/Icon',
  argTypes: {
    icon: {
      options: ICONS,
      control: 'select',
    },
    color: {
      options: COLORS_ICON,
      control: 'select',
    },
    size: {
      options: SIZES_ICON,
      control: 'select',
    },
  },
  decorators: [(story) => <div className='p-14'>{story()}</div>],
}
export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    icon: 'star',
    size: 'base',
    color: 'fill-black',
  },
}
/**
 * COLOR
 */
export const ColorRed: Story = {
  args: { ...Default.args, color: 'fill-red-500', role: 'icon' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Verify that the icon has the color red', async () => {
      await expect(canvas.getByRole('icon')).toHaveClass('fill-red-500')
    })
  },
}
export const ColorCyan: Story = {
  args: { ...Default.args, color: 'fill-cyan-400', role: 'icon' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Verify that the icon has the color cyan', async () => {
      await expect(canvas.getByRole('icon')).toHaveClass('fill-cyan-400')
    })
  },
}
export const ColorAmber: Story = {
  args: { ...Default.args, color: 'fill-amber-500', role: 'icon' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Verify that the icon has the color amber', async () => {
      await expect(canvas.getByRole('icon')).toHaveClass('fill-amber-500')
    })
  },
}
export const ColorBlue: Story = {
  args: { ...Default.args, color: 'fill-blue-500', role: 'icon' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Verify that the icon has the color blue', async () => {
      await expect(canvas.getByRole('icon')).toHaveClass('fill-blue-500')
    })
  },
}
/**
 * SIZE
 */
export const SizeXs: Story = {
  args: { ...Default.args, size: 'xs', role: 'icon' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Verify that the icon is in size "xs"', async () => {
      await expect(canvas.getByRole('icon')).toHaveClass('w-3 h-3')
    })
  },
}
export const SizeSm: Story = {
  args: { ...Default.args, size: 'sm', role: 'icon' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Verify that the icon is in size "sm"', async () => {
      await expect(canvas.getByRole('icon')).toHaveClass('w-4 h-4')
    })
  },
}
export const SizeBase: Story = {
  args: { ...Default.args, size: 'base', role: 'icon' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Verify that the icon is in size "base"', async () => {
      await expect(canvas.getByRole('icon')).toHaveClass('w-5 h-5')
    })
  },
}
export const SizeLg: Story = {
  args: { ...Default.args, size: 'lg', role: 'icon' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Verify that the icon is in size "lg"', async () => {
      await expect(canvas.getByRole('icon')).toHaveClass('w-6 h-6')
    })
  },
}
export const SizeXl: Story = {
  args: { ...Default.args, size: 'xl', role: 'icon' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step('👇 Verify that the icon is in size "xl"', async () => {
      await expect(canvas.getByRole('icon')).toHaveClass('w-7 h-7')
    })
  },
}
