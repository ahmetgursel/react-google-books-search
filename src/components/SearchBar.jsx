import React from 'react';

const SearchBar = ({ handleSearchBarOnChange, handleSearchBarKeyDown }) => {
	return (
		<div className='mb-3 md:w-96'>
			<input
				type='search'
				className='
                form-control
                block
                w-full
                px-3
                py-1.5
                text-xl
                font-bold
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none
                '
				id='bookSearch'
				placeholder='Enter book title..'
				onChange={handleSearchBarOnChange}
				onKeyDown={handleSearchBarKeyDown}
			/>
		</div>
	);
};

export default SearchBar;
