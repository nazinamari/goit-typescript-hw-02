import { Image, SelectedImage } from '../App/App.types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
	images: Image[];
	onSelect: (data: SelectedImage) => void;
}

export default function ImageGallery({ images, onSelect }: ImageGalleryProps) {
	return (
		<ul className={css.gallery__list}>
			{images.map((image) => (
				<li className={css.gallery__item} key={image.id}>
					<ImageCard image={image} onSelect={onSelect} />
				</li>
			))}
		</ul>
	);
}
