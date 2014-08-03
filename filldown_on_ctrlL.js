loadScript('http://cdn.craig.is/js/mousetrap/mousetrap.min.js?9d308', function () {
    Mousetrap.bind('ctrl+l', function (e) {
        cstr = 'filldown ' + top.spreadsheet.editor.ecell.coord + ':' + colnames[top.spreadsheet.editor.ecell.col - 1] + spreadsheet.sheet.attribs.lastrow + ' all';  // change to SC.colName
        LCexec(cstr);
        return false;
    });
});