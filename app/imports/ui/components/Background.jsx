import React from 'react';
import { Grid, Menu, Icon, Segment, Form, Button } from 'semantic-ui-react';

export default class Background extends React.Component {
  state = { activeItem: 'Flights' }

  render() {
    const { activeItem } = this.state;
    return (
      <div className="background">
        <div className="middlepage">
          <Grid centered columns={2}>
            <Grid.Column>
              <Menu attached='top' tabular>
                <Menu.Item
                  name='Flights'
                  active={activeItem === 'Flights'}>
                  <Icon name="plane"></Icon>
                  Flights
                </Menu.Item>
                <Menu.Item><p>Vacation Deals</p></Menu.Item>
                <Menu.Item><p>Hotel</p></Menu.Item>
                <Menu.Item><p>Transportation</p></Menu.Item>
                <Menu.Item fitted><p>Check-In</p></Menu.Item>
                <Menu.Item><p>My Trips</p></Menu.Item>
                <Menu.Item ><p>Flight Status</p></Menu.Item>
              </Menu>
              <Segment attached='bottom'>
                <Form>
                  <Form.Group widths='equal'>
                    <Form.Input placeholder='from:   City, Airport or Island' width={6}/>
                    <Form.Input placeholder='to:  City, Airport or Island' width={5} />
                    <Button> Next <Icon name='right arrow' /></Button>
                  </Form.Group>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}
