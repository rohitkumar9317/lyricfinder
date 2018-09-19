import React, { Component } from "react";
import { connect } from "react-redux";

import { getTracks } from "../store/actions/trackList";
import Spinner from "../components/Spinner";
import TrackItem from "./TrackItem";

class DisplaySongTracks extends Component {
  componentDidMount() {
    this.props.getTracks();
  }
  render() {
    const { trackList, loading } = this.props.tracks;
    if (loading === false) {
      return trackList.map(track => (
        <React.Fragment>
          <div className="row">
            <TrackItem key={track.track.track_id} track={track.track} />
          </div>
        </React.Fragment>
      ));
    } else {
      return <Spinner />;
    }
  }
}

const mapStateToProps = state => ({
  tracks: state.tracks
});

export default connect(
  mapStateToProps,
  { getTracks }
)(DisplaySongTracks);
