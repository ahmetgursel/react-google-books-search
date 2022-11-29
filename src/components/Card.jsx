import React from 'react';

const Card = ({ thumbnail, title }) => {
	return (
		<>
			<div className='px-5 pt-2 m-5 w-80'>
				<div className='flex flex-col items-center justify-center mt-5'>
					<img className='p-1 border border-gray-200 w-52 h-52' src={thumbnail} alt='' />
					<div className='flex mt-3 space-x-2 text-sm font-medium text-yellow-500 uppercase'>
						<p className='hover:cursor-pointer hover:underline'>Preview</p>
						<span>|</span>
						<p className='hover:cursor-pointer hover:underline'>Details</p>
					</div>
					<div className='w-full mt-3 text-sm font-medium text-center text-yellow-500 uppercase break-words hover:cursor-default'>
						{title}
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
