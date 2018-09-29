import React from 'react'
// import router moduels
import { Link } from "react-router-dom"

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
				<Link key={item.id} className='item'
					to={{
						pathname:`/movie/${item.id}`,
						state:{movie:item}
					}}>
					<img 
						src={`${location.pathname.replace(/\w/g, '')
							.split("").join('..')}${item.img}`}
						title={item.name}
						alt={item.name}/>
					<span className='item-name'>{item.name}</span>
				</Link>
			))}
		</div>
	)
}
