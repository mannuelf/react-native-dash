import * as React from 'react';
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import {Dimensions} from "react-native-web";

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5
};

const line = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43],
            strokeWidth: 2
        }
    ]
};

const progressDatum = {
    labels: ["Swim", "Bike", "Run"],
    data: [0.4, 0.6, 0.8]
};

const Charts = () => {
    return (
        <View>
            <Text>Charts</Text>
            <ProgressChart
                data={progressDatum}
                width={Dimensions.get("window").width}
                height={220}
                chartConfig={chartConfig}
                hideLegend={false}
            />
            <hr/>
            <LineChart
                data={line}
                width={Dimensions.get("window").width}
                height={220}
                yAxisLabel={"$"}
                chartConfig={{
                    backgroundColor: "#333333",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 1
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 1
                }}
            ></LineChart>
        </View>
    );
};

export default Charts;
