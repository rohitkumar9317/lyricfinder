import React from "react";
import { Link } from "react-router-dom";

export default ({ track }) => {
  return (
    <div className="col-md-6 col-lg-6 col-sm-6 mx-auto">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{track.artist_name}</h5>
          <p className="card-text">
            {" "}
            <strong>
              {" "}
              <i className="fas fa-play" /> Track:
            </strong>{" "}
            {track.track_name}{" "}
          </p>
          <p className="card-text">
            {" "}
            <strong>
              {" "}
              <i className="fas fa-compact-disc" /> Album:
            </strong>{" "}
            {track.album_name}{" "}
          </p>
          <Link
            className="btn btn-secondary btn-block"
            to={`lyrics/track/${track.track_id}`}
          >
            <i className="fas fa-chevron-right" /> View lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};
