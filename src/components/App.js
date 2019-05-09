import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

class App extends React.Component {
	state = { images: [] };

	async onSearchSubmit(term) {
		const response = await axios.get("https://api.unsplash.com/search/photos", {
			params: { query: term },
			headers: {
				Authorization:
					"Client-ID da99c9a21d9a78b08ed42fdcc663488288b8f7d9b0b093d52876619586c4e733"
			}
		});

		console.log(response.data.results);
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
