import Link from "next/link";
import React from "react";
const categories = [
  { name: "React", slug: "react" },
  { name: "Web Development", slug: "web-dev" },
];
export const Header = () => {
  return (
    <div className="container mx-auto px-10 mb=8">
      <div className="border-b w-full inline-block border-b-blue-400 py-8">
        <div className="md:float-left block">
          <Link href={"/"}>
            <span className="cursor-pointer font-bold text-4xl text-white"></span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((item) => (
            <Link href={`/category/${item.slug}`} key={item.slug}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
