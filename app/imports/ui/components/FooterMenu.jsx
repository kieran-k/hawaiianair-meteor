import React from 'react';
import { Grid, List, Input, Label } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
      <div className="footer-background">
        <Grid container columns="five">
          <Grid.Column>
            Navigation
            <hr/>
            <List>
              <List.Item>Contact Us</List.Item>
              <List.Item>Help Center</List.Item>
              <List.Item>Site Map</List.Item>
              <List.Item>Guests with Disabilities</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            _
            <hr/>
            <List>
              <List.Item>Legal</List.Item>
              <List.Item>Terms of Use</List.Item>
              <List.Item>All Fees</List.Item>
              <List.Item>Team Kokua</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            About Us
            <hr/>
            <List>
              <List.Item>Contract of Carriage</List.Item>
              <List.Item>Careers</List.Item>
              <List.Item>Investor Relations</List.Item>
              <List.Item>Cargo</List.Item>
              <List.Item>Fare Deals</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            _
            <hr/>
            <List>
              <List.Item>Customer Service Plan</List.Item>
              <List.Item>Tarmac Delay Plan</List.Item>
              <List.Item>Privacy</List.Item>
              <List.Item>Shop Our Store</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            Sign Up for Deals
            <hr/>
            <List>
              <List.Item>Get notifications for low fares & special deals.</List.Item>
              <List.Item>
                <Input placeholder='Enter Email Address' />
                <Input placeholder='Zip/Postal Code'/>
                <Label>
                  Subscribe
                </Label>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </div>

    );
  }
}
