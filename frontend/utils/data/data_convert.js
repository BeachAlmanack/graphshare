import { clone } from 'lodash';
import { timeParse } from 'd3-time-format';

const convert = (dataItem, type) => {
  const subType = type.match(/\((.*?)\)/);
  switch (type.replace(/\(.*?\)/, '')) {
    case 'Numerical':
      return Number(dataItem.replace(/,/g, ''));
    case 'Date': {
      const parser = timeParse(subType[1]);
      return parser(dataItem);
    }
    default:
      return String(dataItem);
  }
};


export default function convertData(data) {
  const newData = clone(data);
  const newRows = {};
  const rowsId = Object.keys(data.rows);
  rowsId.forEach((rowId) => {
    const columnNames = Object.keys(data.rows[rowId]);
    newRows[rowId] = {};
    columnNames.forEach((name) => {
      newRows[rowId][name] = convert(data.rows[rowId][name], data.header[name]);
    });
  });
  newData.rows = newRows;
  return newData;
}

window.convertData = convertData;
