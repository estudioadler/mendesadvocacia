import React from "react";
import { TitleSection } from "./titleSection";
import TestimonialSliderCard from "./testmonialSlide";

export const Testmonial = () => {
  const testimonials = [
    {
      quote:
        "Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.",
      name: "Rose Roberson",
      role: "CEO at Company",
      imgSrc: "/vercel.svg",
    },
    {
      quote:
        "Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation. Culpa consectetur dolor pariatur commodo aliqua amet tempor nisi enim deserunt elit cillum.",
      name: "Chace Rodgers",
      role: "CEO at Company",
      imgSrc: "/vercel.svg",
    },
    {
      quote:
        "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
      name: "Cornelius Sheppard",
      role: "CEO at Company",
      imgSrc: "/vercel.svg",
    },
    {
      quote:
        "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Chace Rodgers",
      role: "CEO at Company",
      imgSrc: "/vercel.svg",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Cornelius Sheppard",
      role: "CEO at Company",
      imgSrc: "/vercel.svg",
    },
    {
      quote:
        "Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.",
      name: "Chace Rodgers",
      role: "CEO at Company",
      imgSrc: "/vercel.svg",
    },
    {
      quote:
        "Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.",
      name: "Cornelius Sheppard",
      role: "CEO at Company",
      imgSrc: "/vercel.svg",
    },
  ];
  return (
      <TitleSection
        title="Schedule a free case evaluation"
        tagTitle="Get in touch"
      >
        <TestimonialSliderCard testimonials={testimonials} />
      </TitleSection>
  );
};
