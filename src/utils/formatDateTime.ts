export const formatRelativeTime = (time: number) => {
  const timestamp = time;
  const now = new Date();
  const timeDiff = now.getTime() - timestamp;

  if (timeDiff < 60 * 1000) {
    // Less than 1 minute ago
    return 'just now';
  } else if (timeDiff < 60 * 60 * 1000) {
    // Less than 1 hour ago
    const minsAgo = Math.floor(timeDiff / (60 * 1000));
    return `${minsAgo} min ago`;
  } else if (timeDiff < 24 * 60 * 60 * 1000) {
    // Less than 1 day ago
    const hrsAgo = Math.floor(timeDiff / (60 * 60 * 1000));
    return `${hrsAgo} hr ago`;
  } else {
    // More than 1 day ago
    const date = new Date(timestamp);
    const dateString = date.toLocaleDateString();
    return dateString;
  }
};
