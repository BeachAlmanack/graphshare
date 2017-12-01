import React from 'react';
import { DropTarget } from 'react-dnd';

class DropAxis extends React.Component {
  render() {
    const {
      connectDropTarget,
      items,
      removeItem,
      isOver,
      canDrop,
    } = this.props;
    const accepted = isOver && canDrop;
    const refused = isOver && !canDrop;
    return connectDropTarget((
      <div className={`drop ${refused ? 'refused' : ''} ${accepted ? 'accepted' : ''}`}>
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
          <p className="drag-here">Drag in here</p>
        </div> }
      </div>));
  }
}

const spec = {
  drop(props, monitor) {
    props.addItem(monitor.getItem());
    return { moved: true };
  },

  canDrop(props, monitor) {
    // You can disallow drop based on props or item
    if (props.items.length === props.maxItem) {
      return false;
    }
    return true;
  },

};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

export default (type, items, onDrop, removeItem, maxItem) => {
  const DropSquare = DropTarget(type, spec, collect)(DropAxis);
  return <DropSquare items={items} maxItem={maxItem} addItem={onDrop} removeItem={removeItem} />;
};
