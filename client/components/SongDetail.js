import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { getSongDetail } from '../queries';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

class SongDetail extends Component {
  render() {
    const { song, loading } = this.props.data;
    return loading ? (
      <div>Loading...</div>
    ) : (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
       <LyricList lyrics={song.lyrics}/>
       <LyricCreate songId={this.props.params.id}/>
      </div>
    );
  }
}

export default graphql(getSongDetail, {
  options(props) {
    return {
      variables: {
        id: props.params.id,
      },
    };
  },
})(SongDetail);
