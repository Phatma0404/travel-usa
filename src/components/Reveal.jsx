import PropTypes from "prop-types";
import { useInView } from "../hooks/useScrollAnimation";

const directionStyles = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
  none: "",
};

const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className = "",
  as: Tag = "div",
}) => {
  const [ref, inView] = useInView();
  const offset = directionStyles[direction] || directionStyles.up;

  return (
    <Tag
      ref={ref}
      className={`${className} transition-all ease-out ${
        inView ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${offset}`
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(["up", "down", "left", "right", "none"]),
  delay: PropTypes.number,
  duration: PropTypes.number,
  className: PropTypes.string,
  as: PropTypes.string,
};
