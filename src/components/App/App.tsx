import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { fetchData } from '../services/api.js';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from '../ImageModal/ImageModal.jsx';
import { Loader } from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import { Image, SelectedImage } from './App.types';

export default function App() {
	const [images, setImages] = useState<Image[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [isloading, setisLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [page, setPage] = useState<number>(1);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [selectedImages, setSelectedImages] = useState<SelectedImage | null>(
		null
	);

	useEffect(() => {
		if (!searchQuery) {
			return;
		}
		const getImages = async () => {
			setisLoading(true);

			try {
				const data = await fetchData(searchQuery, page);
				setImages((prevImages) => {
					return [...prevImages, ...data.results];
				});
			} catch (error) {
				setError(true);
			} finally {
				setisLoading(false);
			}
		};
		getImages();
	}, [searchQuery, page]);

	const handleSearch = (newQuery: string) => {
		if (searchQuery === newQuery) {
			return;
		}
		setSearchQuery(newQuery);
		setPage(1);
		setImages([]);
		setError(false);
	};

	const handleLoadMore = () => {
		setPage(page + 1);
	};

	const handleClose = () => {
		setIsModalOpen(false);
	};

	const handleModalOpen = (data: Image) => {
		setIsModalOpen(true);
		setSelectedImages({
			src: data.urls.full,
			description: data.description,
		});
	};

	return (
		<>
			<SearchBar onSearch={handleSearch} />
			{isloading && <Loader />}
			{error && <ErrorMessage />}
			{images.length > 0 && (
				<ImageGallery images={images} onSelect={handleModalOpen} />
			)}
			{images.length > 0 && !isloading && (
				<LoadMoreBtn onClick={handleLoadMore} isLoading={isloading} />
			)}
			{selectedImages && (
				<ImageModal
					isOpen={isModalOpen}
					image={selectedImages}
					onClose={handleClose}
				/>
			)}
		</>
	);
}
