"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function StudentAvatars() {
  // Using placeholder images from UI Faces for testing
  const avatars = [
    "/images/headshot/headshot-01.png",
    "/images/headshot/headshot-02.png",
    "/images/headshot/headshot-03.png",
    "/images/headshot/headshot-04.png",
    "/images/headshot/headshot-05.png",
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
