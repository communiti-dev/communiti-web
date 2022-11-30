import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaQuoteRight } from 'react-icons/fa';

export const Slider = () => {
  // const { data } = props;
  const data = [
    {
      id: 1,
      image:
        'https://media-exp1.licdn.com/dms/image/C5603AQGP4Y0k5oUCwg/profile-displayphoto-shrink_100_100/0/1620297582544?e=1675296000&v=beta&t=jsF0reAFAyz4_1-EAeWQMBxvpsdqYaSY_TjMSAhJvVE',
      name: 'Rohan Ranjan',
      title: 'Blockchain Engineer',
      packagee: '41 LPA',
      quote:
        "I feel privileged to recommend 'communiti' to anyone who wants to enter web3 without any prior knowledge. The career support at 'communiti' has always been there when I needed help on a last minute cram session for an interview or if I needed someone to talk to about the job search. 'communiti' has played a huge part in my life, and I couldn't be more thankful!",
    },
    {
      id: 1,
      image:
        'https://media-exp1.licdn.com/dms/image/C5603AQHXj11G1gbPRw/profile-displayphoto-shrink_100_100/0/1624866347967?e=1675296000&v=beta&t=0RvXMu_-V2Rb33-LeGcYLHBrCevlUlNOZGOjVb5S2Yw',
      name: 'Shubham Rathod',
      title: 'Blockchain Engineer',
      packagee: '15 LPA',
      quote:
        "I feel privileged to recommend 'communiti' to anyone who wants to enter web3 without any prior knowledge. Thanks to them I was able to scale exponentially not only in skills also land a web3 job in just few months.",
    },
    {
      id: 2,
      image:
        'https://media-exp1.licdn.com/dms/image/C4E03AQH-W-F1_KBiHQ/profile-displayphoto-shrink_100_100/0/1628682264014?e=1675296000&v=beta&t=B1G0Gp52zOT48ccUM0kqAwyJfjrXXAw5yUVa1ITn4W8',
      name: 'Suman Chakraborty',
      title: 'Blockchain Developer',
      quote:
        "The community at 'communiti' is what got me through the rough days! I have met some amazing fellow engineers at 'communiti', and we have grown together, challenged each other, and even cried together. The career support at 'communiti' has always been there when I needed help on a last minute cram session for an interview or if I needed someone to talk to about the job search. 'communiti' has played a huge part in my life, and I couldn't be more thankful!",
    },
    {
      id: 3,
      image:
        'https://media-exp1.licdn.com/dms/image/C5603AQH1Htz4chj1uQ/profile-displayphoto-shrink_100_100/0/1632641203417?e=1675296000&v=beta&t=12K3wM2Ejti1P4lql-ZtBnLiAMG2YIkktuKtRPGO_gU',
      name: 'Anil Pujari',
      title: 'Full-stack Blockchain',
      packagee: '15 LPA',
      quote:
        "Transition from Software Developer to BlockChain Engineer is not that easy as it's sounds. 'communiti' helps me make it easy with it's relevant curriculum and learning journey.",
    },
    {
      id: 4,
      image: '',
      name: '& many more...',
      title: '',
      quote: '',
    },
  ];

  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4500);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

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
        <div className="section-center">
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
                    height="150px"
                    width={'150px'}
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
