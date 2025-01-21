import {
    FiCheckCircle,
    FiUsers,
    FiBookOpen,
    FiTarget,
    FiClock,
    FiVideo,
    // FiAward,
    // FiBook,
} from "react-icons/fi";
import PropTypes from "prop-types";

const ProgramSection = ({ icon: Icon, title, items }) => (
    <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
            <Icon size={24} className="text-[#0020F1]" />
            <h4 className="text-xl font-semibold text-[#333333]">{title}</h4>
        </div>
        <ul className="space-y-3 pl-9">
            {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                    <FiCheckCircle
                        size={20}
                        className="text-[#0020F1] flex-shrink-0 mt-1"
                    />
                    <span className="text-[#555555]">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

ProgramSection.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array,
    icon: PropTypes.func,
};

function ServiceDescription({ package_ }) {
    return (
        <div className="space-y-8">
            <ProgramSection
                icon={FiTarget}
                title="Target Audience"
                items={package_.targetAudience}
            />

            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <FiClock size={24} className="text-[#0020F1]" />
                    <h4 className="text-xl font-semibold text-[#333333]">
                        Program Structure
                    </h4>
                </div>
                <div className="pl-9 space-y-3">
                    <div className="flex items-center gap-3">
                        <FiClock size={20} className="text-[#0020F1]" />
                        <span className="text-[#555555]">
                            {package_.structure.duration}
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <FiVideo size={20} className="text-[#0020F1]" />
                        <span className="text-[#555555]">
                            {package_.structure.format}
                        </span>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <FiBookOpen size={20} className="text-[#0020F1]" />
                            <span className="text-[#555555] font-semibold">
                                Course Content:
                            </span>
                        </div>
                        <ul className="space-y-3 pl-8">
                            {package_.structure.content.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <FiCheckCircle
                                        size={20}
                                        className="text-[#0020F1] flex-shrink-0 mt-1"
                                    />
                                    <span className="text-[#555555]">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <ProgramSection
                icon={FiUsers}
                title="Interactive Elements"
                items={package_.interactive}
            />
        </div>
    );
}

export default ServiceDescription;

ServiceDescription.propTypes = {
    package_: PropTypes.object,
};
