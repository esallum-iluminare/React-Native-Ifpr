import React from 'react';
import {Text} from 'react-native';
import Estilo from './estilos';

export default props => {
  console.warn(props);
  return (
    <Text style={Estilo.txtG}>
      O valor de {props.max} é maior que {props.min}
    </Text>
  );
};
