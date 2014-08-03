console.log("LOADed!");

    tb.add({
        text: 'ExtEditor Newtab',
        url: '/static/support/exteditor/edit.htm',
        target:_room+"SCRIPT",
        //baseParams: {  q: 'urlparam'},
        tooltip: 'Click here for help.'
    });
    
    
 tb.add({
        text: 'ExtEditor',
        tooltip: 'External editor in neue fenster yeah.',
        handler:function(){window.open("/static/support/exteditor/edit.htm",_room+"SCRIPT","location=0")}
    });