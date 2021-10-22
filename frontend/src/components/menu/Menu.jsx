import React from 'react'
import "./Menu.scss"

export const Menu = () => {
	return (
		<div className="menu">
			<ul>
				<li>
					<a href="#intro">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#methodology">Methodology</a>
				</li>
				<li>
					<a href="#contact">Contact Us</a>
				</li>
			</ul>
		</div>
	)
}
