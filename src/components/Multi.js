import React from 'react'; //importa o react
import {Text} from 'react-native'; //importa o componente Text do react-native
import Estilos from './estilos'; //importa o estilo

export default function Comp() {
  return <Text style={Estilos.txtG}>Comp #Oficial!!</Text>;
}
export function Comp1() {
  return <Text style={Estilos.txtG}>Comp #01</Text>;
}
export function Comp2() {
  return <Text style={Estilos.txtG}>Comp #02</Text>;
}
