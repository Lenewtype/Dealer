import * as React from 'react';
import * as _ from 'lodash';
import './colorSelector.css';   

export interface Props {
	selectedColor: string,
	colors: Array<string>,
	colorNames: Object,
	onColorChange(colot:string): void
}

function ColorSelector({ selectedColor, colors, colorNames, onColorChange } : Props) {
	return (
		<div className="color-selector">
			{_.map(colors, (color, index) => {
				return (
					<div 
						className={`color-selector__option ${color === selectedColor? 'color-selector__option--selected': ''}`}
						onClick={()=> onColorChange(color)}
						key={color + '-option'}
						style={{backgroundColor: '#'+color}}
						title={colorNames[color]}
					></div>
				);
			})}
		</div>
	)
}

export default ColorSelector;