import React from 'react';
import { DropTarget } from 'react-dnd';

class DropAxis extends React.Component {
  render() {
    const {
      connectDropTarget,
      items,
      removeItem,
    } = this.props;

    return connectDropTarget((
      <div className="drop">
        {
          items.length > 0 ?
        <ul className="column-names">
          {
            items.map(item => (
              <li key={item.name}>
                <p>{item.name}</p>
                <span className={`datatype-${item.type}`}>{item.type}</span>
                <i className="icon-remove" aria-hidden="true" onClick={() => removeItem(item.name)} />
              </li>
            ))

          }
        </ul> :
        <div className="drop-columns">
          <i className="icon-drop" />
        </div> }
      </div>));
  }
}

const spec = {
  drop(props, monitor) {
    props.addItem(monitor.getItem());
    return { moved: true };
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

export default (type, items, onDrop, removeItem) => {
  const DropSquare = DropTarget(type, spec, collect)(DropAxis);
  return <DropSquare items={items} addItem={onDrop} removeItem={removeItem} />;
};
