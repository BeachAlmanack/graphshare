import { scaleOrdinal, scaleLinear } from 'd3-scale';
import { max, min } from 'd3-array';

export default function scales(data) {
  
  const rows = _.values(data.rows);
  let scaleX;
  if (data.header[data.axis.x] !== 'Numerical')  {
    const ordinalRange = [];
    for (let i = 10; i < 500; i += (500 / rows.length)) {
      ordinalRange.push(i);
    }
    scaleX = scaleOrdinal().range(ordinalRange);
  } else {
    const maxx = max(rows.map(d => d[data.axis.x]));
    const minx = min(rows.map(d => d[data.axis.x]));
    scaleX = scaleLinear().domain([minx, maxx]).range([10, 500]);
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

  const scaleY = scaleLinear().domain([lowestMin, biggestMax]).range([190, 10]);

  return [scaleX, scaleY];

}