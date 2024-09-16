export interface Image {
	id: string;
	urls: {
		raw: string;
		full: string;
		regular: string;
		small: string;
		thumb: string;
	};
	description: string;
	alt_description: string;
}

export interface SelectedImage {
	src: string;
	description: string;
}

export interface Data {
	total: number;
	total_page: number;
	results: Image[];
}
