import React from 'react';
import withStylesProps from './withStylesProps';
import SimpleTable from './SimpleTable';


const styles = props => theme => {
  const w = props.tableStyle.w || [];
  const totalWidth = w.reduce((prev, curr) => prev + curr, 0);
  const w0 = w.map(cur => cur/totalWidth * 100);

  let result = {
    table: {
      tableLayout: 'fixed',
      width: '50%',
      whiteSpace: 'nowrap',
    },
    td: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  };
  for (let i = 0; i < w.length; i++) {
    const key = `th${i}`;
    const obj = {
      [key]: {
        width: `${w0[i]}%`,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    };
    result = Object.assign(result, obj);
  }
  console.log(result);

  return result;
};

export default withStylesProps(styles)(
  props => (
      <SimpleTable classes={props.classes} />
  )
);
