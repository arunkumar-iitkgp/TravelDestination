import { View, Text, ScrollView, Image, ImageBackground } from 'react-native';
import { styles } from "./App";

const TravelServicesScreen = () => {
    const services = [
      { name: 'Flight Booking', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Hotel Reservations', image: 'https://images.unsplash.com/photo-1501117716987-c8e9a1b9cbd7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Tour Packages', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Car Rentals', image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { name: 'Travel Insurance', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ];
    return (
      <ImageBackground source={{ uri: 'https://images.unsplash.com/photo-1506606352681-649023fac596?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} style={styles.backgroundImage} blurRadius={5}>
        <View style={styles.servicesContainer}>
          <Text style={styles.text}>Travel Services</Text>
          <ScrollView>
            {services.map((service, index) => (
              <View key={index} style={styles.serviceContainer}>
                <Image source={{ uri: service.image }} style={styles.serviceImage} />
                <Text style={styles.serviceName}>{service.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    );
  };
export default TravelServicesScreen