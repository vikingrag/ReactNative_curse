import React, { useState } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import { gStyle } from '../syles/style';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';
   
export default function Main({ navigation }) {
	   
	const [news, setNews] = useState([
		{ name:'Google', anons: 'google супер стар!', full:'Google is cool!', key:'1', img:'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'},
		{ name:'Apple', anons: 'Apple! лучшая фирма', full:'Apple is cool!', key:'2',  img:'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'},
		{ name:'FaceBook', anons: 'FaceBook! лучший сервис', full:'FaceBook is cool!', key:'3',  img:'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'}
	]);

	const [modalWindow, setModalWindow] = useState(false);

	const addArticle = (article) => {
		setNews((list) => {
			article.key = Math.random().toString();
			return [
				article,
				...list
			]
		});
		setModalWindow(false);
	}
	
      return (
        <View style={gStyle.main}>
			<Modal visible={modalWindow}>
			<Ionicons name="close-circle" size={44} color="red" style={styles.iconAdd} onPress = {() => setModalWindow(false)}/>
			<View style={gStyle.main}>
			<Text style={gStyle.title}>Форма статей</Text>
			<Form addArticle={addArticle}/>
			</View>

			</Modal>
			<Ionicons name="add-circle" size={44} color="green" style={styles.iconAdd} onPress = {() => setModalWindow(true)} />
            <Text style={[gStyle.title, styles.header]}>Заголовок</Text>
				<FlatList data={news} renderItem={({item}) => (
					<TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
						<Image style={styles.image} source={{ uri: item.img }}/>
							
						<Text style={styles.title}>{ item.name }</Text>
						<Text style={styles.anons}>{ item.anons }</Text>
					</TouchableOpacity>
				)}/>
        </View>
    );
		}
  
  const styles = StyleSheet.create ({
	iconAdd:{
		textAlign:'center',
		marginBottom: 15,

	},
	image: {
		width: '100%',
		height: 200,
	},
	header: {
		marginBottom: 30,
	},
	item: {
		width:'100%',
		marginBottom: 30,
	},
	title: {
		fontFamily: 'mt-bolt',
		fontSize: 22,
		textAlign: 'center',
		marginTop: 20,
		color: '474747'
	},
	anons:{
		fontFamily: 'mt-light',
		fontSize: 16,
		textAlign: 'center',
		marginTop: 5,
		color: '474747'
	}


});
