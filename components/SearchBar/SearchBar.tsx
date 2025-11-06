"use client";
import { FormEvent, useState } from "react";
import Button from "../Button/Button";

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
      className="flex flex-col sm:flex-row w-full max-w-md items-center justify-center gap-2"
    >
      <input
        type="text"
        placeholder="Searching for tournament..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 bg-white dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button text="Search" type="submit" />
    </form>
  );
}
