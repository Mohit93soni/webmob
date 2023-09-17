import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Divider} from 'react-native-paper';
import ListRender from './components/ListRender';

const PurchasedServicesScreen = () => {
  const [purchasedServices, setPurchasedServices] = useState();
  const [total, setTotal] = useState();

  const sum = total?.reduce((acc, object) => {
    return acc + object.price;
  }, 0);

  useEffect(() => {
    fetch('https://fir-dynamiclinks-e43dd.web.app/practical-api.json')
      .then(response => response.json())
      .then(response => {
        const data = response.data;
        // console.log("data get---",data);
        let totalData = [];
        const newData = {
          purchased_services: data.purchased_services.reduce(
            (result, mainService) => {
              const selectedServices =
                mainService.purchased_office_template.purchased_office_services.filter(
                  subService => subService.service_selected !== null,
                );

              if (selectedServices.length > 0) {
                result.push({
                  ...mainService,
                  purchased_office_template: {
                    ...mainService.purchased_office_template,
                    purchased_office_services: selectedServices,
                  },
                });
              }

              return result;
            },
            [],
          ),
        };
        setPurchasedServices(newData);

        //Calculate total amount
        data.purchased_services?.forEach(mainService => {
          mainService.purchased_office_template.purchased_office_services.forEach(
            subService => {
              if (subService.service_selected !== null) {
                totalData.push({
                  name: subService.name,
                  price: Number(subService.service_selected.price),
                });
              }
            },
          );
        });
        // console.log('total=---', totalData);
        setTotal(totalData);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 3}}>
        {!!purchasedServices && <ListRender data={purchasedServices} />}
      </View>
      <View style={{backgroundColor: 'black'}}>
        {total?.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginVertical: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              {item.name}
            </Text>
            <Text style={{color: 'white'}}>{item.price}</Text>
          </View>
        ))}
        <View
          style={{
            borderWidth: 1,
            marginVertical: 10,
            borderBottomColor: 'gray',
          }}
        />
        <View
          style={{
            justifyContent: 'space-between',
            marginHorizontal: 20,
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <Text style={{color: '#d4a013'}}>Total Amount: </Text>
          <Text style={{color: '#d4a013'}}>{sum}</Text>
        </View>
      </View>
    </View>
  );
};

export default PurchasedServicesScreen;
