import { clone } from 'lodash';
import { timeParse } from 'd3-time-format';
import * as DataType from '../constants/data_types';

const convert = (dataItem, type) => {
  switch (DataType.getType(type)) {
    case DataType.NUMERICAL:
      return Number(dataItem.replace(/,/g, ''));
    case DataType.DATE: {
      const parser = timeParse(DataType.getSubType(type));
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
