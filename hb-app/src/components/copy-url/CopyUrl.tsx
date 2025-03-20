"use client";

import { useState } from "react";

export default function CopyUrlInput() {
  const [copied, setCopied] = useState(false);
  const url = "https://example.com"; // add function that generates url and saves it to sp object, this should be done upon active subscription

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="flex items-center space-x-2 p-4 rounded-lg shadow-md max-w-md">
      <input
        type="text"
        value={url}
        readOnly
        className="flex-1 p-2 border rounded-md bg-white text-gray-800"
      />
      <button
        onClick={copyToClipboard}
        className="px-4 py-2 bg-black text-white rounded-md hover:bg-darkgoldy transition"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
