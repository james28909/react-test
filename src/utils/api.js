// This is a mock API function. Replace it with actual YouTube API calls.
export const fetchVideos = async (page) => {
  // Simulate an API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Array(10)
    .fill()
    .map((_, index) => ({
      id: `video-${page}-${index}`,
      title: `Video ${page}-${index}`,
      description: `Description for video ${page}-${index}`,
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    }));
};
