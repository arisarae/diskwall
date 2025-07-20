"use client";
import albumDetailType from "@/types/Album";
import Image from "next/image";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

interface albumProps {
  album: albumDetailType;
}

const Rating: React.FC<albumProps> = ({ album }) => {
  const [rating, setRating] = useState(() => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(`rating-${album.id}`);
    return saved !== null ? Number(saved) : 0;
  }
  return 0;
});
  const [hovered, setHovered] = useState(0);

  useEffect(() => {
      localStorage.setItem(`rating-${album.id}`, rating.toString());
    }, [rating, album.id]);

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={45}
          className={`cursor-pointer transition-all ${
            (hovered || rating) >= star
              ? "fill-yellow-400 stroke-yellow-400"
              : "fill-gray-400 stroke-gray-400"
          }`}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => setRating(star)}
        />
      ))}
    </div>
  );
};

export default Rating;
