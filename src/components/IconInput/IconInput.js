import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    iconSize: 16,
    fontSize: 14,
    height: 24,
    borderThickness: 1,
  },
  large: {
    iconSize: 24,
    fontSize: 18,
    height: 36,
    borderThickness: 2,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {

  const styles = STYLES[size];
  if(!styles){
    throw new Error('Invalid size');
  }
  return(
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper 
        style={{
          '--icon-size': styles.iconSize + 'px'
        }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput 
        placeholder={placeholder} 
        style={{
          '--width': width + 'px', 
          '--font-size': styles.fontSize + 'px', 
          '--padding-left': styles.iconSize + 4 + 'px', 
          '--height': styles.height + 'px',
          '--border-thickness': styles.borderThickness + 'px',
          }}/>
    </Wrapper>
  )
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: var(--icon-size);
  margin: auto 0;
`

const TextInput = styled.input`
  border: none;
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  padding-left: var(--padding-left);
  color: inherit;
  font-weight: 700;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  outline-offset: 24px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`


export default IconInput;
