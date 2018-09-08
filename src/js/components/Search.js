import React from 'react';

export default function ({handelChange, value})
{
	return (
		<form>
			<div className='input'>
				<input type='text' 
						name='search'
						aria-label='search movize'
						id='search'
						required='required' 
						autoComplete='off'
						value={value}
						onChange={handelChange}/>
				<label htmlFor='search' className='placeholder'>
					search for movize or tv or actor ...
				</label>
				<span className='placeholder-icon'>
					<i className="fa fa-search" aria-hidden="true"></i>
				</span>
			</div>
		</form>
	)
}
