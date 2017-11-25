import React from 'react';
import { DragSource } from 'react-dnd';

class ColumName extends React.Component {

  render() {
    const { isDragging, connectDragSource, name, type } = this.props;
    return connectDragSource(
      <li>
        <p>{name}</p>
        <span className={`datatype-${type}`}>{type}</span>
      </li>);
  }
};

const spec = {
  beginDrag(props) {
    return { id: props.id };
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

export default DragSource('type', spec, collect)(ColumName);