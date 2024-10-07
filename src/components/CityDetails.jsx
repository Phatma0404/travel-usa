import React from "react";
import { useParams } from "react-router-dom";
import { cards } from "../card";

const CityDetails = () => {
    const { text } = useParams();

    const cityCard = cards.find((card) => card.text === text);

    return (
        /*
             {cityCard ? (
                    <div>
                        <h2>{cityCard.text}</h2>
                        <img src={cityCard.bg} alt={cityCard.text} />
                        <p>{cityCard.description}</p>
                    </div>
                ) : (
                    <p>City not found</p>
                )}
            */
        <div className="pt-20 text-center">
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
