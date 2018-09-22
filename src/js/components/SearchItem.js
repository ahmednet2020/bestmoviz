import React from 'react';

export default function({items})
{
	let showORhidden;
	if(items.length === 0)
	{
		showORhidden = {
			'display':'none'
		}
	} else {
		showORhidden = {
			'display':'block'
		}
	}
	return (
		<div className='search-item' style={showORhidden}>
			{items.map((item,i)=> (
				<div key={i}>{item.name}</div>
			))}
		</div>
	)
}
