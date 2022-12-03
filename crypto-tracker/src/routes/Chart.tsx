import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchCoinHistory } from '../api';

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const param = useParams();

  const { isLoading, data } = useQuery(['ohlcv', coinId], () =>
    fetchCoinHistory(coinId)
  );

  return <div>{isLoading ? null : data[0].time_open}</div>;
}

export default Chart;
