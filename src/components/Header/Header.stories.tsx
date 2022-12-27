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
	logoUrl:
		"https://downloader.disk.yandex.ru/preview/43c2a37ec688539b888008d2bc70fcffa834c7f356122f72b59234a537274c41/63ab3de5/NB5MR2Mx0RhIchHwWbMX8B_oiLjsyh1hvntDQgwmkgKgYT32MnjVIOnxHLUOXKzQbbc1ebTbNt8sTLZAF3YP6A%3D%3D?uid=0&filename=logoBlack.svg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
	label: "BlueBeak",
}
