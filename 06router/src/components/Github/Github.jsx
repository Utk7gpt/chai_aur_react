import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-100 p-4 rounded">
      <h1 className="text-2xl font-bold">GitHub Profile</h1>
      <img
        src={data.avatar_url}
        alt="GitHub Avatar"
        className="w-32 mx-auto rounded-full my-4"
      />
      <h2 className="text-xl">{data.name}</h2>
      <p>Followers: {data.followers}</p>
    </div>
  );
}

// ✅ LOADER FUNCTION (IMPORTANT)
export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/hiteshchoudhary"
  );
  return response.json();
};