'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link'; // Assicurati di importare il componente Link
import { useRouter } from 'next/router';
const AnimePage = () => {
  const [animeData, setAnimeData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.jikan.moe/v4/anime?page=${page}`);
      setAnimeData((prevData) => [...prevData, ...res.data.data]);
      setHasNextPage(page < res.data.pagination.last_visible_page);
      setLoading(false);
    };

    fetchData();
  }, [page]);

  const loadMore = () => {
    setLoadingMore(true);
    setPage((prevPage) => prevPage + 1);
    setLoadingMore(false);
  };

  if (loading && page === 1) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Anime List</h1>
      <ul>
        {animeData.map((anime) => (
          <li key={anime.mal_id}>
            <h3>{anime.title}</h3>
            <Link href={`/anime/${anime.mal_id}`}>
              Vedi dettagli
            </Link>
            <div>
              <img src={anime.images.jpg.image_url} alt={anime.title} width="200" height="300" />
            </div>
          </li>
        ))}
      </ul>
      {hasNextPage && (
        <button onClick={loadMore} disabled={loadingMore}>
          {loadingMore ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
};

export default AnimePage;
