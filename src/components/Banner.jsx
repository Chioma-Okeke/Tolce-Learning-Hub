import PropTypes from "prop-types"

function Banner({ testimonialData }) {
    return (
        <div className="banner-wrapper">
            <div className="wrapper">
                {/* First set of cards */}
                <div className="cards">
                    {testimonialData.map((testimonial, index) => (
                        <div
                            key={index}
                            className="card flex-shrink-0 w-[90%] max-w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col-reverse justify-between"
                        >
                            <div className="flex items-center gap-5 mt-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="rounded-full w-16 h-16"
                                />
                                <div>
                                    <p className="font-bold">
                                        {testimonial.name}
                                    </p>
                                    <h2 className="font-semibold text-sm">
                                        {testimonial.cohort}
                                    </h2>
                                </div>
                            </div>
                            <p className="mt-2 text-sm text-wrap">
                                {testimonial.message}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Second set of cards */}
                <div className="cards">
                    {testimonialData.map((testimonial, index) => (
                        <div
                            key={index}
                            className="card flex-shrink-0 w-[90%] max-w-[300px] p-4 rounded-lg shadow-lg bg-white flex flex-col-reverse justify-between"
                        >
                            <div className="flex items-center gap-5 mt-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="rounded-full w-16 h-16"
                                />
                                <div>
                                    <p className="font-bold">
                                        {testimonial.name}
                                    </p>
                                    <h2 className="font-semibold text-sm">
                                        {testimonial.cohort}
                                    </h2>
                                </div>
                            </div>
                            <p className="mt-2 text-sm text-wrap">
                                {testimonial.message}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Banner;

Banner.propTypes = {
    testimonialData: PropTypes.object
}
