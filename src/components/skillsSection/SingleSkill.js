const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        {/* Updated text color & border to blue */}
        <div className="bg-white text-blue h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-blue">
          {imgSvg}
        </div>
        <p className="text-white font-bold">{text}</p>
      </div>
      {/* Changed background from orange to blue */}
      <div className="w-[100px] h-[200px] bg-blue absolute top-[50px] -z-10"></div>
    </div>
  );
};

export default SingleSkill;
