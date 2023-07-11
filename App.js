import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { LineChart } from "react-native-chart-kit";

export default function App() {
  return (
    <View style={{ flex: 1, padding: 2 }}>
      <LineChart
        bezier
        withHorizontalLabels={true}
        withVerticalLabels={true}
        data={{
          labels: [' 2013', ' 2014', ' 2015', ' 2016', ' 2017'],
          datasets: [
            {
              data: [1, 7, 6, 4, 2, 5],
              strokeWidth: 2,
              color: (opacity = 1) => `rgba(255,0,0,${opacity})`,
            },
            {
              data: [2, 4, 6, 8, 8, 2],
              strokeWidth: 2,
              color: (opacity = 1) => `rgba(0,0,102, ${opacity})`,
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={200}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#2d3d4c',
          backgroundGradientTo: '#2d3d4c',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({

});
