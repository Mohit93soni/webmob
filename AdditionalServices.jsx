import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListRender from './components/ListRender';

const AdditionalServices = () => {
  const [purchasedServices, setPurchasedServices] = useState();
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
                  subService => subService.service_selected === null,
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
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      {!!purchasedServices && <ListRender data={purchasedServices} />}
    </View>
  );
};

export default AdditionalServices;

const styles = StyleSheet.create({});
