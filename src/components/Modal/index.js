import React from 'react';
import { View, Modal, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

import Icon from '@expo/vector-icons/FontAwesome';

export default function ViewModal(props) {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={props.open}
        >
            <View style={styles.container}>
                <TouchableOpacity onPress={() => props.setOpen(false)} style={styles.button}>
                    <Icon name="window-close" size={50} color="#ff0000" />
                </TouchableOpacity>

                <Image
                    style={styles.image}
                    source={{ uri: props.uri }}
                />
            </View>

        </Modal>
    );
}
