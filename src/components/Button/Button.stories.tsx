import React from "react"
import {Meta} from "@storybook/react/types-6-0"
import {Story} from "@storybook/react"
import Button, {ButtonProps} from "./Button"

export default {
	title: "Components/Button",
	component: Button,
} as Meta

// Создайте главный шаблон для сопоставления аргументов для рендеринга компонента Button
const Template: Story<ButtonProps> = (args) => <Button {...args} />

// Повторно используйте этот шаблон для создания разных историй
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
