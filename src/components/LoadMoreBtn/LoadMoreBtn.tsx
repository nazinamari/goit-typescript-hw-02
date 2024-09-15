import Button from '@mui/material/Button';

interface LoadMoreBtnProps {
	onClick: () => void;
	isLoading: boolean;
}

export default function LoadMoreBtn({ onClick, isLoading }: LoadMoreBtnProps) {
	return (
		<Button
			style={{
				display: 'block',
				margin: '0 auto',
				marginBottom: '20px',
				padding: '12px',
				color: 'white',
				background: '#4051b5',
			}}
			onClick={onClick}
			disabled={isLoading}
		>
			{isLoading ? 'Loading...' : 'Load More'}
		</Button>
	);
}
