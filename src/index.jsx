import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

const App = (props) => (
  <div>A simple test component for {props.name}</div>
);

App.propTypes = {
  name: PropTypes.string
};


ReactDom.render(<App name="battleship client" />, document.getElementById('app'));