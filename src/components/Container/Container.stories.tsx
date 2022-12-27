import React from "react"
import {Meta} from "@storybook/react/types-6-0"
import {Story} from "@storybook/react"
import Container, {ContainerProps} from "./Container"
import Card from "../Card"

export default {
	title: "Components/Container",
	component: Container,
} as Meta

const Template: Story<ContainerProps> = (args) => (
	<Container {...args}>
		<Card>cdfsf</Card>
		<Card>cdfsf</Card>
		<Card>cdfsf</Card>
	</Container>
)

export const Primary = Template.bind({})
Primary.args = {}
