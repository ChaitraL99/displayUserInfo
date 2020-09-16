import React from "react";
import Modal from "./OpenModal";
import "./DisplayUserData.css";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  handleCardClick = () => {
    this.setState(() => ({
      showModal: !this.state.showModal,
    }));
  };
  render() {
    return (
      <div className="column">
        <div className="card" onClick={() => this.handleCardClick()}>
          <h3>
            <p style={{ paddingLeft: "20" }}>{this.props.user.first_name}</p>
          </h3>
          <Modal
            user={this.props.user}
            show={this.state.showModal}
            handleModal={this.handleCardClick}
          />
        </div>
      </div>
    );
  }
}

export default UserCard;
