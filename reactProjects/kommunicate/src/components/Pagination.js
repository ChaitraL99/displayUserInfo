import React from "react";
import "./DisplayUserData.css";
import UserCard from "./UserCard";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      usersPerPage: 4,
      showModal: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    const { currentPage, usersPerPage } = this.state;

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = this.props.items.slice(
      indexOfFirstUser,
      indexOfLastUser
    );

    const renderUsers = currentUsers.map((user, index) => {
      return <UserCard user={user} />;
    });

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.items.length / usersPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <a href="#" key={number} id={number} onClick={this.handleClick}>
          {number}
        </a>
      );
    });
    return (
      <div>
        <div className="row">{renderUsers}</div>
        <div class="pagination">{renderPageNumbers}</div>
      </div>
    );
  }
}

export default Pagination;
