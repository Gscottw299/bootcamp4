import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data
			.filter(directory => {
				return directory.name.indexOf(filterText) >= 0
			})
			.map(directory => {
				return (
					<tr
					key={directory.id}
					onClick={() => selectedUpdate(directory.id)}
					>
						<td>{directory.code} </td>
						<td> {directory.name} </td>

					</tr>
				)
			});
		//result = buildingList.filter(directory.name)

		return <div><ul>{buildingList}</ul></div>;
	}
}
export default BuilingList;
