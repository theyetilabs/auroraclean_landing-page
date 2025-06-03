import { blog1 } from "./blog1";
import { blog2 } from "./blog1";
import { BlogPost } from "@/services/blogs.service";
const staticBlogs: BlogPost[] = [
  {
    id: "navigating-job-opportunities-in-japan-with-an-ssw-visa-acc8d5-22",
    title: "Navigating Job Opportunities in Japan with an SSW Visa",
    content: blog1.toString(),
    createdAt: "2025-04-22T06:08:57.763Z",
    updatedAt: "2025-04-22T06:40:44.131Z",
    categories: [
      {
        id: "cm9s3o7790001ejsykm4iujgf",
        name: "SSW Visa",
      },
      {
        id: "cm9s3of750003ejsyffypabpb",
        name: "work in japan",
      },
      {
        id: "cm9s3p32z0005ejsyysgj6zo2",
        name: "japanese language",
      },
    ],
    imageUrls: [
      "/images/blog-1.png",
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MDc0MTd8MHwxfHNlYXJjaHwyfHxKYXBhbiUyMFNTVyUyMFZpc2F8ZW58MHx8fHwxNzQ1MzAyMjMzfDA&ixlib=rb-4.0.3&q=85",
      "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MDc0MTd8MHwxfHNlYXJjaHwzfHxKYXBhbiUyMFNTVyUyMFZpc2F8ZW58MHx8fHwxNzQ1MzAyMjMzfDA&ixlib=rb-4.0.3&q=85",
    ],
  },
  {
    id: "your-dream-of-working-in-japan-closer-than-you-think-bcc9e6",
    title: "Your Dream of Working in Japan is Closer Than You Think!",
    content: blog2.toString(),
    createdAt: "2025-04-21T08:30:00.000Z",
    updatedAt: "2025-04-21T09:15:22.131Z",
    categories: [
      {
        id: "cm9s3o7790001ejsykm4iujgf",
        name: "SSW Visa",
      },
      {
        id: "cm9s3p32z0005ejsyysgj6zo2",
        name: "japanese language",
      },
    ],
    imageUrls: [
      "/images/blog-2.png",
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    ],
  },
];

export default staticBlogs;
