import React from 'react';

export default function({items, location})
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
			{items.map((item)=> (
				<div key={item.id} className='item'>
					<img src={`${location.pathname.replace(/\w/g, '').split("").join('..')}${item.img}`} title={item.name} alt={item.name}/>
					<span className='item-name'>{item.name}</span>
				</div>
			))}
		</div>
	)
}
