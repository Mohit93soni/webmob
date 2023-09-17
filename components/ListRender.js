import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';

const ListRender = props => {
  const {data} = props;

  return (
    <FlatList
      data={data?.purchased_services}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={{marginHorizontal: 25}}>
          <Text style={{marginVertical: 15, color: 'black'}}>
            {item.name} :
          </Text>
          <View>
            {item?.purchased_office_template?.purchased_office_services?.map(
              data => (
                <View
                  key={data.id}
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    height: 100,
                    borderRadius: 8,
                    padding: 2,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={{uri: data.image}}
                      style={{
                        height: 70,
                        width: 70,
                        borderRadius: 5,
                        margin: 5,
                      }}
                    />
                    <View
                      style={{
                        height: 70,
                        justifyContent: 'space-evenly',
                      }}>
                      <Text style={{color: 'black'}}>{data.name}</Text>
                      <Text style={{color: 'black'}}>Kr {data?.price}</Text>
                    </View>
                  </View>
                  <Icon name="info-outline" size={30} />
                </View>
              ),
            )}
          </View>
        </View>
      )}
    />
  );
};

export default ListRender;

const styles = StyleSheet.create({});
