import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Label
} from 'recharts';

type DataPoint = {
  date: string;
  value: number;
};

type SimpleGraphProps = {
  data: DataPoint[];
  yLabel: string
}

export const SimpleGraph = ({data, yLabel}: SimpleGraphProps) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis>
        <Label angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }}>
          {yLabel}
        </Label>
      </YAxis>
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
);
