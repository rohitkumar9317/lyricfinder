import React, { Component } from "react";
import { connect } from "react-redux";

import { updateTracks } from "../store/actions/trackList";

class Header extends Component {
  state = {
    trackTitle: ""
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.updateTracks(this.state.trackTitle);
  };
  render() {
    return (
      <React.Fragment>
        <div className="card mt-3 mb-4 p-5">
          <div className="card-body">
            <h1 className="display-4 text-center mb-2">
              {" "}
              <i className="fas fa-music" /> Search For A Song
            </h1>
            <h6 className="card-subtitle text-center mx-2 text-muted">
              Get lyrics for any track
            </h6>
          </div>
          <form className="mx-4" onSubmit={this.onSubmitHandler}>
            <div className="form-group">
              <input
                type="text"
                value={this.state.trackTitle}
                className="form-control"
                placeholder="Song Title..."
                onChange={e => this.setState({ trackTitle: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
        <h3 className="text-center mb-3 display-4">
          {this.props.tracks.heading}
        </h3>
        {this.props.tracks.loading ? (
          ""
        ) : (
          <h5 className="text-center">
            {" "}
            {this.props.tracks.trackList.length === 0
              ? "No Results Found"
              : ""}{" "}
          </h5>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tracks: state.tracks
});

export default connect(
  mapStateToProps,
  { updateTracks }
)(Header);
