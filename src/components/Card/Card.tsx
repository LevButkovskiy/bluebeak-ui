import _ from "lodash"
import React from "react"
import "./card.css"

export interface CardProps {
	children?: React.ReactNode
	backgroundColor?: string
}

const Card = ({children, backgroundColor = "#fff", ...props}: CardProps) => {
	return (
		<div className={["storybook-card"].join(" ")} style={{backgroundColor}} {...props}>
			{children}
		</div>
	)
}

export default Card
