import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './generics/Loader';
import SongDetails from './song/SongDetails';
import SongForm from './song/SongForm';

function SongSearch() {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    (async () => {
      const { artist, song } = search;

      let artistUrl = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      console.log(artistRes);
      console.log(songRes);

      setBio(artistRes);
      setLyric(songRes);

      setLoading(false);
    })();
  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div className="container">
      <h2>Song Search</h2>

      <SongForm handleSearch={handleSearch} />

      {search && !loading && (
        <SongDetails search={search} lyric={lyric} bio={bio} />
      )}

      {loading && <Loader />}
    </div>
  );
}

export default SongSearch;
