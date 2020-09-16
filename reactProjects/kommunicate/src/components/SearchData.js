import React from "react";
import Pagination from "./Pagination";
import "./FetchUserData.css";

class SearchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  filterList = (event) => {
    var updatedList = this.props.data;
    updatedList = updatedList.filter(function (item) {
      return (
        item.first_name
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ items: updatedList });
  };

  componentDidMount() {
    this.setState({ items: this.props.data });
  }

  render() {
    const searchcss = {
      marginTop: "7%",
      width: "80",
      height: "80",
      borderRadius: "10%",
      background: "rgb(230, 133, 230)",
    };
    return (
      <div className="mainBody">
        <div className="filter-list">
          <input
            type="text"
            placeholder="Search"
            onChange={this.filterList}
            style={searchcss}
          />
          <Pagination items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default SearchData;
