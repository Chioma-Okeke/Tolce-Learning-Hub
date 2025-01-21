import React from "react";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types"

const Counter = ({ number }) => {
    const [count, setCount] = React.useState(0);
    const [ref, isInView] = useInView();

    React.useEffect(() => {
        let start = 0;
        if (isInView) {
            const end = parseInt(number);
            if (start === end) return;

            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start > end) {
                    setCount(end);
                    clearInterval(timer);
                    return;
                }
                setCount(Math.floor(start));
            }, 16);

            return () => clearInterval(timer);
        }
    }, [number, isInView]);

    return <span ref={ref}>{count.toLocaleString()}+</span>;
};

Counter.propTypes = {
    number: PropTypes.number.isRequired
}

export default Counter