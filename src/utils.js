export const getSortPosts = (posts, sort) => {
  if (sort === "trending") {
    return [...posts].sort((a, b) => b.likes.likeCount - a.likes.likeCount);
  } else if (sort === "oldest") {
    return [...posts].sort(
      (a, b) => Date.parse(a.updatedAt) - Date.parse(b.updatedAt)
    );
  } else if (sort === "latest") {
    return [...posts].sort(
      (a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
    );
  }
  return posts;
};
