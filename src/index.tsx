import React from 'react';
import ReactDOM from 'react-dom';

// import GuestList from './state/GuestList';
// import UserSearch from './state/UserSearch';
import UserSearch from './refs/UserSearch';
// import EventComponent from './events/EventComponent';

const App = () => {
  return (
    <div>
      {/* <EventComponent /> */}
      <UserSearch />
    </div>
  );
};

const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
