import svgSprite from "../../images/svgSprite.svg";

const SvgIcon = () => {
  return (
    <svg>
      <use src={`${svgSprite}#searchIcon`}/>
    </svg>
  );
};

export default SvgIcon;
