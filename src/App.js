import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import Comp, {Comp1, Comp2} from './components/Multi';
import Primeiro from './components/Primeiro';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
import IMC from './components/IMC';
import Titulo from './components/Titulo';
import Botao from './components/Botao';
import Contador from './components/Contador';

export default () => (
  <SafeAreaView style={style.App}>
    <Contador inicial={100} passo={13} />
    {/*
      <Botao />
        <Titulo
      principal="Cadastro de ervas da Jamaica"
      secundario="Tela de cadastro de ervas"
    />
    <IMC peso={100} altura={1.75} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <MinMax min={3} max="10" />
    <Comp />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    // backgroundColor: '#A00',
    flex: 1, // ou flexGrow: ocupa todo o espaço disponível, ai estamos definindo a prioridade
    justifyContent: 'center', // alinha o conteúdo na vertical
    alignItems: 'center', // alinha o conteúdo na horizontal
    padding: 20,
  },
});
