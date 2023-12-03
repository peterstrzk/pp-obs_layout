import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SpotifyPlayer from 'react-spotify-web-playback';

interface Track {
  name: string;
}

const MusicVisualizer: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/get-spotify-token');
        setToken(response.data.access_token);
      } catch (error) {
        console.error('Error fetching Spotify token:', error);
      }
    };

    fetchData();
  }, []);

  const handleTrackChange = (currentTrack: Track | null) => {
    if (currentTrack) {
      setTrack(currentTrack);
    }
  };

  return (
    <div>
      {token && (
        <SpotifyPlayer
          token={token}
          callback={handleTrackChange}
          showSaveIcon
        />
      )}
      {track && <p>Aktualnie odtwarzany utwór: {track.name}</p>}
    </div>
  );
};

export default MusicVisualizer;
