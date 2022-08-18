import React, {Fragment} from 'react';
import {Text, SafeAreaView} from 'react-native';
import Estilo from './estilos';

export default props => (
  <Fragment key={1}>
    <Text style={Estilo.txtG}> {props.principal}</Text>
    <Text> {props.secundario}</Text>
  </Fragment>
);
