function SongArtist({ artist }) {
  return (
    <section>
      <h3>{artist.strArtist}</h3>
      <img
        src={artist.strArtistThumb}
        alt={artist.strArtist}
        className="rounded img-fluid w-75"
      />

      <p>
        {artist.intBornYear} - {artist.intDiedYear || 'Presente'}
      </p>

      <p>{artist.strCountry}</p>
      <p>
        {artist.strGenre} - {artist.strStyle}
      </p>

      <a
        href={`http://${artist.strWebsite}`}
        target="_blank"
        rel="noreferrer"
        className="stretched-link"
      >
        Sitio web oficial
      </a>

      <p className="text-justify">{artist.strBiographyEN}</p>
    </section>
  );
}

export default SongArtist;
