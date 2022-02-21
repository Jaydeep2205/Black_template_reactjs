import React from 'react';
// import ReactDOM from 'react-dom';
import { Area} from '@ant-design/plots';
import './Chart.css';

const Chart = () => {
  const data = [
    {
      year: '1991',
      value: 25,
    },
    {
      year: '1992',
      value: 20,
    },
    {
      year: '1993',
      value: 12,
    },
    {
      year: '1994',
      value: 15,
    },
    {
      year: '1995',
      value: 10,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
    {
        year: '2000',
        value: 10,   
    },
    {
        year: '2001',
        value: 12,   
    },
    {
        year: '2002',
        value: 9,   
    },
  ];
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    label: {},
    point: {
      size: 0,
      style: {
        lineWidth: 1,
      },
    },
    // tooltip: {
    //   showMarkers: true,
    // },
    state: {
      active: {
        style: {
          shadowBlur: 0,
          stroke: 'black',
          fill: 'blue',
        },
      },
    },
    interactions: [
      
    ],
  };
  return <Area {...config} className="chart" />;
};

export default Chart;