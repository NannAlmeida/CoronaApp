import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Styles from './style';

export default function States({ navigation, route }) {

    const params = route.params;
    const flag = params.flag;
    const stateName = params.state;
    const deathsForState = params.deaths;
    const stateUF = params.uf;
    const updated = params.updated;
    const casesForStates = params.cases;
    const suspectsForState = params.suspects;
    const casesRefusesForState = params.refuses;

    return (
        <View style={Styles.body}>
            <Image source={{ uri: flag }} style={Styles.logo} />
            <Text style={Styles.title}>{stateName} ({stateUF})</Text>
            <Text style={Styles.description}>Mortes: {deathsForState}</Text>
            <Text style={Styles.description}>Casos confirmados: {casesForStates}</Text>
            <Text style={Styles.description}>Casos descartados: {casesRefusesForState}</Text>
            <Text style={Styles.description}>Casos suspeitos: {suspectsForState}</Text>
            <Text style={Styles.description}>Última atualização: {updated}</Text>
        </View>
    );
}