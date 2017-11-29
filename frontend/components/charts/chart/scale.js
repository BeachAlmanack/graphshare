import { scaleOrdinal, scaleLinear, scaleBand, scaleTime } from 'd3-scale';
import { max, min } from 'd3-array';
import { values } from 'lodash';
import * as DataType from '../../../utils/constants/data_types';

const scales = (data, width, height, band = false) => {

  const rows = values(data.rows);
  const innerWidth = width - 30;
  const innerHeight = height - 30;
  let scaleX;

  if (band) {
    const domain = rows.map(row => row[data.axis.x]);
    scaleX = scaleBand()
      .domain(domain)
      .range([20, innerWidth])
      .padding(0.1);
  } else if (DataType.getType(data.header[data.axis.x]) === DataType.DATE) {
    scaleX = scaleTime().domain([rows[0][data.axis.x], rows[rows.length - 1][data.axis.x]]).range([20, innerWidth]);
  } else if (data.header[data.axis.x] !== DataType.NUMERICAL) {
    const ordinalRange = [];
    for (let i = 20; i <= innerWidth; i += ((innerWidth - 30) / (rows.length - 1))) {
      ordinalRange.push(i);
    }
    scaleX = scaleOrdinal().range(ordinalRange);
  } else {
    const maxx = max(rows.map(d => d[data.axis.x]));
    const minx = min(rows.map(d => d[data.axis.x]));
    scaleX = scaleLinear().domain([minx, maxx]).range([20, innerWidth]);
  }

  let biggestMax;
  let lowestMin;

  data.axis.y.forEach((columName) => {
    const maxy = max(rows.map(d => d[columName]));
    if (!biggestMax || maxy > biggestMax) {
      biggestMax = maxy;
    }
    const miny = min(rows.map(d => d[columName]));
    if (!lowestMin || miny < lowestMin) {
      lowestMin = miny;
    }
  });

  if (lowestMin > 0) {
    lowestMin -= lowestMin * 0.1;
  }
  biggestMax += biggestMax * 0.1;
  const scaleY = scaleLinear().domain([lowestMin, biggestMax]).range([innerHeight, 10]);

  return [scaleX, scaleY];
};

export default scales;
