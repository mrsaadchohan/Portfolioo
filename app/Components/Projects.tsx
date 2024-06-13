import Image from "next/image";
import Link from "next/link";
import React from "react";
const Data = [
  {
    images: "/images/pic1.png",
    link: "https://shoes-one-omega.vercel.app/",
  },
  {
    images: "/images/pic5.png",
    link: "https://www.linkedin.com/posts/saad-chohan_ecommerce-nextjs-sanity-activity-7197485431079239680-eged?utm_source=share&utm_medium=member_desktop",
  },
  {
    images: "/images/pic4.png",
    link: "https://www.linkedin.com/posts/saad-chohan_piaic-nextjs-sanity-activity-7189939533625344002-Fb8U?utm_source=share&utm_medium=member_desktop",
  },
  {
    images: "/images/pic3.png",
    link: "https://panaverse-dao-chi.vercel.app/",
  },
  {
    images: "/images/pic2.png",
    link: "https://fitness-website-peach.vercel.app/",
  },
];
function Projects() {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]" id="Project">
      <h1 className="heading text-[#55e6a5]">Projects</h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {Data.map((data, id) => {
          return (
            <div key={id}>
              <Link href={data.link}>
                <div
                  className="transform cursor-pointer hover:-translate-y-3 transition-all duration-300
                    relative w-[100%] h-[200px] bg-[#f0ebeb] flex justify-center"
                >
                  <Image
                    src={data.images}
                    
                    width={400}
                    height={400}
                    alt="Projects"
                    className="object-contain p-[23px]"
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
