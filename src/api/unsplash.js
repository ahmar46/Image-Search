import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 8iZGBX9Mq_FciPHljFFFu0uUqVUTECSOOBtQGBw6qck',
	},
});
