import React from 'react';
import Header from './Header';
import LabelContent from './LabelContent';
import Playlist from './Playlist';

const MainPage = () => (
  <div className="container">
    <Header />
    <LabelContent />
    <Playlist />
  </div>
);

export default MainPage;
