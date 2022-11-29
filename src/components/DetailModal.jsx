import React from 'react';

const DetailModal = ({ handleCloseModal, title, desc, page, publisher, publishDate }) => {
	return (
		<>
			<div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
				<div className='relative w-11/12 mx-auto my-6 md:w-auto md:max-w-3xl'>
					{/*content*/}
					<div className='relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
						{/*header*/}
						<div className='flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200'>
							<h3 className='flex flex-col text-lg font-semibold md:text-2xl'>
								{title}
								<span>
									{page} / {publisher} / {publishDate}
								</span>
							</h3>
							<button
								className='float-right p-1 ml-auto text-lg font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none'
								onClick={handleCloseModal}
							>
								<span className='block w-6 h-6 text-lg text-black bg-transparent outline-none opacity-5 focus:outline-none'>
									×
								</span>
							</button>
						</div>
						{/*body*/}
						<div className='relative flex-auto p-2 text-xs text-gray-700 md:text-md'>
							<p className='my-2 leading-relaxed '>{desc}</p>
						</div>
						{/*footer*/}
						<div className='flex items-center justify-end p-2 rounded-b border-slate-200'>
							<button
								className='px-4 py-2 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-purple-800 rounded shadow outline-none md:text-lg active:bg-purple-900 hover:shadow-lg focus:outline-none'
								type='button'
								onClick={handleCloseModal}
							>
								CLOSE
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='fixed inset-0 z-40 bg-black opacity-25'></div>
		</>
	);
};

export default DetailModal;
