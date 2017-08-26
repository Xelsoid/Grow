import React, { Component } from 'react';
import Header from './Header';
import LabelContent from './LabelContent';
import Playlist from './Playlist';

class MainPage extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <LabelContent />
        <Playlist />
      </div>
    );
  }
}

export default MainPage;
