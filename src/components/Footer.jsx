import React from 'react';
import gitIcon from '../assets/githubIcon.png';

// TODO: github link etc.

const Footer = () => {
	return (
		<div className='flex justify-center my-14 pb-14'>
			<a className='flex items-center' href='https://github.com/ahmetgursel'>
				<img width={24} src={gitIcon} alt='' />
				<p className='ml-2 text-yellow-400'>ahmetgursel</p>
			</a>
		</div>
	);
};

export default Footer;
