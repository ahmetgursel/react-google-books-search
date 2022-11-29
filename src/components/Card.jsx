import { memo, useState } from 'react';
import NoCover from '../assets/no_book_cover.jpg';
import DetailModal from './DetailModal';

const Card = ({ thumbnail, title, desc, page, publisher, publishDate }) => {
	const [showModal, setShowModal] = useState(false);

	if (typeof thumbnail === 'undefined') {
		thumbnail = NoCover;
	}

	const detailsBtnHandle = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<>
			{showModal ? (
				<DetailModal
					handleCloseModal={handleCloseModal}
					title={title}
					desc={desc}
					page={page}
					publisher={publisher}
					publishDate={publishDate}
				/>
			) : null}
			<div className='px-5 pt-2 m-5 w-80'>
				<div className='flex flex-col items-center justify-center mt-5'>
					<img className='p-0 rounded-lg w-52 h-52' src={thumbnail} alt='' />
					<div className='flex mt-3 space-x-2 text-sm font-medium text-yellow-500 uppercase'>
						<p className='hover:cursor-pointer hover:underline'>Preview</p>
						<span>|</span>
						<p className='hover:cursor-pointer hover:underline' onClick={detailsBtnHandle}>
							Details
						</p>
					</div>
					<div className='w-full mt-3 text-sm font-medium text-center text-yellow-500 uppercase break-words hover:cursor-default'>
						{title}
					</div>
				</div>
			</div>
		</>
	);
};

export default memo(Card);
