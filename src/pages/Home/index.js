import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';


import Styles from './style';
import Logo from '../../assets/logo.png';
import Api from '../../../services/Api';

export default function Home({ navigation }) {

    const [statesInfo, setStatesInfo] = useState([]);

    useEffect(() => {
        (async function getStates() {
            const statesJson = (await Api.get('/states')).data;

            setStatesInfo(statesJson);
        })();
    }, []);

    return (
        <View style={Styles.body}>
            <Image source={Logo} style={Styles.logo} />
            <Text style={Styles.title}>Selecione um estado</Text>
            <FlatList style={Styles.list} data={statesInfo} keyExtractor={state => state.id} renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => { navigation.navigate('State', item); }} style={Styles.categoryButton}>
                        <Text style={Styles.titleButtonCategory}>{ item.state }</Text>
                    </TouchableOpacity>
                );
            }} />
        </View>
    );
}