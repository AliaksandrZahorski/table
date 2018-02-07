import React from 'react';
import { withStyles } from 'material-ui/styles';

const withStylesProps = styles =>
  Component =>
    props => {
      const Comp = withStyles(styles(props), { withTheme: true })(Component);
      return <Comp {...props} />;
    };

 export default withStylesProps;
