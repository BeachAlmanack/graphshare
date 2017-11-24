const convert = (dataItem, type) => {
  switch (type) {
    case 'Numerical':
      return Number(dataItem);
    default:
      return String(dataItem);
  }
};


export default function convertData(data) {
  // data.header[name]
  const newData = data;
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
