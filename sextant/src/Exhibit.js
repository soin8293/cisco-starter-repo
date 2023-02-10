import React, { useState } from 'react';
import { Tab, Menu, Segment, Button } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane attached={false}>Content 1</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Content 2</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Content 3</Tab.Pane> },
]

function Exhibit() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
      <Segment>
        <h1>Exhibit Tabs</h1>
        <Tab panes={panes} />
      </Segment>
    </div>
  );
}

export default Exhibit;
