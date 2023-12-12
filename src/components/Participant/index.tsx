import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, Alert, Dimensions, Easing } from 'react-native';
import { styles } from './styles';

type Props = {
    name: string;
    onRemove: (name:string) => void;
};

export default function Participant(props: Props) {
    const fadeAnimations = useRef([]).current;
    const slideAnimation = useRef(new Animated.Value(-200)).current;
    const slideOutAnimation = useRef(new Animated.Value(-200)).current;
    const fade = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const slideInAnimation = Animated.timing(slideAnimation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.out(Easing.exp)
        });

        const fadeAnimationsIn = fadeAnimations.map((animation) =>
            Animated.timing(animation, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            })
        );

        Animated.parallel([slideInAnimation, ...fadeAnimationsIn]).start();
    }, []);

    const handleRemove = () => {

        return Alert.alert("Remover", `Deseja remover o Participante ${props.name}?`, [
            {
                text: "Sim",
                onPress: () => {
                    Animated.parallel([
                        Animated.timing(slideAnimation, {
                            toValue: Dimensions.get('screen').width,
                            duration: 1000,
                            useNativeDriver: true,
                            easing: Easing.out(Easing.exp)
                        }),


                        Animated.timing(fade, {
                            toValue: -100,
                            duration: 1000,
                            useNativeDriver: true,
                        }
                        ),
                    ]).start();

                    setTimeout(() => props.onRemove(props.name), 500);
                }
            },
            {
                text: "Não",
                style: 'cancel'
            }
        ])

    };

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    transform: [{ translateX: slideAnimation }],
                    opacity: fadeAnimations[0],
                },
            ]}
        >
            <Text style={styles.name}>{props.name}</Text>
            <TouchableOpacity style={styles.button} onPress={handleRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </Animated.View>
    );
}
