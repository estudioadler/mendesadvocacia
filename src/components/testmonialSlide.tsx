"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  imgSrc: string;
  quote: string;
  role: string;
}

interface TestimonialSliderCardProps {
  testimonials: Testimonial[];
}

export default function TestimonialSliderCard({
  testimonials,
}: TestimonialSliderCardProps) {

  return (
    <section className="w-full py-4">
      <div className="mx-auto px-3">
        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="">
                <Card className="shadow-none border-none">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="flex flex-col gap-5 px-4 py-5 sm:p-6">
                      <div className="mt-6 flex gap-3">
                        <span className="inline-flex rounded-full">
                          <Image
                            className="h-10 w-10 rounded-full"
                            height={40}
                            width={40}
                            alt={testimonial.name}
                            src={testimonial.imgSrc}
                            loading="lazy"
                          />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <q className="flex-1 text-gray-600 dark:text-gray-300">
                        {testimonial.quote}
                      </q>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant={"ghost"}>
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </CarouselPrevious>
          <CarouselNext variant={"ghost"}>
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}