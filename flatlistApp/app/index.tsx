import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import defaultStyles from "../styles/defaultStyles";
import { useState } from "react";

export default function Index() {
  type dataType = {
    id: string, // this is a unique identified like id number
    title: string, // this is what list will show
  };

  const DATA: dataType[] = [
    {id: '1', title: 'First'},
    {id: '2', title: 'Second'},
    {id: '3', title: 'Third'},
    {id: '4', title: 'Fourth'},
    {id: '5', title: 'Fifth'},
  ]

  const [selectedId, setSelectedId] = useState<string>("");

  // this function will accept a parameter of type dataType
  // call the param 'item'
  const selectedList = (item: dataType) => {
    console.log("Selected " + item.title);
    setSelectedId(item.id);
  };

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>FlatList Practice</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList 
            data={DATA}
            keyExtractor={(item: dataType) => item.id}
            extraData={selectedId}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => selectedList(item)}>
                <View style={[
                  styles.titleContainer,
                  {
                    backgroundColor:
                    item.id === selectedId // if true 
                    ? colors.primary // then this
                    : colors.secondary // else this
                  }]}>
                  <Text
                    style={[
                        styles.titleText,
                        {
                          color:
                            item.id === selectedId 
                              ? colors.text.light 
                              : colors.text.dark
                        },
                      ]}
                    >
                      {item.title}
                    </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "skyblue"
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
