import React, { useState, useEffect, useRef } from 'react';
import {
    Camera,
    Constants,
    requestPermissionsAsync
} from 'expo-camera';

import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity
} from 'react-native';

import styles from './styles';

import Icon from '@expo/vector-icons/FontAwesome';

import Modal from '../../components/Modal';

export default function Home() {
    const camRef = useRef();
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasPermission] = useState(Constants.Type.back);
    const [ picture, setPicture ] = useState(null);
    const [ open, setOpen ] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await requestPermissionsAsync();
            setHasPermission(status);
            console.log(status)
        })();

    }, []);

    if (hasPermission === null) {
        return <Text>Sem Permissão</Text>
    }

    if (hasPermission === false) {
        return <Text>Sem Permissão</Text>
    }

    const changeCamera = () => {
        setType(
            type === Constants.Type.back ?
                Constants.Type.front :
                Constants.Type.back
        );
    }

    const takePickture = async () => {
        if (camRef) {
            const data = await camRef.current.takePictureAsync();
            setPicture(data.uri);
            setOpen(true);
        }
    }

    return (
        <SafeAreaView style={styles.container} >
            <Camera
                style={styles.camera}
                type={type}
                ref={camRef}
            >
                <View style={styles.groupButton}>
                    <TouchableOpacity onPress={changeCamera} style={styles.button}>
                        <Text style={styles.buttonType}>Trocar</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
            <TouchableOpacity onPress={takePickture} style={styles.buttonPick}>
                <Icon name="camera" size={23} color="#fff" />
            </TouchableOpacity>

            {open && <Modal
                uri={picture}
                open={open}
                setOpen={setOpen}
            />}
        </SafeAreaView>
    );
}
