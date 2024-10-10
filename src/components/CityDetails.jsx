import React from "react";
import { useParams } from "react-router-dom";
import { cards } from "../card";
import newyork from "../assets/newyork.mp4";
const CityDetails = () => {
  const { text } = useParams();
  const cityCard = cards.find((card) => card.text === text);

  return (
    <div className="pt-20 text-center">
      <div className="hero-image ">
        <div
          className="hero-text bg-center bg-cover bg-no-repeat h-[500px]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1693724818490-4f08be4ed0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <h3>California</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            nostrum eligendi, voluptas omnis exercitationem similique molestias
            corporis consectetur aut, eos dolores nulla cumque assumenda! Iusto,
            ex optio modi quam molestiae amet doloribus earum? Corrupti
            veritatis magnam eveniet consectetur et eos!
          </p>
          <button>walk night</button>
        </div>
      </div>
      <div class="lg:px-20 md:px-6 px-4 md:py-12 py-8 ">
        <div class="flex">
          <div class="lg:w-1/3">
            <h1 class="text-4xl font-semibold leading-9 text-gray-800">
              {cityCard.text}
            </h1>
            <p class="text-base leading-6 mt-4 text-gray-600">
              {cityCard.description}
            </p>
          </div>
          <div class="lg:w-7/12 lg:mt-0 mt-8">
            <div class="w-full h-full">
              <img src={cityCard.bg} alt={cityCard.text} />
            </div>
            {/* <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                        <img src="https://i.ibb.co/4Jrp5TB/pexels-max-vakhtbovych-6782370-1.png" class="w-full" alt="kitchen" />
                        <img src="https://i.ibb.co/0Jv3FSy/pexels-max-vakhtbovych-6436799-1-1.png" class="w-full" alt="sitting room" />
                    </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
