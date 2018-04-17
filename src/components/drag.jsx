import React from 'react';

const styles = {
  cursor: 'pointer',
};

export default class Drag extends React.Component {
  state = { dragging: false, x: undefined, y: undefined };

  handleMouseDown = (event) => {
    this.setState({
      dragging: true,
      x: event.clientX,
      y: event.clientY,
    });
  }

  handleMouseMove = (event) => {
    if (!this.state.dragging) { return; }

    const deltaX = this.state.x - event.clientX;
    const deltaY = this.state.y - event.clientY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal
      this.props.onHorizontal(deltaX);
    } else {
      // Vertical
      this.props.onVertical(deltaY);
    }

    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  handleMouseUp = (event) => {
    this.setState({ dragging: false });
  }

  render() {
    return (
      <div
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        style={styles}
      >
        {this.props.children}
      </div>
    );
  }
}
