import React from 'react';
import TopMenu from '../components/TopMenu';
import Background from '../components/Background';
import FooterMenu from '../components/FooterMenu';

export default class HawaiianAir extends React.Component {

  render() {
    return (
      <div>
        <TopMenu/>
        <Background/>
        <FooterMenu/>
      </div>
    );
  }
}
