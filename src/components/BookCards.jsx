import { useEffect, useState } from 'react';
import { SpinnerCircular } from 'spinners-react';
import Card from './Card';
import SearchBar from './SearchBar';

const BookCards = () => {
	const [searchText, setSearchText] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const [url, setUrl] = useState('');

	const handleSearchBarOnChange = (event) => {
		setSearchText(event.target.value);
	};

	const handleSearchBarKeyDown = async (event) => {
		if (event.key !== 'Enter') {
			return;
		}

		event.target.value = '';
		setIsLoading(true);
		setUrl(
			`https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURI(
				searchText
			)}&printType=books&orderBy=newest&maxResults=40`
		);
	};

	useEffect(() => {
		const fetchData = async () => {
			await fetch(url, {
				method: 'GET',
				headers: {
					Accept: 'application/json',
				},
			})
				.then((resp) => resp.json())
				.then((data) => setData(data.items))
				.catch((err) => console.log(err))
				.finally(() => setIsLoading(false));
		};

		fetchData();
	}, [url]);

	return (
		<>
			<SearchBar
				handleSearchBarOnChange={handleSearchBarOnChange}
				handleSearchBarKeyDown={handleSearchBarKeyDown}
			/>

			<div className='flex justify-center'>
				<div className='flex flex-wrap justify-center w-10/12 mt-12 md:w-4/5'>
					{data &&
						(!isLoading ? (
							data.map((item, index) => (
								<Card
									key={index}
									thumbnail={item.volumeInfo.imageLinks?.thumbnail}
									title={item.volumeInfo.title}
									desc={item.volumeInfo.description}
									page={item.volumeInfo.pageCount}
									publisher={item.volumeInfo.publisher}
									publishDate={item.volumeInfo.publishedDate}
								/>
							))
						) : (
							<div className='mt-20'>
								<SpinnerCircular color='#facc15' />
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default BookCards;
