import axios from 'axios'


const Instance = axios.create({
	baseURL: "https://mom-hack.onrender.com/api/v1",
});

export default Instance