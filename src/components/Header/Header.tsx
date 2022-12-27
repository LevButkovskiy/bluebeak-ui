import React from "react"
import "./header.css"

export interface HeaderProps {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary?: boolean
	/**
	 * What background color to use
	 */
	backgroundColor?: string
	/**
	 * How large should the button be?
	 */
	size?: "small" | "medium" | "large"
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
const Header = ({primary = false, size = "medium", backgroundColor, label, ...props}: HeaderProps) => {
	const mode = primary ? "storybook-button--primary" : "storybook-button--secondary"
	return (
		<header className={["storybook-header", `storybook-header--${size}`, mode].join(" ")} style={{backgroundColor}} {...props}>
			<div className={["storybook-header-title"].join(" ")}>{label}</div>
		</header>
	)
}

export default Header
