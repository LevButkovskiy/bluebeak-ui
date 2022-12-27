import React from "react"
import {Meta} from "@storybook/react/types-6-0"
import {Story} from "@storybook/react"
import Header, {HeaderProps} from "./Header"

export default {
	title: "Components/Header",
	component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Primary = Template.bind({})
Primary.args = {
	label: "Primary 😃",
	size: "large",
}

export const Secondary = Template.bind({})
Secondary.args = {
	...Primary.args,
	primary: false,
	label: "Secondary 😇",
}
