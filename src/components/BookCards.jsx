import { useEffect, useState } from 'react';
import Card from './Card';
import SearchBar from './SearchBar';

// TODO: modal for detail
// TODO: loading component

const BookCards = () => {
	const [searchText, setSearchText] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);

	const handleSearchBarOnChange = (event) => {
		setSearchText(event.target.value);
	};

	const handleSearchBarKeyDown = async (event) => {
		if (event.key !== 'Enter') {
			return;
		}

		event.target.value = '';
		setIsLoading(true);

		try {
			const response = await fetch(
				`https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURI(
					searchText
				)}&printType=books&orderBy=newest&maxResults=40`,
				{
					method: 'GET',
					headers: {
						Accept: 'application/json',
					},
				}
			);

			if (!response.ok) {
				throw new Error(`Error! status: ${response.status}`);
			}

			const result = await response.json();
			setData(result);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		console.log(isLoading);
		console.log(data);
	}, [data, isLoading]);

	return (
		<>
			<div className='flex justify-center mt-12'>
				<SearchBar
					handleSearchBarOnChange={handleSearchBarOnChange}
					handleSearchBarKeyDown={handleSearchBarKeyDown}
				/>
			</div>
			<div className='flex justify-center'>
				<div className='flex flex-wrap justify-center w-10/12 mt-12 md:w-4/5'>
					{data &&
						data.items.map((data, index) => (
							<Card
								key={index}
								thumbnail={data.volumeInfo.imageLinks.thumbnail}
								title={data.volumeInfo.title}
							/>
						))}
				</div>
			</div>
		</>
	);
};

export default BookCards;
