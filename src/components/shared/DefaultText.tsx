import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { colors } from '../../theme';

type TFontWeight = '300' | '400' | '500' | '600' | '700' | '800';
type TFontType = 'light' | 'regular' | 'medium' | 'bold' | 'black' | 'variable';

interface IFontTypes {
  light: string;
  regular: string;
  medium: string;
  bold: string;
  black: string;
  variable: string;
}

interface IFontWeights {
  light: TFontWeight;
  regular: TFontWeight;
  medium: TFontWeight;
  bold: TFontWeight;
  black: TFontWeight;
  variable: TFontWeight;
}

interface Props {
  children: string | string[] | undefined;
  style?: StyleProp<TextStyle>;
  fontSize?: number;
  fontType?: TFontType;
  lineHeight?: number;
  color?: string;
}

export let fontType: IFontTypes = {
  light: 'Satoshi-Light',
  regular: 'Satoshi-Regular',
  medium: 'Satoshi-Medium',
  bold: 'Satoshi-Bold',
  black: 'Satoshi-Black',
  variable: 'Satoshi-Variable',
};

export let fontWeight: IFontWeights = {
  light: '300',
  regular: '300',
  medium: '500',
  bold: '600',
  black: '700',
  variable: '800',
};

export const DefaultText = (props: Props) => {
  return (
    <Text
      style={[
        {
          color: props.color || colors.black,
          fontSize: props.fontSize || 16,
          lineHeight: props.lineHeight
            ? props.lineHeight
            : props.fontSize
            ? props.fontSize * 1.2
            : 22,
          fontWeight: fontWeight[props?.fontType || 'regular'],
          fontFamily: fontType[props.fontType || 'regular'],
        },
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};
