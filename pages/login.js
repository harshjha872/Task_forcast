import React, { use } from "react";
import supabase from "@/supabase/Supabase";
import { useState } from "react";
import Router from "next/router";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const onChangeHandlerEmail = (e) => {
    setUser(e.target.value);
  };

  const onChangeHandlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    setUser("");
    setPassword("");
    if (user !== "" && password !== "") {
      let { data, error } = await supabase.from("users").select();
      if (data) {
        const userinDb = data.find((ele) => ele.username === user);
        if (!userinDb) alert("user does'nt exist");
        else {
          if (userinDb.password === password) {
            localStorage.setItem("user", userinDb.username);
            Router.push("/");
          } else {
            alert("password is wrong");
          }
        }
      }
    }
  };

  return (
    <>
      <form
        onSubmit={SubmitHandler}
        method="POST"
        className="p-4 lg:w-[35vw] w-[80vw] md:w-[60vw] px-8 mx-auto"
      >
        <div className="text-3xl text-center my-8 font-bold underline underline-offset-4">
          Login
        </div>
        <div>username</div>
        <input
          id="user"
          name="user"
          type="text"
          onChange={onChangeHandlerEmail}
          value={user}
          className="bg-neutral-800 text-white block my-2 w-full p-3 border rounded border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-transparent placeholder-neutral-600 "
          placeholder="username"
        />
        <div>Password</div>
        <input
          onChange={onChangeHandlerPassword}
          value={password}
          id="password"
          name="password"
          type="password"
          className="bg-neutral-800 text-white block my-2 w-full p-3 border rounded border-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-transparent placeholder-neutral-600 "
          placeholder="password"
        />
        <div className="flex justify-center my-8">
          <button
            type="submit"
            className="text-white bg-neutral-800 border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black transition duration-300 ease-in-out rounded text-lg text-center"
          >
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
