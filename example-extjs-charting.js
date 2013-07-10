Ext=top.Ext;

dt = '[{"name":"January","data1":90,"data2":69,"data3":67,"data4":71,"data5":74,"data6":25,"data7":56,"data8":39,"data9":48},{"name":"February","data1":77,"data2":20,"data3":20,"data4":25,"data5":50,"data6":62,"data7":23,"data8":39,"data9":62},{"name":"March","data1":89,"data2":72,"data3":56,"data4":73,"data5":76,"data6":38,"data7":67,"data8":28,"data9":79},{"name":"April","data1":68,"data2":93,"data3":32,"data4":50,"data5":50,"data6":57,"data7":49,"data8":84,"data9":69},{"name":"May","data1":52,"data2":82,"data3":79,"data4":64,"data5":90,"data6":72,"data7":29,"data8":49,"data9":67},{"name":"June","data1":20,"data2":86,"data3":42,"data4":43,"data5":49,"data6":67,"data7":20,"data8":30,"data9":26},{"name":"July","data1":97,"data2":72,"data3":20,"data4":85,"data5":77,"data6":42,"data7":98,"data8":20,"data9":31},{"name":"August","data1":20,"data2":45,"data3":20,"data4":25,"data5":51,"data6":34,"data7":58,"data8":90,"data9":20},{"name":"September","data1":41,"data2":20,"data3":91,"data4":86,"data5":71,"data6":71,"data7":79,"data8":42,"data9":20},{"name":"October","data1":27,"data2":53,"data3":68,"data4":20,"data5":20,"data6":84,"data7":82,"data8":39,"data9":32},{"name":"November","data1":51,"data2":20,"data3":34,"data4":82,"data5":55,"data6":20,"data7":64,"data8":78,"data9":55},{"name":"December","data1":84,"data2":82,"data3":42,"data4":92,"data5":20,"data6":20,"data7":20,"data8":20,"data9":65}]';
dati = JSON.parse(dt);

    window.store1 = Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7', 'data9', 'data9'],
        data: dati
    });

    var chart = Ext.create('Ext.chart.Chart', {
            style: 'background:#fff',
            animate: true,
            shadow: true,
            store: store1,
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['data1'],
                label: {
                    renderer: Ext.util.Format.numberRenderer('0,0')
                },
                title: 'Number of Hits',
                grid: true,
                minimum: 0
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Month of the Year'
            }],
            series: [{
                type: 'column',
                axis: 'left',
                highlight: true,
                tips: {
                  trackMouse: true,
                  width: 140,
                  height: 28,
                  renderer: function(storeItem, item) {
                    this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data1') + ' $');
                  }
                },
                label: {
                  display: 'insideEnd',
                  'text-anchor': 'middle',
                    field: 'data1',
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'vertical',
                    color: '#333'
                },
                xField: 'name',
                yField: 'data1'
            }]
        });


    var win = Ext.create('Ext.window.Window', {
        width: 800,
        height: 600,
        minHeight: 400,
        minWidth: 550,
        hidden: false,
        maximizable: true,
        title: 'Column Chart',
        autoShow: true,
        layout: 'fit',
        tbar: [{
            text: 'Save Chart',
            handler: function() {
                Ext.MessageBox.confirm('Confirm Download', 'Would you like to download the chart as an image?', function(choice){
                    if(choice == 'yes'){
                        chart.save({
                            type: 'image/png'
                        });
                    }
                });
            }
        }, {
            text: 'Reload Data',
            handler: function() {
                // Add a short delay to prevent fast sequential clicks
                window.loadTask.delay(100, function() {
                    store1.loadData(generateData());
                });
            }
        }],
        items: chart    
    });
