import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilos';

export default props => {
  const imc = props.peso / (props.altura * props.altura);
  return <Text style={Estilo.txtG}>O seu IMC é: {imc}</Text>;
};
