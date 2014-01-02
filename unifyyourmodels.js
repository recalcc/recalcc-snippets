    // create the data store
    var store = Ext.create('Ext.data.ArrayStore', {
        fields: [
           {name: 'company'},
           {name: 'price',      type: 'float'},
           {name: 'change',     type: 'float'},
           {name: 'pctChange',  type: 'float'},
           {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}
        ],
        data: myData
    });

    // create the Grid
    var grid = Ext.create('Ext.grid.Panel', {
        store: store,
        stateful: true,
        stateId: 'stateGrid',
        columns: [
            {
                text     : 'Company',
                flex     : 1,
                sortable : false,
                dataIndex: 'company'
            },
            
            
// UNIFIED MODEL, all fields:

{
    SHOW: t/f. // assumed true

    name: 'lastChange', 
    type: 'date', //optional or float or string or...
    dateFormat: 'n/j h:ia' // optional . only for dates
    
    text     : 'Company',
    flex     : 1,
    sortable : false,
    // dataIndex: 'company' // same as name. 
    width    : 85, // if undefined, then flex=1
    renderer : Ext.util.Format.dateRenderer('m/d/Y') // a func

    
}

// minimum fields
{
    name: "whatv"
}