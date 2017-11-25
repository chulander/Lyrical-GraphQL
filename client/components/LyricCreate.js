import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { addLyricToSong, getSongDetail } from '../queries';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        songId: this.props.songId,
        content: this.state.content,
      },
      refetchQueries: [
        {
          query: getSongDetail,
          variables: {
            id: this.props.songId,
          },
        },
      ],
    }).then(() => {
      this.setState({content:''})
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Add a Lyric</label>
          <input
            type="text"
            value={this.state.content}
            onChange={(event) => this.setState({ content: event.target.value })}
            placeholder="Write Lyrics Here"
          />
        </form>
      </div>
    );
  }
}

export default graphql(addLyricToSong)(LyricCreate);
