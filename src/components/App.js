import React from 'react';
import HandsonTable from './HandsonTable.js';
import Table from './Table';
import ConfigureButtons from './configureButtons';

class App extends React.Component {
  render() {
    return (
      <div>
        <ConfigureButtons/>
        <HandsonTable />
        <Table />
      </div>
    );
  }
}
export default App;
