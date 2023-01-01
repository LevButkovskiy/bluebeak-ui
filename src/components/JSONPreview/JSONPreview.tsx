import _ from "lodash"
import React from "react"
import "./jsonPreview.css"

export interface JSONPreviewProps {
	value?: any
}

const JSONPreview = ({value = "", ...props}: JSONPreviewProps) => {
	function previewJSON(jsonString: any) {
		let json = jsonString
		if (!_.isObject(json)) {
			try {
				JSON.parse(jsonString)
			} catch (e: any) {
				return e.toString()
			}
		}

		type ObjectPresentationType = {
			title: string
			value: any
			level: number
			nested?: boolean
		}

		function ObjectPresentation({title, value, level, nested = false}: ObjectPresentationType) {
			return (
				<span style={{marginLeft: level * 20 + "px"}}>
					<strong>{title}:</strong> {nested && <br />}
					{value}
					{!nested && <br />}
				</span>
			)
		}

		function parseObject(object: object, level: number = 0) {
			return Object.keys(object).map((key) => {
				const value = _.get(object, key)

				if (_.isObject(value)) {
					return <ObjectPresentation key={key + level} title={key} value={parseObject(value, level + 1)} level={level} nested={true} />
				}
				return <ObjectPresentation key={key + level} title={key} value={JSON.stringify(value)} level={level} />
			})
		}

		let level = 0
		return parseObject(json, level)
	}

	return (
		<div className={["storybook-jsonPrivew"].join(" ")} {...props}>
			<div className={["storybook-jsonPreview-data"].join(" ")}>{previewJSON(value)}</div>
		</div>
	)
}

export default JSONPreview
