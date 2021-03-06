import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getConfirmedCases } from "../redux/actions/confirmedCases";
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit';
import {Dimensions} from 'react-native-web';

const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 1
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
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getConfirmedCases());
    }, []);

    const confirmedCasesData = useSelector(state => state.confirmedCases);
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
                chartConfig={chartConfig}
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
