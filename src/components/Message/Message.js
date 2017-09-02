import React from 'react';
import { string, node, element, oneOfType } from 'prop-types';

import './Message.scss';

const Message = ({ text, subText, action }) => (
  <div class="message">
    <div class="message__text">
      {text}
    </div>

    {(() => {
      if (subText) {
        return (
          <div class="message__text--secondary">
            {subText}
          </div>
        );
      }

      return null;
    })()}

    {(() => {
      if (action) {
        return (
          <div class="message__actions">
            {action}
          </div>
        );
      }

      return null;
    })()}
  </div>
);

Message.defaultProps = {
  subText: null,
  action: null,
};

Message.propTypes = {
  text: string.isRequired,
  subText: string,
  action: oneOfType([node, element]),
};

export default Message;
