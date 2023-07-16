import { prettyDOM } from '@storybook/testing-library'

export const logDom = (element?: Element | null) => console.log(element && prettyDOM(element))
