
import { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { infoContext } from '../../Pages/Provider/Provider';



const Chart = () => {
  const {allInfo} = useContext(infoContext);
  const { X, KP } = allInfo;
  const dataX = X.slice(0, 16);
  const dataKP = KP.slice(0, 16);
  
  const chartData = dataX.map((value, index) => ({
    X: value,
    KP: dataKP[index],
  }));

  return (
    <section className="h-[50vh] md:h-[65vh] md:p-10 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="0 3" />
          <XAxis dataKey="KP" />
          <YAxis dataKey="X"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="X" fill="#319cb9" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Chart;