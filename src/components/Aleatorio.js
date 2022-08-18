import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilos';

export default props => {
  const delta = props.max - props.min + 1;
  const aleatorio = Math.floor(Math.random() * delta) + props.min;
  console.warn(props);
  return <Text style={Estilo.txtG}>O valor aleatório é {aleatorio}</Text>;
};
