import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ChartShowMenu extends React.Component {

  render() {
    const { chart, userId } = this.props;
    if (chart) {
      return (
        <div className="menu-bar">
          <div className="left-menu">
            <h1>{chart.title}</h1>
          </div>
          {userId === chart.author_id ?
            <div className="right-menu">
              <p>Nothing</p>
            </div> : <div className="right-menu">
              Created by {this.props.users[chart.author_id].username}
            </div>}
        </div>
      );
    }
    return (<div />);
  }
};

ChartShowMenu.propTypes = {
  chart: PropTypes.objectOf(Object),
};

ChartShowMenu.defaultProps = {
  chart: undefined,
};

export default ChartShowMenu;
