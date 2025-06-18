import { blog1 } from "./blog1";
import { blog2 } from "./blog1";
import { BlogPost } from "@/services/blogs.service";
const staticBlogs: BlogPost[] = [
  {
    id: "gym-cleaning-in-sydney-keeping-your-fitness-facility-spotless",
    title: "Gym Cleaning in Sydney: Keeping Your Fitness Facility Spotless.",
    content: blog1.toString(),
    createdAt: "2025-04-22T06:08:57.763Z",
    updatedAt: "2025-04-22T06:40:44.131Z",
    categories: [
      {
        id: "cm9s3o7790001ejsykm4iujgf",
        name: "Gym Cleaning",
      },
      {
        id: "cm9s3of750003ejsyffypabpb",
        name: "Sydney",
      },
      {
        id: "cm9s3p32z0005ejsyysgj6zo2",
        name: "Fitness",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1685633224402-3410df959f98?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    id: "eco-friendly-cleaning-in-sydney-how-aurora-keeps-your-workplace-green",
    title:
      "Eco-Friendly Cleaning in Sydney: How Aurora Keeps Your Workplace Green",
    content: blog2.toString(),
    createdAt: "2025-04-21T08:30:00.000Z",
    updatedAt: "2025-04-21T09:15:22.131Z",
    categories: [
      {
        id: "cm9s3o7790001ejsykm4iujgf",
        name: "Eco-Friendly Cleaning",
      },
      {
        id: "cm9s3p32z0005ejsyysgj6zo2",
        name: "Sydney",
      },
    ],
    imageUrls: [
      "https://images.unsplash.com/photo-1737372805905-be0b91ec86fb?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
];

export default staticBlogs;
