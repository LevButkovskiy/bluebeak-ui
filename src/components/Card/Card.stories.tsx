import React from "react"
import {Meta} from "@storybook/react/types-6-0"
import {Story} from "@storybook/react"
import Card, {CardProps} from "./Card"

export default {
	title: "Components/Card",
	component: Card,
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args}>children</Card>

export const Primary = Template.bind({})
Primary.args = {}
