import _ from "lodash"
import React from "react"
import "./container.css"

export interface ContainerProps {
	children?: React.ReactNode
	backgroundColor?: string
}

const Container = ({children, ...props}: ContainerProps) => {
	return (
		<div className={["storybook-container"].join(" ")} {...props}>
			{children}
		</div>
	)
}

export default Container
