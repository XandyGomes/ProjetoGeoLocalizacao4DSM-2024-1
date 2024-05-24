import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-svg-charts';
import {Text as TextSVG} from 'react-native-svg';

export default function Grafico() {
  const data = [50,30,10,10];
  const pieData = data.map((value, index) => ({
    value,
    key: `${index}-${value}`,
    svg: {
      fill: ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)
    },
  }));

  const Label = ({slices}) => {
    return slices.map((slice, index) => {
      const {pieCentroid, data} = slice;
      return (
        <TextSVG
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill={'white'}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={24}
          stroke={'black'}
          strokeWidth={0.2}>
          {data.value}%
        </TextSVG>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textContainer}>Gráfico PieChart</Text>
      </View>
      <View>
        <PieChart style={{height: 400}} data={pieData}>
          <Label />
        </PieChart>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
  textContainer: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
