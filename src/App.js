import React from 'react';
import FilterableTable from './components/table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Filterable Table with Material-UI</h1>
      </header>
      <main>
        <a href='https://mui.com/x/api/data-grid/data-grid-pro/#classes'>Style classe</a>
        <FilterableTable />
      </main>
    </div>
  );
}

export default App;
