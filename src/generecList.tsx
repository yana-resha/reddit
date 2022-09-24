import React, { ReactNode } from 'react'
import classNames from 'classnames'
import {Text, TSizes, EColors, ITextProps} from '../src/shared/Text'

interface IItem {
  parentID?: string,
  id?: string;
  text?: string; 
  textSize: TSizes;
  mobileSizeText?: TSizes;
  tabletSizeText?: TSizes;
  desctopSizeText?: TSizes;
  colorText?: EColors;
  AsText?: 'span' | 'h1' | 'h3' | 'h4' | 'p' | 'div';
  onClick ?: (id : string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  svg?: React.SVGProps<SVGSVGElement>;
  
}


interface IGenericListProps {
  list: IItem[];
}

const noop = () => {};

export function GenericList({list}: IGenericListProps) {
  return (
    <>
    {list.map(({As = 'div', svg ,text, parentID, onClick = noop, className, id, href, textSize, mobileSizeText,AsText, tabletSizeText, desctopSizeText, colorText}) => (
      <As
      className={className}
      onClick={() => console.log(parentID)}
      key={id}
      href={href}
      >
        {svg}
        <Text As={AsText} size={textSize} color={colorText} mobileSize={mobileSizeText} tabletSize={tabletSizeText} desctopSize={desctopSizeText}>{text}</Text>
      </As>
      ))}
    </>
  )
}