import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//to generate a random id
import { blogPostAdded } from "./blogPostSlice";
import { selectAllUsers } from "../users/usersSlice";

import React from "react";

const AddBlogPostForm = () => {
  const dispatch = useDispatch();
  //temporary state that does not need to have global state
  const [title, setTitle] = useState(" ");
  const [content, setContent] = useState(" ");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);
  const onTitleEdited = (e) => setTitle(e.target.value);
  const onContentEdited = (e) => setContent(e.target.value);
  const onNewAuthor = (e) => setUserId(e.target.value);
  const onSaveBlogPostClick = () => {
    //ensure there is a title and blog post content
    if (title && content) {
      //dispatch blog post added function
      dispatch(
        //info contained in blog post object handled in prepare callback funtion in slice
        //pmly raw data sent, component does not need to handle object structure
        blogPostAdded(title, content, userId)
      );
      //reset inputs to be blank
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h3>Add a New Blog Post</h3>
      <form>
        <label htmlFor="blogPostTitle"> Title: </label>
        <input
          type="text"
          name="blogPostTitle"
          id="blogPostTitle"
          value={title}
          onChange={onTitleEdited}
        />
        <label htmlFor="postAuthor">Author: </label>
        <select id="postAuthor" value={userId} onChange={onNewAuthor}>
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="blogPostContent">Content: </label>
        <textarea
          type="text"
          name="blogPostContent"
          id="blogPostContent"
          value={content}
          onChange={onContentEdited}
        />
        <button
          type="button"
          className="addBlogPostBtn"
          onClick={onSaveBlogPostClick}
          disabled={!canSave}
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default AddBlogPostForm;
