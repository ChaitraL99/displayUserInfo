import React from "react";

const show = {
  display: "block",
};
const hide = {
  display: "none",
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="modal" style={this.props.show ? show : hide}>
          <div className="modal-content">
            <h4>
              First Name : {this.props.user.first_name}
              <br />
              Last Name : {this.props.user.last_name}
              <br />
              Email : {this.props.user.email}
              <br />
            </h4>
          </div>
          <div className="modal-footer">
            <a className="btn-flat" onClick={() => this.props.handleModal()}>
              Close
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
