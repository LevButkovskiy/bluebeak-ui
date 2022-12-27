import React from "react"
import Container from "../Container"
import "./header.css"

export interface HeaderProps {
	logoUrl: string
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean
	/**
	 * What background color to use
	 */
	backgroundColor?: string
	/**
	 * Button contents
	 */
	label: string
	/**
	 * Optional click handler
	 */
	onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
const Header = ({primary = false, logoUrl, backgroundColor, label, ...props}: HeaderProps) => {
	return (
		<header className={["storybook-header"].join(" ")} style={{backgroundColor}} {...props}>
			<Container>
				<div className={["storybook-header-content"].join(" ")}>
					<img className={["storybook-header-logo"].join(" ")} src={logoUrl} />
					<div className={["storybook-header-title"].join(" ")}>{label}</div>
				</div>
			</Container>
		</header>
	)
}

export default Header
