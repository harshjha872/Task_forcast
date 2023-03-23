import React from "react";

const Message = (props) => {
  let messageClass = "flex";
  if (localStorage.getItem("user") === props.username) {
    messageClass = "flex justify-end";
  }
  //   console.log(localStorage.getItem("user"), props.username);

  const dateString = props.created_at;
  const date = new Date(dateString);

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className={messageClass}>
      <div className="max-w-xs mx-2 my-2 bg-neutral-800 text-white p-3 rounded-lg shadow-lg">
        <p className="mb-1">{props.content}</p>
        <span className="flex justify-between">
          <span className="text-[10px] text-neutral-400 mr-2">
            {props.username}
          </span>
          <span className="text-[10px] text-neutral-400">{formattedTime}</span>
        </span>
      </div>
    </div>
  );
};

export default Message;
