"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

const container = (delay: number, x: number) => ({
  hidden: { x: x, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/joke?query=${query}`);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form
          onSubmit={handleSearch}
          className="flex rounded-full border-2 border-white overflow-hidden max-w-md mx-auto"
        >
          {/* <div className="flex rounded-full border-2 border-white overflow-hidden max-w-md mx-auto"> */}
          <motion.input
            variants={container(0, -100)}
            initial="hidden"
            animate="visible"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full outline-none text-white bg-inherit text-xl px-5 py-3"
            placeholder="Search jokes..."
          />

          <motion.button
            variants={container(0.5, 100)}
            initial="hidden"
            animate="visible"
            type="submit"
            className="flex items-center justify-center border-white hover:border-gray-500 px-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="18px"
              className="fill-white"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </motion.button>
          {/* </div> */}
        </form>
      </main>
    </div>
  );
}
