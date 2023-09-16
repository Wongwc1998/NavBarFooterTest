import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-between items-center h-16 bg-yellow-300 text-black px-10">
      <a
        href="http://www.freepik.com/"
        className="hover:text-purple-500 hover:underline"
      >
        Hive icon made by Freepik - www.freepik.com
      </a>
      <a
        href="https://www.flaticon.com/authors/smashicons"
        className="hover:text-purple-500 hover:underline"
      >
        Bee icons made by Smashicons - www.flaticon.com
      </a>
      <a
        href="https://www.freepik.com/vectors/food"
        className="hover:text-purple-500 hover:underline"
      >
        Background image created by dgim-studio - www.freepik.com
      </a>
    </div>
  );
}
