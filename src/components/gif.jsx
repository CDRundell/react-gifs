import React, { Component } from 'react';

class Gif extends Component {
  render () {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e47x48ub5av6utdlgxi2duseqo24khsblyne5orouns&rid=giphy.gif&ct=g`;
    return (
      <img src = {src} className="gif"></img>
    );
  }
}

export default Gif;
