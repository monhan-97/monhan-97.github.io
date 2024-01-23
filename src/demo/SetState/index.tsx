import React from "react";

class SetState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render(): React.ReactNode {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick}>点击</button>
      </div>
    );
  }
}

export default SetState;
