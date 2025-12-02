export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 9,
    name: "Christian von Koenigsegg",
    role: "Founder & CEO",
    company: "Koenigsegg Automotive",
    avatar:
      "https://i.pinimg.com/originals/59/53/1d/59531d7d10720f97fc63ef6fb7b722fd.jpg",
    content:
      "Dyexa consistently delivered high-quality work on time. His communication skills and ability to work collaboratively made project management smooth. He's proactive in identifying potential issues and proposing solutions.",
    rating: 5,
    date: "Mar 2025",
  },

  // You can add others testimonials with the same configuration above.
