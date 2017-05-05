
    var url = "http://localhost:8545";
    //var url = "http://192.168.0.103:8545";
    //var url = "https://api.myetherapi.com/rop";

    var abcTxEngine = {
        getBlockHeight: getBlockHeight,
        getBalance: getBalance,
        getNumTransactions: getNumTransactions,
        isAddressUsed: isAddressUsed
    }

    function getBlockHeight () {
        var request = {
            id: 1,
            jsonrpc: "2.0",
            method: "eth_blockNumber",
            params: []
        };

        post(request).then(function(response) {
            return parseInt(response.result, 16);
        });
    }

    function getBalance(options)
    {
        if (options == undefined)
        {
            options = ["0xfAc2682521Cc3Bd6F199b58F3cDEB9e802C02AfC"];
        }

        var request = {
            id: 1,
            jsonrpc: "2.0",
            method: "eth_getBalance",
            params: [options[0], "latest"]
        };

        post(request).then(function(response) {
            return parseInt(response.result, 16);
        });
    }

    function getNumTransactions(options, Callback)
    {
        if (options == undefined)
        {
            options = ["0xfAc2682521Cc3Bd6F199b58F3cDEB9e802C02AfC"];
        }

        var request = {
            id: 1,
            jsonrpc: "2.0",
            method: "eth_getTransactionCount",
            params: [options[0], "latest"]
        };

        var response = post(request);
        return parseInt(response.result, 16);
    }

    function getFreshAddress(addresses, options)
    {
        //unlock

        //create new address
    }

    function addGapLimitAddresses(addresses, options)
    {

    }

    function isAddressUsed(address, options)
    {
        var numberOfTransactions = getNumTransactions([address]);

        if (numberOfTransactions > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    function makeSpend(abcSpendInfo, Callback)
    {

    }

    function signTx(options)
    {

    }


    function broadcastTx(options)
    {
        
    }

    function saveTx(options)
    {

    }

    //For testing
    function displayResult(response) {

        if (response.result)
                alert(response.result);

        else if (response.error)
                alert("Search error: " + response.error.message);
    };

    function post(request)
    {
        // return $.post(url, JSON.stringify(request), function(response) {
        // });

        return $.post(url, JSON.stringify(request));
    }

    function xhrPost(request)
    {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert(this.responseText);
            }
        };
        xhttp.open("POST", url, true);
        xhttp.send(request);
    }