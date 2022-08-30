import React from 'react'
import { ComponentStory } from '@storybook/react'

import { ColorButton } from './ColorButton'
export default {
    component: ColorButton,
    title: 'ColorButton',
    argTypes: {},
}

const Template: ComponentStory<typeof ColorButton> = (args) => (
    <ColorButton {...args} />
)

export const Red = Template.bind({})
Red.args = {
    bgColor: 'bg-red-500',
    fontColor: 'text-white',
}
