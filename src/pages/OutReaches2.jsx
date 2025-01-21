import React from "react";

const CommunityGallery = () => {
    // Sample data for gallery images and stats
    const stats = [
        { number: "10,000+", label: "Children Reached" },
        { number: "200+", label: "Outreach Events Organized" },
        { number: "5,000+", label: "Volunteers Engaged" },
    ];

    const galleryCategories = [
        {
            title: "Educational Workshops",
            images: [
                "/api/placeholder/300/225",
                "/api/placeholder/300/225",
                "/api/placeholder/300/225",
            ],
        },
        {
            title: "Community Clean-Ups",
            images: [
                "/api/placeholder/300/225",
                "/api/placeholder/300/225",
                "/api/placeholder/300/225",
            ],
        },
        {
            title: "Skill Training Programs",
            images: [
                "/api/placeholder/300/225",
                "/api/placeholder/300/225",
                "/api/placeholder/300/225",
            ],
        },
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-[400px] bg-blue-600 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl font-bold text-white mb-4 font-inter">
                        Making a Difference Together
                    </h1>
                    <p className="text-2xl text-white font-inter">
                        Explore moments from our impactful community outreach
                        programs.
                    </p>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-black text-center mb-12">
                        Our Impact in Numbers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-2xl font-bold text-blue-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-base text-black">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-black text-center mb-12">
                        Gallery of Our Activities
                    </h2>
                    {galleryCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-16">
                            <h3 className="text-2xl font-bold text-black mb-6 border-t border-gray-200 pt-8">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {category.images.map((image, imageIndex) => (
                                    <div
                                        key={imageIndex}
                                        className="relative group overflow-hidden rounded-lg"
                                    >
                                        <img
                                            src={image}
                                            alt={`${category.title} ${
                                                imageIndex + 1
                                            }`}
                                            className="w-full h-[225px] object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span className="text-white text-lg font-semibold">
                                                View More
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Story Section */}
            <section className="relative h-[400px]">
                <img
                    src="/api/placeholder/1440/400"
                    alt="Featured Story"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Empowering Women in Rural Communities
                        </h2>
                        <p className="text-xl text-white mb-6">
                            How our skill training programs are changing lives.
                        </p>
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg w-fit hover:bg-blue-700 transition-colors">
                            Read More
                        </button>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-blue-600 py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Be a Part of the Change
                    </h2>
                    <p className="text-xl text-white mb-8">
                        Join our mission to empower communities through
                        impactful outreach.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                            Volunteer With Us
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                            Donate Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CommunityGallery;
