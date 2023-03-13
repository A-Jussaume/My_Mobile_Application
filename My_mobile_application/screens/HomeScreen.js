import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View className="items-center w-full bg-slate-600">
        {/* Header */}
        <View className="pb-5 pt-5 items-center w-80">
          <Text className="font-bold text-gray-400 text-xl">Fonctionnalités</Text>
        </View>

        {/* Body */}
        {/* FIRST ROWS */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 200,
          }}
        >
          {/* Camera */}
          <TouchableOpacity
            className="m-2 shadow w-80 rounded-lg bg-slate-50"
            onPress={() => navigation.navigate("Camera")}
          >
            <Icon
              style={{ paddingTop: 20 }}
              name="camera-outline"
              type="ionicon"
              size={40}
            />
            <View className="px-3 pb-4">
              <Text className="font-bold text-lg pt-2 text-center">Camera</Text>
              <Text className="font-bold text-sm pt-2 text-center">
                Appuyer pour utiliser la caméra et partager ou sauvegarder vos
                photos
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-slate-50 m-2 shadow w-80 rounded-lg"
            onPress={() => navigation.navigate("Audio")}
          >
            <Icon
              style={{ paddingTop: 20 }}
              name="musical-note-outline"
              type="ionicon"
              size={40}
            />

            <View className="px-3 pb-4">
              <Text className="font-bold text-lg pt-2 text-center">Lecteur audio</Text>
              <Text className="font-bold text-sm pt-2 text-center">
                Cliquez pour utiliser le fichier audio
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-slate-50 m-2 shadow w-80 rounded-lg"
            onPress={() => navigation.navigate("Battery")}
          >
            <Icon
              style={{ paddingTop: 20 }}
              name="battery-half-outline"
              type="ionicon"
              size={40}
            />
            <View className="px-3 pb-4">
              <Text className="font-bold text-lg pt-2 text-center">Batterie</Text>
              <Text className="font-bold text-sm pt-2 text-center">
                Cliquez pour afficher le niveau de batterie
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-slate-50 m-2 shadow w-80 rounded-lg"
            onPress={() => navigation.navigate("Vibration")}
          >
            <Icon
              style={{ paddingTop: 20 }}
              name="magnet-outline"
              type="ionicon"
              size={40}
            />
            <View className="px-3 pb-4">
              <Text className="font-bold text-lg pt-2 text-center">Vibration</Text>
              <Text className="font-bold text-sm pt-2 text-center">
                Appuyez pour faire vibrer le téléphone
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
