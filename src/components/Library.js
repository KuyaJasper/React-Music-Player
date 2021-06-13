import React from "react";
import LibrarySrong from "./LibrarySong";

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySrong song={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
