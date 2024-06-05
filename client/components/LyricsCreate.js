import React, {Component} from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {content: ''};
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.mutate({
            variables: {
                content: this.state.content,
                songId: this.props.songId
            }
        })
        this.setState({content: ''})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Add a lyric</label>
                <input value={this.state.content} onChange={(e) => this.setState({content: e.target.value})}/>
            </form>
        )
    }
}

const mutation = gql`
mutation AddLyricsToSong($content: String, $songId: ID) {
  addLyricToSong(content: $content, songId:$songId) {
    id
    lyrics {
      content
    }
  }
}`

export default graphql(mutation)(LyricCreate);