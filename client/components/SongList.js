import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import { fetchSongs, deleteSong } from '../queries';

class SongList extends Component {
  constructor(props) {
    super(props);
    this.onSongDelete = this.onSongDelete.bind(this);
  }
  onSongDelete(id) {
    this.props.mutate({
      variables: {
        id,
      },
      refetchQueries: [{
        query:fetchSongs
      }]
      
    });
  }
  renderSongs() {
    return this.props.data.songs.map(({id, title}) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`/songs/${id}`}>{title}</Link>

          <i className="material-icons" onClick={() => this.onSongDelete(id)}>
            delete
          </i>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul className="collection">{this.props.data.loading ? null : this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(deleteSong)(graphql(fetchSongs)(SongList));
