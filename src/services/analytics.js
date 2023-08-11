import axios from 'axios';

export class AnalyticService {
	async getData(url, apiName) {
		try {
			const response = await axios.get(`${url}${apiName}`);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
}
