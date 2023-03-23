import React from "react";
import supabase from "@/supabase/Supabase";
import { useState } from "react";
import { useRouter } from "next/router";

const SendMsgForm = () => {
  const router = useRouter();
  const channel = router.pathname.split("/")[1] || "chat_message";
  const [message, setMessage] = useState("");
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    setMessage("");
    console.log();
    if (message === "") {
      alert("no message found");
    } else if (localStorage.getItem("user") === null) {
      alert("please login");
    } else {
      const { data, error } = await supabase
        .from(channel)
        .insert([{ content: message, username: localStorage.getItem("user") }]);
      if (error) console.log(data);
    }
  };

  return (
    <form
      onSubmit={sendMessageHandler}
      className="fixed bottom-2 sm:w-[65vw] lg:w-[45vw] w-full px-2 flex"
    >
      <input
        value={message}
        onChange={messageHandler}
        type="text"
        className="outline-none ring-1 ring-sky-400 pl-12 bg-neutral-900 h-full w-full rounded-sm p-3 font-semibold placeholder-neutral-600"
        placeholder="Send a Message"
      />
      <button type="submit" className="bg-neutral-800 p-3 rounded-sm ml-2">
        {" "}
        submit{" "}
      </button>
    </form>
  );
};

export default SendMsgForm;
