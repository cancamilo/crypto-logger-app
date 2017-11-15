import React, {Component} from 'react';
import {VictoryChart, VictoryArea, VictoryTheme} from 'victory';

var data = [
    {x: 1, y: 20},
    {x: 2, y: 30},
    {x: 3, y: 10},
    {x: 4, y: 50},
    {x: 5, y: 60},
    {x: 6, y: 15},
    {x: 7, y: 20},
    {x: 8, y: 40},
    {x: 9, y: 40},
    {x: 10, y: 20},
]

class DetailChart extends Component {
    state = {}
    render() { 
        return (
            <div>
                <VictoryChart theme={VictoryTheme.material}
                              height={120} padding={{ top: 20, bottom: 20, left: 30, right: 30 }}>
                    <VictoryArea style={{ data: { fill: "#c43a31" } }}
                                 
                                 data={data}/>                    
                </VictoryChart>
            </div>
        )
    }
}
 
export default DetailChart;