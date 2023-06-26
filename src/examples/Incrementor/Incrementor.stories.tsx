import { within, userEvent } from "@storybook/testing-library"
import { expect } from "@storybook/jest"
import Incrementor  from "./Incrementor"
import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Incrementor> = {
  component: Incrementor,
  title: "Incrementor",
  // argTypes: { ... },
}

export default meta

type Story = StoryObj<typeof Incrementor>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Increment by one
    const incrementButton = await canvas.findByTestId("increment-button")
    await userEvent.click(incrementButton)
    await expect(
      await canvas.findByText("Button clicked 1 times")
    ).toBeInTheDocument()

    // Increment again by one
    await userEvent.click(incrementButton)
    await expect(
      await canvas.findByText("Button clicked 2 times")
    ).toBeInTheDocument()

    // Reset
    const resetButton = await canvas.findByTestId("reset-button")
    await userEvent.click(resetButton)
    await expect(
      await canvas.findByText("Button clicked 0 times")
    ).toBeInTheDocument()
  }
}



