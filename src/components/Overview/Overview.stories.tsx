import React from "react"
import {Meta} from "@storybook/react/types-6-0"
import {Story} from "@storybook/react"
import Overview, {OverviewProps} from "./Overview"

export default {
	title: "Components/Overview",
	component: Overview,
} as Meta

const Template: Story<OverviewProps> = (args) => <Overview {...args} />

export const OverviewDefault = Template.bind({})
OverviewDefault.args = {
	label: "Humidity",
	value: "20%",
}

export const OverviewWithIcon = Template.bind({})
OverviewWithIcon.args = {
	...OverviewDefault.args,
	label: "Secondary 😇",
	icon: "2",
}

export const OverviewWithPostfix = Template.bind({})
OverviewWithPostfix.args = {
	...OverviewDefault.args,
	label: "Secondary 😇",
	icon: "2",
	postfix: "inc 8.px",
}
