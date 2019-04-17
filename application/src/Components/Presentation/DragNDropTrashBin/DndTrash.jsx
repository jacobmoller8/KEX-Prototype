import React from 'react'
import { DropTarget } from 'react-drag-drop-container'
import './DndTrash.css'

let dropZoneStyle = { display: 'none' }

export default function DndTrash(props) {

	if (props.dragging) {
		dropZoneStyle = { display: 'inline-block', backgroundColor: '#75AC4A' }
	}
	else {
		dropZoneStyle = { display: 'none' }
	}
	return (
		<DropTarget className="dropTar" targetKey="trashBin">

			<div className="container-fluid dropTargetContainer col-12" style={dropZoneStyle}>
				<img id="dropTargetImage" src={require('../../../Images/Icons/delete.svg')} alt="trashBin"></img>
			</div>
		</DropTarget>
	)
}
