import _ from "lodash"
import React from "react"
import "./card.css"

export interface CardProps {
	children?: React.ReactNode
	backgroundColor?: string
	size?: "big" | "medium"
}

const Card = ({children, backgroundColor = "#fff", size = "medium", ...props}: CardProps) => {
	return (
		<div className={["storybook-card", `storybook-card--${size}`].join(" ")} style={{backgroundColor}} {...props}>
			{children}
		</div>
	)
}

export default Card
