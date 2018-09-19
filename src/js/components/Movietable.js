import React from 'react';

export default function(props){
	return (
		<table>
			<thead>
				<tr>
					<th colSpan='2'>
						<h2>{props.state.name}</h2>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						lang - city
					</td>
					<td>
						english - us
					</td>
				</tr>
				<tr>
					<td>
						from
					</td>
					<td>
						pg-13
					</td>
				</tr>
				<tr>
					<td>
						sex
					</td>
					<td>
						action-horror
					</td>
				</tr>
				<tr>
					<td>
						rate
					</td>
					<td>
						{props.state.rate}
					</td>
				</tr>
				<tr>
					<td>
						time
					</td>
					<td>
						1:49:50
					</td>
				</tr>
				<tr>
					<td>
						hd
					</td>
					<td>
						{props.state.ribbon}
					</td>
				</tr>
			</tbody>
		</table>
	)
}