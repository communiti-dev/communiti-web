import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';

export const Slider = () => {
  // const { data } = props;
  const data = [
    {
      id: 0,
      image:
        "https://res.cloudinary.com/dufj1pdmy/image/upload/v1676801450/communiti/rohan_bxejxv.jpg",
      name: "Rohan Ranjan",
      title: "Blockchain Engineer",
      packagee: "41 LPA",
      quote:
        "I feel privileged to recommend 'communiti' to anyone who wants to enter web3 without any prior knowledge. The career support at 'communiti' has always been there when I needed help on a last minute cram session for an interview or if I needed someone to talk to about the job search. 'communiti' has played a huge part in my life, and I couldn't be more thankful!",
    },
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dufj1pdmy/image/upload/v1676801462/communiti/shubhm_pntaq8.jpg",
      name: "Shubham Rathod",
      title: "Blockchain Engineer",
      packagee: "15 LPA",
      quote:
        "I feel privileged to recommend 'communiti' to anyone who wants to enter web3 without any prior knowledge. Thanks to them I was able to scale exponentially not only in skills also land a web3 job in just few months.",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dufj1pdmy/image/upload/v1676801461/communiti/suman_q3tw7f.jpg",
      name: "Suman Chakraborty",
      title: "Blockchain Developer",
      quote:
        "The community at 'communiti' is what got me through the rough days! I have met some amazing fellow engineers at 'communiti', and we have grown together, challenged each other, and even cried together. The career support at 'communiti' has always been there when I needed help on a last minute cram session for an interview or if I needed someone to talk to about the job search. 'communiti' has played a huge part in my life, and I couldn't be more thankful!",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dufj1pdmy/image/upload/v1676801450/communiti/anil_zf5xca.jpg",
      name: "Anil Pujari",
      title: "Full-stack Blockchain Developer",
      packagee: "15 LPA",
      quote:
        "Transition from Software Developer to BlockChain Engineer is not that easy as it's sounds. 'communiti' helps me make it easy with it's relevant curriculum and learning journey.",
    },
    // {
    //   id: 4,
    //   image:
    //     "https://res.cloudinary.com/dufj1pdmy/image/upload/v1676801449/communiti/akash_hnxzcn.jpg",
    //   name: "Akash Vaghela",
    //   title: "Full-stack Developer",
    //   packagee: "",
    //   quote:
    //     "Transition from Software Developer to BlockChain Engineer is not that easy as it's sounds. 'communiti' helps me make it easy with it's relevant curriculum and learning journey.",
    // },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dufj1pdmy/image/upload/v1676806329/communiti/shaka_d50lid.jpg",
      name: "Sankalp Mishra",
      title: "Senior Frontend Developer",
      packagee: "14 LPA",
      quote:
        "After months of graduation, I still have support from Communiti. The best thing? They teach you 'how to learn' and not just what to learn. And because the world is so fast-paced, learning how to learn can help you make the most of the dynamic times we live in.",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dufj1pdmy/image/upload/v1676877789/communiti/aditya_os4rvk.jpg",
      name: "Aditya Shukla",
      title: "Software Engineer - II",
      packagee: "12 LPA",
      quote:
        "Even though I already had the passion to be a software developer all along, it was Communiti who provides me with the right framework and support. Due to my training at Communiti I was able to crack the interview at Tech Alchemy and get the job as SDE-II.",
    },
    {
      id: 11,
      image: "",
      name: "& many more...",
      title: "",
      quote: "",
    },
  ];

  const [people] = useState(data);
  const [index, setIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people, isHover]);

  useEffect(() => {
    if (!isHover) {
      let slider = setInterval(() => {
        setIndex(index + 1);
      }, 4500);
      return () => {
        clearInterval(slider);
      };
    }
  }, [index,isHover]);

  return (
    <div className="root">
      <section className="section">
        <div className="title-slider">
          <h2>Testimonials</h2>
        </div>
        <div className="button-container">
          {/* <Image src={LeftIcon} onClick={() => setIndex(index - 1)} />
          <span className="count-img"></span>
          <Image src={RightIcon} onClick={() => setIndex(index + 1)} /> */}
        </div>
        <div className="section-center" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote, packagee } = person;
            let position = 'nextSlide';
            if (personIndex === index) {
              position = 'activeSlide';
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = 'lastSlide';
            }
            return (
              <article className={position} key={id}>
                {image && (
                  <Image
                    src={image}
                    alt={name}
                    height={150}
                    width={150}
                    className="person-img"
                  />
                )}
                <h4>{name}</h4>
                {packagee && <p className="package">Package: {packagee}</p>}
                <p className="title-slider">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};
