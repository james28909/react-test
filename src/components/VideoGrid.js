import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const VideoItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
`;

const VideoInfo = styled.div`
  padding: 10px;
`;

function VideoGrid({ videos, onLoadMore }) {
  return (
    <>
      <Grid>
        {videos.map((video) => (
          <VideoItem key={video.id}>
            <ReactPlayer
              url={video.url}
              width="100%"
              height="200px"
              light={true}
            />
            <VideoInfo>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </VideoInfo>
          </VideoItem>
        ))}
      </Grid>
      <button onClick={onLoadMore}>Load More</button>
    </>
  );
}

export default VideoGrid;
