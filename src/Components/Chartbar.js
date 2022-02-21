import React from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const Chartbar = () => {
  const data = [
    {
      type: 'JUL',
      sales: 38,
    },
    {
      type: 'AUG',
      sales: 52,
    },
    {
      type: 'SEP',
      sales: 61,
    },
    {
      type: 'OCT',
      sales: 145,
    },
    {
      type: 'NOV',
      sales: 48,
    },
    {
      type: 'DEC',
      sales: 38,
    },
   
  ];

  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    columnWidthRatio: 0.4,
    xAxis: {
      label: {
        autoHide: false,
        autoRotate: false,
        
      },
      
    },
    
    meta: {
      type: {
        alias: 'data',
      },
      sales: {
        alias: 'Sales',
      },
    },
    
  };
  return <Column {...config} />;
};

export default Chartbar;