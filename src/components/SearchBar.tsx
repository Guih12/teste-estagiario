"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/MovieList?query=${encodeURIComponent(query)}`);
    }
  };

  const handleOpenSearch = () => {
    setIsOpen(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setQuery(""); 
      }
    };

    const handleBlur = () => {
      if (!query.trim()) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    inputRef.current?.addEventListener("blur", handleBlur);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      inputRef.current?.removeEventListener("blur", handleBlur);
    };
  }, [query]);

  return (
    <div className="relative flex items-center">
      <div
        className="w-10 h-10 flex items-center justify-center hover:bg-neutral-900 rounded-lg cursor-pointer hover:opacity-80"
        onClick={handleOpenSearch}
      >
        <Search className="w-6 h-6 text-white" />
      </div>
      <div
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out ${
          isOpen ? "w-64 opacity-100" : "w-0 opacity-0"
        } overflow-hidden rounded-lg`} 
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(); 
            }
          }}
          className="bg-neutral-800 text-white px-4 py-2 rounded-lg border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-500 w-full"
        />
      </div>
    </div>
  );
}