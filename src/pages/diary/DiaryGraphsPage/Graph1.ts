import * as echarts from 'echarts';
import { getMonthNameShort } from '../../../helpers/baseHelpers';


export function graphInit(id: string, months: any) {
    
    var chartDom = document.getElementById(id);

    console.log(months[0]);

    if (chartDom !== null) {
        
        var myChart = echarts.init(chartDom);
        var option: echarts.EChartsOption;

        let monthsNames = months.map((m: any) => {
            return getMonthNameShort(m.month, 'en') + " '" + (m.year-2000);
        });


        let graphColor = (color1: string, color2: string, color3: string) => {
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: color1 },
                { offset: 0.5, color: color2 },
                { offset: 1, color: color3 }
                ])
        }

        const colorsWeekDays = [
            graphColor('#5d3f8f', '#5d3f8f', '#5d3f8f'),
            graphColor('#f27e1b', '#f27e1b', '#f27e1b'),
            graphColor('#f55fb5', '#f55fb5', '#f55fb5'),
            graphColor('#8a8a8a', '#8a8a8a', '#8a8a8a'),
            graphColor('#edc618', '#edc618', '#edc618'),
            graphColor('#44d620', '#44d620', '#44d620'),
            graphColor('#338fd4', '#338fd4', '#338fd4'),
        ]

        const colorsWeekDaysLight = [
            graphColor('#9f6fed', '#5d3f8f', '#9f6fed'),
            graphColor('#f7a35c', '#f27e1b', '#f7a35c'),
            graphColor('#ff94d1', '#f55fb5', '#ff94d1'),
            graphColor('#bababa', '#8a8a8a', '#bababa'),
            graphColor('#fcdd51', '#edc618', '#fcdd51'),
            graphColor('#76e85a', '#44d620', '#76e85a'),
            graphColor('#75bbf0', '#338fd4', '#75bbf0'),
        ]

        console.log(months);


        let monthsScores = months.map((m: any) => {
            return {
                value: m.pc * 100,
                itemStyle: {
                    borderRadius: [20, 20, 0, 0],
                    color: colorsWeekDays[m.weekDay],
                },
                emphasis: {itemStyle: {
                    color: colorsWeekDaysLight[m.weekDay],
                },
                }
            }
        });

        // prettier-ignore
        let dataAxis = monthsNames;
        // prettier-ignore
        let data = monthsScores;

        let yMax = 90;

        let dataShadow = [];
        for (let i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        }
        option = {
            title: {
                text: 'Months Scores',
                left: '50%',
                right: '50%',
                top: '10px',
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                data: dataAxis,
                axisLabel: {
                    inside: false,
                    color: '#000'
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: true
                },
                axisTick: {
                    show: true
                },
                axisLabel: {
                    color: '#999'
                },
                max: 100,
            },
            dataZoom: [
                {
                type: 'inside'
                }
            ],
            series: [
                {
                type: 'bar',
                showBackground: true,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#cccccc' },
                    { offset: 0.5, color: '#cccccc' },
                    { offset: 1, color: '#cccccc' }
                    ])
                },
                emphasis: {
                    itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#cccccc' },
                        { offset: 0.7, color: '#cccccc' },
                        { offset: 1, color: '#cccccc' }
                    ])
                    }
                },
                label: {
                    show: true,
                    rotate: 90,
                    distance: 5,
                    color: '#eee',
                    formatter: function(params: any){
                        return Math.round(params.value) + "%";
                    },
                },
                labelLayout: {
                    hideOverlap: true,
                },
                data: data,
                }
            ],
        };
        // Enable data zoom when user click bar.
        const zoomSize = 6;
        myChart.on('click', function (params) {
        myChart.dispatchAction({
            type: 'dataZoom',
            startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
            endValue:
            dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
        });
        
        });

        option && myChart.setOption(option);

    }
    

}