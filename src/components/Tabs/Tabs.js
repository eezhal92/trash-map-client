import PropTypes from 'prop-types';
import classnames from 'classnames';
import React, { Component } from 'react';

import './Tabs.scss';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { activeKey: props.defaultActiveKey };
  }

  getChildContext() {
    const updateKey = (key) => {
      this.setState(() => ({ activeKey: key }));
    };
    const { activeKey } = this.state;

    return {
      tab: {
        activeKey,
        updateKey,
      },
    };
  }

  render() {
    const { children } = this.props;

    return (
      <div class="tabs" role="tablist">
        {children || null}
      </div>
    );
  }
}

Tabs.childContextTypes = {
  tab: PropTypes.shape({
    activeKey: PropTypes.bool.isRequired,
    updateKey: PropTypes.func.isRequired,
  }),
};

Tabs.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.reactElement,
    PropTypes.element,
  ]).isRequired,
  defaultActiveKey: PropTypes.number.isRequired,
};

export const Tab = ({ children, id, eventKey }, context) => {
  const active = eventKey === context.tab.activeKey;

  return (
    <div
      tabIndex="0"
      role="tab"
      class={classnames('tabs__item', { 'tabs__item-active': active })}
      aria-expanded={active ? 'true' : 'false'}
      aria-controls={id}
      onClick={() => context.tab.updateKey(eventKey)}
    >
      {children}
    </div>
  );
};

Tab.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.reactElement,
    PropTypes.element,
  ]).isRequired,
  eventKey: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

Tab.defaultProps = {
  active: false,
};

Tab.contextTypes = {
  tab: PropTypes.shape({
    activeKey: PropTypes.bool.isRequired,
    updateKey: PropTypes.func.isRequired,
  }),
};

export default Tabs;
