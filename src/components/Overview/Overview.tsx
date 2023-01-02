import _ from "lodash"
import React from "react"
import "./overview.css"

export interface OverviewProps {
	value?: any
	label: string
	icon: any
	postfix: string
}

const Overview = ({value = "", label = "", icon = "", postfix = "", ...props}: OverviewProps) => {
	return (
		<div className={["storybook-overview"].join(" ")} {...props}>
			{icon && <div className='storybook-overview-icon'>{icon}</div>}
			<div className='storybook-overview-content'>
				<div className='storybook-overview-content-label'>{label}</div>
				<div className='storybook-overview-content-value'>{value}</div>
			</div>
			{postfix && <div className='storybook-overview-postfix'>{postfix}</div>}
		</div>
	)
}

export default Overview
