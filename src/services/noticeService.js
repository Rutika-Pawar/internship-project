import { httpClient } from '../utils/httpUtil';

const NoticeApiService = {
	getAllNotice: () => {
		return httpClient.get('notices', {}, {});
	},
};

export default NoticeApiService;
