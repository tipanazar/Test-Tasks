import { PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";

const StatisticsPie = ({ width, height, data, dataKey, pieRadius }) => {
  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        isAnimationActive={true}
        outerRadius={pieRadius}
        fill="#8884d8"
        dataKey={dataKey}
        label
        labelLine
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={["#058f00b3", "#d70000b5"][index]}
          />
        ))}
      </Pie>
    </PieChart>
  );
};

export default StatisticsPie;

StatisticsPie.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataKey: PropTypes.string.isRequired,
  pieRadius: PropTypes.number.isRequired,
};
