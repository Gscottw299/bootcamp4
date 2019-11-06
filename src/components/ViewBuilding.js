import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding } = this.props;
		//const selection = data.id.indexOf(selectedBuilding)
		const code = data[selectedBuilding - 1].code
		const name = data[selectedBuilding - 1].name
		const selection = data[selectedBuilding - 1].address
		return (
			<div>
				<div>{code}</div>
				<div>{name}</div>
				<div>{selection}</div>
			</div>

		);
	}
}
export default ViewBuilding;
