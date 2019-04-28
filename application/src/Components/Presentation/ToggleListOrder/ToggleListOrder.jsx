import React from 'react'
import MenuListComposition from '../../MaterialComponents/DropDownMenu/MenuListComposition'
import './ToggleListOrder.css'

export default function ToggleListOrder(props) {
	return (
		<div className="container-fluid col-4 orderListContainer">
			<div className="container-fluid orderBtnContainer">
				<MenuListComposition />
			</div>
		</div>
	)
}
