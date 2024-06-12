import { TypeAnimation } from 'react-type-animation';

const Typeeffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Front End Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Nextjs Developer',
        1000,
        
      ]}
    //   wrapper="span"
        className='text-[25px] md:text-[35px] text-[#55e6a5] font-bold uppercase'
    speed={50}
    //   style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
export default Typeeffect;