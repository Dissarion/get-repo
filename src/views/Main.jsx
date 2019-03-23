import React from 'react';

import ListItems from '../components/ListItems';

class Main extends React.Component {
  render() {
    return(
      <ul className='main_list'>
        <ListItems/>
      </ul>
    );
  }
}

export default Main;