import "./App.css";
import Counter from "./features/counter/Counter";
import BlogPostList from "./features/blogposts/BlogPostList";
import AddBlogPostForm from "./features/blogposts/AddBlogPostForm";
function App() {
  return (
    <main className="App">
      <Counter />
      <AddBlogPostForm />
      <BlogPostList />
    </main>
  );
}

export default App;
