showError = console.log;

function doSomethingCool() {
    client.getAccountInfo(function(error, accountInfo) {
        if (error) {
            return showError(error);
        }
        console.log("Hello, " + accountInfo.name + "!");
    });


    client.writeFile("hello_world.txt", "Hello, world!\n", function(error, stat) {
        if (error) {
            return showError(error);
        }
        console.log("File saved as revision " + stat.revisionTag);
    });

    client.readdir("/", function(error, entries) {
        if (error) {
            return showError(error);
        }
        //alert("Your Dropbox contains " + entries.join(", "));
        console.log(entries);
        store = Ext.create('Ext.data.ArrayStore', {
            fields: [{
                name: "Filename",
                type: "string"
            }, {
                name: "Ops",
                type: "string"
            }],
            data: entries.map(function(e) {
                return [e, e]
            })

        });
        console.log(entries.map(function(e) {
            return [e, e]
        }));

        gridwin = Ext.create('Ext.window.Window', {
            title: 'Ur dropbox files',
            closable: true,
            height: 200,
            width: 400,
            layout: 'fit',
            items: {
                xtype: 'grid',
                border: false,
                columns: [{
                    header: 'Filename',
                    dataIndex: 'Filename',
                    flex: 1
                }, {
                    header: 'Ops',
                    dataIndex: "Ops",
                    flex: 1,
                    renderer: function(value) {
                        return Ext.String.format('<a onclick="alert("{2}")" href="http://dropbox.com/whatev/{0}">{1}</a>', value, value, value);
                    }
                }],
                store: store
            }
        });
        gridwin.show();



    });




}

loadScript("//cdnjs.cloudflare.com/ajax/libs/dropbox.js/0.10.2/dropbox.min.js", function() {

    client = new Dropbox.Client({
        key: "otwsnimbmt67uqf"
    });
    client.authDriver(new Dropbox.AuthDriver.Popup({
        receiverUrl: "https://oauthbouncer.herokuapp.com/oauth/"
    }));

    // Try to use cached credentials.
    client.authenticate({
        interactive: false
    }, function(error, client) {
        if (error) {
            return handleError(error);
        }
        if (client.isAuthenticated()) {
            // Cached credentials are available, make Dropbox API calls.
            doSomethingCool();
        }
        else {
            {
                // The user will have to click an 'Authorize' button.
                client.authenticate(function(error, client) {
                    if (error) {
                        return handleError(error);
                    }
                    doSomethingCool();
                });
            }
        }
    });


});