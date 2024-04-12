import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Forminput from '../../components/input/Forminput';
import { useDispatch, useSelector } from 'react-redux'
import icons from '../../constants/icons';
import images from '../../constants/images';
import { SIZES, FONTS } from '../../constants/theme';
import { addToDos, deleteAllToDos } from '../../redux/action/toDoActions';
import { deleteToDos } from '../../redux/action/toDoActions';
import { markToDos } from '../../redux/action/toDoActions';

const Home = () => {
    const dispatch = useDispatch();

    const todos = useSelector(state => state?.todos)

    console.log("todo's", todos)

    const [newToDos, setNewToDos] = useState("")

    const handleaddToDos = () => {
        let freshTodo = { id: Math.random(), todo: newToDos, checked: false }
        console.log('added todo', freshTodo)
        dispatch(addToDos(freshTodo)),
            setNewToDos("")
    }

    const handledeleteToDos = (todoId) => {
        dispatch(deleteToDos(todoId));
    }

    const handlemarkToDos = (todoId) => {
        dispatch(markToDos(todoId))
    }
    const handledeleteAllToDos = () => {
        dispatch(deleteAllToDos());
    }
    return (
        <SafeAreaView style={styles.page}>
            <StatusBar backgroundColor={"pink"} barStyle={'light-content'} />
            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ ...FONTS.body3 }}>To do App</Text>
                <TouchableOpacity onPress={handledeleteAllToDos} >
                    <Image source={icons.delete2} style={{ height: SIZES.h1, width: SIZES.h1, resizeMode: "contain" }} />
                </TouchableOpacity>

            </View>

            <FlatList
                data={todos}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ padding: SIZES.h2 * 0.15, marginVertical: SIZES.h5, justifyContent: "center", borderRadius: SIZES.base, elevation: SIZES.base, backgroundColor: "white" }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingHorizontal: SIZES.h5 }}>
                                <Text style={{ ...FONTS.body4, textDecorationLine: item.checked ? 'line-through' : 'none' }}>{item?.todo}</Text>
                                <View style={{ flexDirection: "row", }}>
                                    <TouchableOpacity onPress={() => handlemarkToDos(item.id)}>
                                        <Image source={icons.tick} style={{ height: SIZES.h1, width: SIZES.h1, }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handledeleteToDos(item.id)}>
                                        <Image source={icons.delete1} style={{ resizeMode: "contain", height: SIZES.h1, width: SIZES.h1, }} />
                                    </TouchableOpacity>

                                </View>

                            </View>

                        </View>
                    )
                }} />
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginBottom: SIZES.h3 }}>
                <Forminput
                    value={newToDos}
                    placeholder={"Enter your to do's"}
                    onChangeText={setNewToDos}
                />
                <TouchableOpacity onPress={handleaddToDos}>
                    <Image source={images.plus} style={{ height: SIZES.h1 * 1.5, width: SIZES.h1 * 2.8, resizeMode: "contain" }} />
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: SIZES.h3,
        backgroundColor: "white"
    }
})