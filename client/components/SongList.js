import React from "react";
import { graphql } from 'react-apollo';
import { Link } from "react-router";
import query from './queries/fetchSongs'
import gql from 'graphql-tag';

const SongList = (props) => {
    const deleteSong = (id) => {
        props.mutate({variables: {id}}).then(() => this.props.data.refetch());
    }
    return (
    <div>
        <ul className="collection">
        {!props.data.loading && props.data.songs.map((song, idx) =>
             <li key={idx} className="collection-item">
               {song.title}
            <li className="material-icons" onClick={() => deleteSong(song.id)}>delete</li>
           </li>
        )}
        </ul>
        <Link to="/songs/new"
        className="btn-floating btn-large red right">
            <i className="material-icons">add</i>
        </Link>
        </div>
    )}

const mutation = gql`
mutation DeleteSong($id: ID) {
  deleteSong (id: $id) {
    id
  }
}`;

export default graphql(mutation)(graphql(query)(SongList));