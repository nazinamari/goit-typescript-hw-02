import ReactModal from 'react-modal';
import css from './ImageModal.module.css';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { SelectedImage } from '../App/App.types';

ReactModal.setAppElement(document.getElementById('root'));

interface ImageModalProps {
	isOpen: boolean;
	image: SelectedImage;
	onClose: () => void;
}

export default function ImageModal({
	isOpen,
	image,
	onClose,
}: ImageModalProps) {
	console.log(image.description);
	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onClose}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
			preventScroll={true}
			className={css.modal}
			overlayClassName={`${css.overlay} ${isOpen ? css.overlayIsOpen : ''}`}
		>
			<div className={css.modalStyle}>
				<IoCloseCircleOutline className={css.exitCross} onClick={onClose} />
				<img src={image.src} className={css.img} />
				<p className={css.text}>{image.description}</p>
			</div>
		</ReactModal>
	);
}
