import React from 'react';

export default function ContentBox({ children }) {
  return (
    <div>
      <h1>Hello, world!</h1>
      {children}
    </div>
  );
}

ContentBox.propTypes = {
  children: React.PropTypes.element,
};
