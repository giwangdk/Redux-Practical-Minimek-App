import React, {useState} from 'react';

import './App.css';

import { Header, Container, Menu } from "semantic-ui-react";


function App() {

  const [activeItem, setActiveItem] = useState('unitInfo')
  const handleItemClick = (e, { name }) => setActiveItem(name)
  
  return (
    <div className="App">
      <div className="App-header">
        <Header inverted as="h1">Project Mini-Mek</Header>
      </div>
      <Container>
        <Menu tabular size="massive">
          <Menu.Item name="unitInfo"
            active={activeItem === 'unitInfo'}
            onClick={handleItemClick}>
            Unit Info
          </Menu.Item>
          <Menu.Item name="pilots" 
            active={activeItem === 'pilots'}
            onClick={handleItemClick}>
            Pilots
          </Menu.Item>
          <Menu.Item name="mechs" 
            active={activeItem === 'mechs'}
            onClick={handleItemClick}>
            Mechs
          </Menu.Item>
          <Menu.Item name="unitOrganization" 
            active={activeItem === 'unitOrganization'}
            onClick={handleItemClick}>
            Unit
          </Menu.Item>
        </Menu>
      </Container>
    </div>
  );
}

export default App;
