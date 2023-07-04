import { Meta, StoryObj } from "@storybook/react"
import { Icon, COLORS_ICON, SIZES_ICON, ICONS } from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'atoms/Icon',
}
export default meta
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  argTypes: {
    icon: {
      options: ICONS,
      control: 'select'
    },
    color: {
      options: COLORS_ICON,
      control: 'select'
    },
    size: {
      options: SIZES_ICON,
      control: 'select'
    }
  },
  args: {
    icon: 'star',
    size: 'base',
    color: 'fill-black'
  }
}