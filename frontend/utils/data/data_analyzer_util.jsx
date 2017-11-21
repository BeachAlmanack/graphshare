export const NUMERICAL = 'Numerical';
export const DATE = 'Date';
export const CATEGORICAL = 'Categorical';

const rowsToColumns = (data) => {
  const dataset = {};
  const keys = Object.keys(data[0]);
  keys.forEach((key, idx) => {
    dataset[idx] = { data: [] };
    dataset[idx].name = key;
  });
  data.forEach((d) => {
    keys.forEach((key, idx) => {
      dataset[idx].data.push(d[key]);
    });
  });
  return dataset;
};

export const verifyNumberColumn = (column) => {
  for (let i = 0; i < column.length; i += 1) {
    const matches = column[i].match(/-?\d+[.|,]?\d*/);
    if (!matches || (matches && matches[0] !== column[i])) {
      return column[i];
    }
  }
  return null;
};

export const verifyDateColumn = (column) => {
  for (let i = 0; i < column.length; i += 1) {
    const matches = column[i].match(/\d{2,4}[-|/]\d{2,4}[-|/]\d{2,4}/);
    if (!matches || (matches && matches[0] !== column[i])) {
      return column[i];
    }
  }
  return null;
};

const removeTrailingAndLeadingSpaces = (string) => {
  return string.replace(/^\s+|\s+$/g, '').replace(/['"]+/g, '');
};

const cleanRow = (row) => {
  return Object.keys(row).reduce((acc, key) => {
    acc[removeTrailingAndLeadingSpaces(key)] = removeTrailingAndLeadingSpaces(row[key]);
    return acc;
  }, {});
};

export const formatData = (rows) => {
  const cleanedRows = rows.map(row => cleanRow(row));
  const arrayData = rowsToColumns(cleanedRows);
  const columnIds = Object.keys(arrayData);
  const header = {};
  
  columnIds.forEach((column) => {
    let name = '';
    switch (null) {
      case verifyNumberColumn(arrayData[column].data):
        name = removeTrailingAndLeadingSpaces(arrayData[columnIds[column]].name);
        header[name] = NUMERICAL;
        break;
      case verifyDateColumn(arrayData[column].data):
        name = removeTrailingAndLeadingSpaces(arrayData[columnIds[column]].name);
        header[name] = DATE;
        break;
      default:
        name = removeTrailingAndLeadingSpaces(arrayData[columnIds[column]].name);
        header[name] = CATEGORICAL;
        break;
    }
  });

  return {
    rows: cleanedRows,
    header,
  };
};
