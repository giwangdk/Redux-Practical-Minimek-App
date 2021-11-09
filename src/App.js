import React from 'react';

import './App.css';

import { Header, Container } from "semantic-ui-react";
import TabBarContainer from './feature/tabs/TabBarContainer';

  const UnitInfo = () => <div>Unit Info Content</div>
  const Pilots = () => <div>Pilots Content</div>
  const Mechs = () => <div>Mechs Content</div>
  const UnitOrganization = () => <div>Unit Organization Content</div>

  
function App() {
  const tabs = [
    {name: "unitInfo", label:"Unit Info", component:UnitInfo},
    {name: "pilots", label:"Pilots", component:Pilots},
    {name: "mechs", label:"Mechs", component: Mechs},
    {name: "unitOrganization", label:"Unit Organization", component: UnitOrganization}
  ]
  

  return (
    <div className="App">
      <div className="App-header">
        <Header inverted as="h1">Project Mini-Mek</Header>
      </div>
      <Container>
        <TabBarContainer tabs={tabs} size="massive"/>
      </Container>
    </div>
  );
}

export default App;
