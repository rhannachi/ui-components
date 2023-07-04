import { Meta, StoryObj } from "@storybook/react"
import Checkbox, { COLORS_CHECKBOX, SIZES_CHECKBOX } from "./Checkbox"

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'atoms/Checkbox',
}
export default meta
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  argTypes: {
    color: {
      options: COLORS_CHECKBOX,
      control: 'select'
    },
    size: {
      options: SIZES_CHECKBOX,
      control: 'select'
    },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'onChange' }
  },
  args: {
    color: 'cyan',
    size: 'base',
    checked: true,
    label: 'checkbox',
    disabled: false,
  }
}