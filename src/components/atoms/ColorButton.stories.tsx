import React from 'react'
import { ComponentStory } from '@storybook/react'

import { ColorButton } from './ColorButton'
export default {
    component: ColorButton,
    title: 'Atoms/ColorButton',
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
export const Yellow = Template.bind({})
Yellow.args = {
    bgColor: 'bg-yellow-500',
    fontColor: 'text-black',
}
export const Green = Template.bind({})
Green.args = {
    bgColor: 'bg-green-500',
    fontColor: 'text-white',
}
