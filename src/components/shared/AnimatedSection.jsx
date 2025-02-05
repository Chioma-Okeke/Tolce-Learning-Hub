
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types"

function AnimatedSection({ children, ...props }) {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.08,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedSection

AnimatedSection.propTypes = {
    children: PropTypes.element
}