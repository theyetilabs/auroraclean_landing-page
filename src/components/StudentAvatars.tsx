"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function StudentAvatars() {
  // Using placeholder images from UI Faces for testing
  const avatars = [
    "/images/hero/01.png",
    "/images/hero/04.png",
    "/images/hero/05.png",
    "/images/hero/02.png",
    "/images/hero/03.png",
  ];

  return (
    <div className="flex -space-x-3">
      {avatars.map((avatar, index) => (
        <Avatar key={index} className="border-2 border-white w-8 h-8">
          <AvatarImage src={avatar} alt={`Student ${index + 1}`} />
        </Avatar>
      ))}
    </div>
  );
}
