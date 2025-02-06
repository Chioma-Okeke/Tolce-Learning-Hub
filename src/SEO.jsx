import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const SearchEngineConfig = ({ title, description, url, image }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta name="robots" content="index, follow" />
        </Helmet>
    );
};

SearchEngineConfig.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string
};

export default SearchEngineConfig;
