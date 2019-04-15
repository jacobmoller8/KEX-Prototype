import React from 'react'
import { DropTarget } from 'react-drag-drop-container'
import './DndTrash.css'

let dropZoneStyle = { display: 'none' }

export default function DndTrash(props) {
	let hoverDropZone = props.overDropZone

	if (props.dragging && !hoverDropZone) {
		dropZoneStyle = { display: 'inline-block', backgroundColor: '#75AC4A' }
	} else if (props.dragging && hoverDropZone) {
		dropZoneStyle = { display: 'inline-block', transform: 'scale(1.15, 1.15)', transition: 'all .2s ease'}
	} else {
		dropZoneStyle = { display: 'none' }
	}
	return (
		<div className="container-fluid dropTargetContainer col-12" style={dropZoneStyle}>
			<DropTarget
				targetKey="trashBin"
				onDragEnter={() => props.onEnter()}
				onDragLeave={() => props.onLeave()}>
					<img id="dropTargetImage" src={require('../../../Images/Icons/delete.svg')} alt="trashBin"></img>
			</DropTarget>
		</div>
	)
}
