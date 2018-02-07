import React from 'react';
import withStylesProps from './withStylesProps';
import SimpleTable from './SimpleTable';


const styles = props => theme => {
  const w = props.tableStyle.w || [];
  const totalWidth = w.reduce((prev, curr) => prev + curr, 0);
  const w0 = w.map(cur => cur/totalWidth * 100);

  return ({
    table: {
      tableLayout: 'fixed',
      width: '50%',
      whiteSpace: 'nowrap',
    },
    th0: {
      width: `${w0[0]}%`,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    td: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  });
};

export default withStylesProps(styles)(
  props => (
      <SimpleTable classes={props.classes} />
  )
);
