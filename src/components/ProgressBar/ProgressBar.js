/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: '8px',
    padding: '0px',
    outerRadius: '4px',
  },
  medium: {
    height: '12px',
    padding: '0px',
    outerRadius: '4px',
  },
  large: {
    height: '16px',
    padding: '4px',
    outerRadius: '8px',
  },
};

const ProgressBar = ({ value, size }) => {
  // return <strong>{value}</strong>;
  const styles = STYLES[size]

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return <ProgressWrapper role="progressbar" aria-label={'Progress Bar'} aria-valuenow={value} max={100} min={0} value={value} style={{'--padding': styles.padding, '--outer-radius': styles.outerRadius }}>
    <BarWrapper>
      <Bar value={value} style={{'--width': value + "%", '--height': styles.height}} />
    </BarWrapper>
    <VisuallyHidden>{value + "%"}</VisuallyHidden>
  </ProgressWrapper>
};

const ProgressWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--outer-radius);
  padding: var(--padding);
  `

const BarWrapper = styled.div`
  /* Trim progress bar edges to match border radius */
  overflow: hidden;
  border-radius: 4px;
`

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
  background-color: ${COLORS.primary};
`

export default ProgressBar;
