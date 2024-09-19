import { ButtonCustom } from "@/src/components/buttonCustom"
import { colors } from "@/src/utils/colors"
import { Text, View } from "react-native"

import {styles} from "./styles"
import { InputWithTitle } from "@/src/components/inputWithTitle"

export const LoginScreen = () => {
    return(
        <View
            style={styles.container}
        >
            <Text style = {styles.title}>
                LOGIN 
            </Text> 
            <InputWithTitle/>
            <ButtonCustom
                titleButton="ESQUECI MINHA SENHA" 
                styleContainer={{
                    backgroundColor: colors.WHITE,
                    position: "absolute", 
                    bottom: 450
                }}
                styleText={{
                    color: colors.BLACK 
                }}
            /> 
            <ButtonCustom 
          titleButton="Entrar" 
          styleContainer={{
            backgroundColor: "#fff", 
            width: 200,
             height: 80 }} 
          styleText={{color: "#000"}}
          handleClick={() => router.navigate("/(app)/auth/login")}
        />

        </View>  
    )
} 


            