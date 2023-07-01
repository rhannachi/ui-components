import { Meta, StoryObj } from "@storybook/react"
import Checkbox from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'atoms/Checkbox',
}
export default meta
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'onChange' }
  },
  args: {
    checked: true,
    label: 'checkbox',
    disabled: false,
  }
}
