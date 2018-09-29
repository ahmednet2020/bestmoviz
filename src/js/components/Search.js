import React from 'react';

export default function ({handelChange, handelBlur, handelFocus, value, clear})
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
						onChange={handelChange}
						onBlur={handelBlur}
						onFocus={handelFocus}
						value={value}/>
				<label htmlFor='search' className='placeholder'>
					search for movize or tv or actor ...
				</label>
				<span className='placeholder-icon'>
					<i className="fa fa-search" aria-hidden="true"></i>
				</span>
				<span className={`clear-icon ${value? '' : 'hidden' }`} onClick={clear} id='search-clear'>
					<i className="fa fa-times" aria-hidden="true"></i>
				</span>
			</div>
		</form>
	)
}
