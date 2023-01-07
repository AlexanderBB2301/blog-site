import { useSelector } from "react-redux";
import { selectAllBlogPosts } from "./blogPostSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const BlogPostList = () => {
  //get all blog posts that are in our state
  //   const blogPosts = useSelector((state) => state.blogPosts);
  // use selector defined in store. If data structure needs to be altered, it can be updated once in the store instead of in each component
  const blogPosts = useSelector(selectAllBlogPosts);

  //locale compare will return a number based on the difference in the dates, sort will sort the dates and slice will create a shallow copy of the array to be stored in ordered blogposts
  const orderedBlogPosts = blogPosts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  //create a post for each post in the list and render
  //substring - preview max of first 100 character
  const renderedBlogPosts = orderedBlogPosts.map((blogPost, count) => (
    <article key={blogPost.id}>
      <h3>{blogPost.title}</h3>
      <p>{blogPost.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={blogPost.userId} />
        <TimeAgo timestamp={blogPost.date} />
      </p>
      <ReactionButtons blogPost={blogPost} count={count} />
    </article>
  ));

  return (
    //render blog posts
    <section>
      <h2>Blog Posts</h2>
      {renderedBlogPosts}
    </section>
  );
};

export default BlogPostList;
