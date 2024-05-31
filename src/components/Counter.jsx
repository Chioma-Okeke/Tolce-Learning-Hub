/* eslint-disable react/prop-types */
import React from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Counter({ number }) {
    const [isCounterTriggered, setIsCounterTriggered] = React.useState(false);

    return (
        <div>
            <ScrollTrigger
                onEnter={() => setIsCounterTriggered(true)}
                onExit={() => setIsCounterTriggered(false)}
            >
                <h2 className="text-7xl sm:text-6xl font-bold text-[#141414]">
                    {isCounterTriggered && (
                        <CountUp
                            start={0}
                            end={number}
                            duration={2.75}
                        ></CountUp>
                    )}
                    +
                </h2>
            </ScrollTrigger>
        </div>
    );
}

export default Counter;
