import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import './index.scss'

class Switches extends Component {
	state = {
		activeIndex: 0
	}

	handleSwitch = ({ index }) => {
		this.setState({ activeIndex: index })
	}

	componentDidMount() {
		if (this.props.calcMinHeight) {
			const all = this.equipmentBlocks.querySelectorAll('switchable-block')
			let maxHeight = 0
			all.forEach(({ scrollHeight }) => {
				if (scrollHeight > maxHeight) maxHeight = scrollHeight
			})
			this.equipmentBlocks.style.minHeight = `${maxHeight}px`
		}
	}

	render() {
		const { data, title, className } = this.props
		const { activeIndex } = this.state
		const switches = data.map(({ title }, index) => {
			const handleClick = () => this.handleSwitch({ index })
			return (
				<label
					htmlFor={`equipment-${index}`}
					className={activeIndex === index ? 'active' : ''}
					onClick={handleClick}
					key={`equipment-${index}`}
				>
					{title}
				</label>
			)
		})

		return (
			<switches-container class={className}>
				<switches-content>
					<aside>{switches}</aside>
					<section ref={e => (this.equipmentBlocks = e)}>
						{data.map(({ content, className }, index) => {
							return (
								<Fragment key={`equipment-${index}`}>
									{switches[index]}
									<input
										type="radio"
										name="equipment"
										id={`equipment-${index}`}
										defaultChecked={!index}
									/>
									<switchable-block class={className}>{content}</switchable-block>
								</Fragment>
							)
						})}
					</section>
				</switches-content>
			</switches-container>
		)
	}
}

export default hot(module)(Switches)
