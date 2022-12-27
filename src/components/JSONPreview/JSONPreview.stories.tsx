import React from "react"
import {Meta} from "@storybook/react/types-6-0"
import {Story} from "@storybook/react"
import JSONPreview, {JSONPreviewProps} from "./JSONPreview"

export default {
	title: "Components/JSONPreview",
	component: JSONPreview,
} as Meta

const Template: Story<JSONPreviewProps> = (args) => <JSONPreview {...args} />

export const Primary = Template.bind({})
Primary.args = {
	value: "Primary 😃",
}

export const Secondary = Template.bind({})
Secondary.args = {
	...Primary.args,
	value: "Secondary 😇",
}
