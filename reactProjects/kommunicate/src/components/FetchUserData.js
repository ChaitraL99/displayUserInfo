import React from "react";
import SearchData from "./SearchData";

class FetchUserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          data: json.data,
        });
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <SearchData data={this.state.data} />;
    }
  }
}

export default FetchUserData;
