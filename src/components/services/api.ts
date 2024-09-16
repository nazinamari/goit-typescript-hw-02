import axios from 'axios';
import { Image } from '../App/App.types';

axios.defaults.baseURL = 'https://api.unsplash.com/';

axios.defaults.params = {
	per_page: 24,
	orientation: 'landscape',
};

interface data {
	total: number;
	total_page: number;
	results: Image[];
}

const API_KEY = 'TJqxy46EegWjUD1-PhaQz5Lq8osn-H0lT2S4DUn7GTM';

export const fetchData = async (
	searchQuery: string,
	page: number
): Promise<data> => {
	const response = await axios.get(
		`/search/photos?page=${page}&query=${searchQuery}`,
		{
			headers: {
				Authorization: `Client-ID ${API_KEY}`,
				'Accept-Version': 'v1',
			},
		}
	);

	return response.data;
};
