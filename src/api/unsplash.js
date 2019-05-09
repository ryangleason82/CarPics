import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID da99c9a21d9a78b08ed42fdcc663488288b8f7d9b0b093d52876619586c4e733"
	}
});
