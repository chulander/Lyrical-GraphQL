import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import { createSong, fetchSongs } from '../queries'

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props
      .mutate({
        variables: {
          title: this.state.title,
        },
        refetchQueries: [{
          query: fetchSongs
        }]
      })
      .then(() => hashHistory.push('/'));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <Link to="/">Back</Link>
          <h3>Create a New Song</h3>
          <label>Song Title</label>
          <input
            onChange={(event) =>
              this.setState({
                title: event.target.value,
              })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

export default graphql(createSong)(SongCreate);
