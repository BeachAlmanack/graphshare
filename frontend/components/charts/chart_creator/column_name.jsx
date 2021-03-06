import React from 'react';
import { DragSource } from 'react-dnd';

class ColumName extends React.Component {
  render() {
    const {
      connectDragSource,
      name,
      type,
    } = this.props;

    return connectDragSource((
      <li>

        <p><i className="fa fa-ellipsis-v" aria-hidden="true" /><i className="fa fa-ellipsis-v" aria-hidden="true" /> {name}</p>

        <span className={`datatype-${type}`}>{type}</span>
      </li>
    ));
  }
}

const spec = {
  beginDrag(props) {
    return { name: props.name, type: props.type };
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

export default (type, name) => {
  const ColumnDrag = DragSource(type, spec, collect)(ColumName);
  return <ColumnDrag key={name} name={name} type={type} />;
};
