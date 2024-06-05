import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <h3>
            Song Details:{' '}
             {this.props.data.song && this.props.data.song.title}
            </h3>
            </div>
        );
    }
}

const query = gql`
query findSongById($id: ID!) {
  song(id: $id) {
    title
  }
}
`

export default graphql(query, {
    options: (props) => {
        return {
            variables: {id: props.params.id}
        }
    }
})(SongDetail);