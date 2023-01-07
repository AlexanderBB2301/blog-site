import { useDispatch } from "react-redux";
import { reactionAdded } from "./blogPostSlice";
import React from "react";

const reactionEmoji = {
  like: "👍",
  wow: "🤯 ",
  heart: "💟",
  rocket: "🚀",
  coffee: "🍵",
  dislike: "👎",
};

const ReactionButtons = ({ blogPost }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    console.log(reactionEmoji);
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(
            reactionAdded({
              blogPostId: blogPost.id,
              reaction: name,
            })
          )
        }
      >
        <p>
          {emoji}
          {blogPost.reactions[name]}
        </p>
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
