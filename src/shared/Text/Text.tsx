import React from 'react';
import styles from './text.css';
import classNames from 'classnames'

export type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColors {
  black = 'black',
  orange = 'orange',
  green = 'green',          
  whiteLightness = 'whiteLightness',
  white = 'white',         
  grayF4 = 'grayF4', 
  greyF3 = 'greyF3',
  greyEC = 'greyEC',
  greyD9 = 'greyD9',      
  greyC4 = 'greyC4',     
  grey99 = 'grey99',       
  grey66 = 'grey66',
}

export interface ITextProps {
  As?: 'span' | 'h1' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desctopSize?: TSizes;
  color?: EColors;
}

export function Text(props: ITextProps) {
  const {As = 'span', children, color = EColors.black, size, mobileSize, desctopSize, tabletSize} = props;
  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    {[styles[`m${mobileSize}`]]: mobileSize},
    {[styles[`d${desctopSize}`]]: desctopSize},
    {[styles[`t${tabletSize}`]]: tabletSize},
    
  );
  return (
    <As className={classes}>
      {children}
    </As>
  );
}
