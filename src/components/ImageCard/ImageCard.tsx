import { Image, SelectedImage } from '../App/App.types';
import css from './ImageCard.module.css';

interface ImageCardProps {
	image: Image;
	onSelect: (data: SelectedImage) => void;
}

export default function ImageCard({
	image: { urls, description, alt_description },
	onSelect,
}: ImageCardProps) {
	return (
		<div
			className={css.wrapper}
			onClick={() =>
				onSelect({
					src: urls.regular,
					description: description,
				})
			}
		>
			<img className={css.img} src={urls.small} alt={alt_description} />
		</div>
	);
}
