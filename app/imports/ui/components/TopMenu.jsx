import React from 'react';
import { Grid, Image, Menu, Dropdown, Header, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={4}>
          <Image className="logo" src="https://css.s-hawaiianairlines.com/Content/assets/images/logos/ha-logo-horizontal@2x.png" size="medium"/>
        </Grid.Column>
        <Grid.Column width={12}>
          <Grid.Row>
            <Menu borderless className="topmenu">
              <Menu.Menu position='right'>
                <Menu.Item position="right">Help Center</Menu.Item>
                <Menu.Item>Optional Fees</Menu.Item>
                <Menu.Item>Contact Us</Menu.Item>
                <Menu.Item><Icon name="search"/>Search</Menu.Item>
                <Dropdown item text="USD">
                  <Dropdown.Menu>
                    <Dropdown.Item>USD</Dropdown.Item>
                    <Dropdown.Item></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Menu>
          </Grid.Row>
          <Grid.Row>
            <Menu borderless className="middlemenu">
              <Menu.Menu position='right'>
                <Menu.Item position="right"><Header as='h3'>Book</Header></Menu.Item>
                <Menu.Item><Header as='h3'>Manage Flights</Header></Menu.Item>
                <Menu.Item><Header as='h3'>Our Island</Header></Menu.Item>
                <Menu.Item><Header as='h3'>Island Guide</Header></Menu.Item>
                <Menu.Item>
                  <Image size="small" src="https://css.s-hawaiianairlines.com/Content/assets/images/logos/hm-logo-hawaiianmiles@2x.png"/>
                </Menu.Item>
                <Menu.Item><Header as='h3'>Search</Header></Menu.Item>
                <Menu.Item fitted><Header as='h3'>|</Header></Menu.Item>
                <Menu.Item><Header as='h3'>Join Now</Header></Menu.Item>
              </Menu.Menu>
            </Menu>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}
