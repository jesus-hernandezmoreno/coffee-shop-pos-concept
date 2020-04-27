import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue } from 'framer-motion';

const Slider = styled(motion.div)`
  display: flex;
  cursor: grab;
`;

const DragSlider = ({
  children,
  bounceStiffness = 100, // Affects the stiffness of the bounce spring. Higher values will create more sudden movement.
  bounceDamping = 10 // affects the damping of the bounce spring. If set to 0, spring will oscillate indefinitely.
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);

  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0);
  const [sliderConstraints, setSliderConstraints] = useState(0);
  useEffect(() => {
    const calcSliderChildrenWidth = () => {
      setSliderChildrenWidth(
        Array.from(ref.current.childNodes).reduce((acc, node) => acc + node.clientWidth, 0)
      );
    };
    calcSliderChildrenWidth();
    const calcSliderWidth = () => {
      setSliderWidth(ref.current.clientWidth);
    };
    calcSliderWidth();
    window.addEventListener('resize', calcSliderWidth);
    const calcSliderConstraints = () => {
      setSliderConstraints(sliderChildrenWidth - sliderWidth / 2);
    };
    calcSliderConstraints();
    window.addEventListener('resize', calcSliderConstraints);
    return () => {
      window.removeEventListener('resize', calcSliderWidth);
      window.removeEventListener('resize', calcSliderConstraints);
    };
  }, [ref, sliderChildrenWidth, sliderWidth]);

  const SliderWrap = ({ children }) => {
    return (
      <div style={{ overflowX: 'hidden', padding: '7rem 0' }}>
        <Slider
          ref={ref}
          drag="x"
          initial={{ x: 0 }}
          style={{ x }}
          dragConstraints={{
            left: `${-sliderConstraints}`,
            right: 0
          }}
          dragTransition={{ bounceStiffness, bounceDamping }}
        >
          {children}
        </Slider>
      </div>
    );
  };
  return <SliderWrap>{children}</SliderWrap>;
};

export default DragSlider;
