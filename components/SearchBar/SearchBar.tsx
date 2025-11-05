"use client";
import { FormEvent, useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(value.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md items-center justify-center gap-2"
    >
      <input
        type="text"
        placeholder="Searching for tournament..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
