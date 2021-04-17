import Message from '../generics/Message';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';

function SongDetails({ search, lyric, bio }) {
  if (!lyric || !bio) return null;

  return (
    <>
      <section className="row">
        <article className="col-lg-6">
          {lyric.err ||
          lyric.error ||
          lyric.name === 'AbortError' ? (
            <Message
              msg={`No se encontro la canción 🎵: "${search.song}"`}
              bgColor="#B03A2E"
            />
          ) : (
            <SongLyric
              title={search.song}
              lyrics={lyric.lyrics}
            />
          )}
        </article>

        <article className="col-lg-6">
          {bio.artists ? (
            <SongArtist artist={bio.artists[0]} />
          ) : (
            <Message
              msg={`No se encontro el artista 🙍: "${search.artist}"`}
              bgColor="#B03A2E"
            />
          )}
        </article>
      </section>
    </>
  );
}

export default SongDetails;
