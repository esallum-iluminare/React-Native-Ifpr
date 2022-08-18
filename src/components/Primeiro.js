import React from 'react'; //importa o react
import {Text} from 'react-native'; //importa o componente Text do react-native
import Estilo from './estilos'; //importa o estilo

export default () => {
  console.warn('Ola');
  return <Text style={Estilo.txtG}>Meu primeiro componente</Text>; // Note que podemos tratar a tag <Text> como se fosse um código JS
};
