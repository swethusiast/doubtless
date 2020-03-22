import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './../../../../assets/canvasjs.min';

@Component({
    selector: 'app-organization',
    templateUrl: './organization.component.html',
    styleUrls: [ './organization.component.scss' ],
})
export class OrganizationComponent implements OnInit {
    ExecutiveSummary = [
        {
            title: 'Cross trade receivables',
            amount: 'EGB 973,610',
        },
        {
            title: 'overdue',
            amount: 'EGB 807,110',
        },
        {
            title: 'overdue %',
            amount: '82.9%',
        },
        {
            title: 'Expected credit loss',
            amount: 'EGB 45,860',
        },
    ];
    constructor() {
        CanvasJS.addColorSet('greenShades', [ '#2F4F4F', '#008080', '#2E8B57', '#3CB371', '#90EE90' ]);
    }

    ngOnInit() {
        let dataPoints = [
            { x: new Date(2016, 0), y: [ 27.1, 38.99 ] },
            { x: new Date(2016, 1), y: [ 29.92, 37.0 ] },
            { x: new Date(2016, 2), y: [ 35.95, 42.54 ] },
            { x: new Date(2016, 3), y: [ 37.27, 48.5 ] },
            { x: new Date(2016, 4), y: [ 43.33, 50.51 ] },
            { x: new Date(2016, 5), y: [ 46.69, 52.86 ] },
            { x: new Date(2016, 6), y: [ 41.8, 50.75 ] },
            { x: new Date(2016, 7), y: [ 41.51, 51.22 ] },
            { x: new Date(2016, 8), y: [ 45.09, 50.14 ] },
            { x: new Date(2016, 9), y: [ 47.98, 53.73 ] },
            { x: new Date(2016, 10), y: [ 43.57, 50.49 ] },
            { x: new Date(2016, 11), y: [ 51.51, 57.89 ] },
        ];

        let chart1 = new CanvasJS.Chart('chart1Container', {
            animationEnabled: true,
            theme: 'light2',
            colorSet: 'greenShades',
            title: {
                text: 'trade receivables aging',
                fontSize: 16,
            },
            axisX: {
                valueFormatString: 'DD MMM',
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true,
                },
            },
            axisY: {
                title: 'Closing Price (in EUR)',
                includeZero: false,
                valueFormatString: '€##0.00',
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true,
                    labelFormatter: function(e) {
                        return '€' + CanvasJS.formatNumber(e.value, '##0.00');
                    },
                },
            },
            data: [
                {
                    type: 'rangeColumn',
                    yValueFormatString: '$#,##0.00',
                    xValueFormatString: 'MMM YYYY',
                    toolTipContent: '{x}<br>High: {y[0]}<br>Low: {y[1]}',
                    dataPoints: dataPoints,
                },
            ],
        });

        let chart2 = new CanvasJS.Chart('chart2Container', {
            animationEnabled: true,
            theme: 'light2',
            colorSet: 'greenShades',
            title: {
                text: 'forward looking expected credit loss allowance',
                fontSize: 16,
            },
            axisX: {
                valueFormatString: 'DD MMM',
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true,
                },
            },
            axisY: {
                title: 'Closing Price (in EUR)',
                includeZero: false,
                valueFormatString: '€##0.00',
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true,
                    labelFormatter: function(e) {
                        return '€' + CanvasJS.formatNumber(e.value, '##0.00');
                    },
                },
            },
            data: [
                {
                    type: 'rangeColumn',
                    yValueFormatString: '$#,##0.00',
                    xValueFormatString: 'MMM YYYY',
                    toolTipContent: '{x}<br>High: {y[0]}<br>Low: {y[1]}',
                    dataPoints: dataPoints,
                },
            ],
        });
        chart1.render();
        chart2.render();
    }
}
