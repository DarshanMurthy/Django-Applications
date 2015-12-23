/* global Dashboard */

var dashboard = new Dashboard();

dashboard.addWidget('clock_widget', 'Clock');

dashboard.addWidget('new_users_widget', 'Number', {
    getData: function () {
        var self = this;
        $.get('widgets/new_users_widget/', function(data) {
            $.extend(self.data, data);
        });
    },
    interval: 5000
});

dashboard.addWidget('buzzwords_widget', 'List', {
    getData: function () {
        $.extend(this.data, {
            title: ' Naive Bayesian Algorithm and Matrices',
            more_info: '# of times said around the office',
            updated_at: 'Last updated at 18:58',
            data: [{label: 'F Measure', value: 67},
                   {label: 'False Positive Rate', value: 23},
                   {label: 'Precision', value: 69},
                   {label: 'Recall', value: 66}]
                   
            });
    }
});

dashboard.addWidget('buzzwords_widget', 'List', {
    getData: function () {
        $.extend(this.data, {
            title: 'Features  ',
            more_info: '# of times said around the office',
            updated_at: 'Last updated at 18:58',
            data: [{label: 'Number of Unique IP', value: 24500},
                   {label: 'Number of Unique C_IDs', value: 10089},
                   {label: 'Number of Unique Countries', value: 28},
                   {label: 'Number of Unique Category', value: 7},
                   {label: 'Total Clicks per PId', value: 70000},
                   {label: 'Category for clicks exists', value: 798},
                   {label: 'Number of Unique Category', value: 7}


                   ]
            });
    }
});

dashboard.addWidget('convergence_widget', 'Graph', {
    getData: function () {
        $.extend(this.data, {
            title: 'Fraud Score',
            value: Math.floor(Math.random() * 50) + 40,
            more_info: ' The consolidated Fraud Score',
            data: [
                    { x: 0, y: Math.floor(Math.random() * 50) + 40 }, 
                    { x: 1, y: Math.floor(Math.random() * 50) + 40 }, 
                    { x: 2, y: Math.floor(Math.random() * 50) + 40 }, 
                    { x: 3, y: Math.floor(Math.random() * 50) + 40 }, 
                    { x: 4, y: Math.floor(Math.random() * 50) + 40 }
                ]
            });
    }
});





