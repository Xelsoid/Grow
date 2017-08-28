import React from 'react';
import Header from '../layout/Header';
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
