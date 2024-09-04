import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HeroSection = () => {
  const items = [
    "Women's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home and Lifestyle",
    "Medicine",
    "Sports and Outdoor",
    "Baby's and Toys",
    "Groceries and Pets",
    "Health and Beauty",
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="container mx-auto flex flex-wrap">
      {/* Listing Section */}
      <div className="w-full md:w-4/12 p-4">
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={index} className="list-none">
              <a
                href={`#${item.replace(/\s+/g, "-").toLowerCase()}`}
                className="block p-1 hover:bg-blue-500 hover:text-white transition rounded"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Section */}
      <div className="w-full md:w-8/12 h-full">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div
            className="h-72 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fGxpb258ZW58MHx8fHwxNjE3NzA0Mzg4&ixlib=rb-1.2.1&q=80&w=1080')` }}
          ></div>
          <div
            className="h-72 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555685812-4b743c6e0c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEzfHxkb2d8ZW58MHx8fHwxNjE3NzA0NjI5&ixlib=rb-1.2.1&q=80&w=1080')` }}
          ></div>
          <div
            className="h-72 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDN8fGNhfGVufDB8fHx8MTYxNzcwNDY4Mg&ixlib=rb-1.2.1&q=80&w=1080')` }}
          ></div>
          <div
            className="h-72 bg-cover bg-center"
            style={{ backgroundImage: `url('https://unsplash.com/photos/a-couple-of-plates-of-fruit-on-a-table-4nLZqY0myug')` }}
          ></div>
          <div
            className="h-72 bg-cover bg-center"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDIyfHxkZWVyfGVufDB8fHx8MTYxNzcwNDc1MA&ixlib=rb-1.2.1&q=80&w=1080')` }}
          ></div>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
