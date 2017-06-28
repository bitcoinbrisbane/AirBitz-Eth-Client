
    var url = "http://60.226.74.183:8545";
    //var url = "http://192.168.0.103:8545";

    var abcTxEngine = {
        getBlockHeight: getBlockHeight,
        //getBlockHeightX: getBlockHeightX,
        getBalance: getBalance,
        getNumTransactions: getNumTransactions,
        isAddressUsed: isAddressUsed,
        newAaddress: newAddress
    }

    function getBlockHeight () {
        var request = {
            id: 1,
            jsonrpc: "2.0",
            method: "eth_blockNumber",
            params: []
        };

        return post(request).then(function(response) {
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

        return post(request).then(function(response) {
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

        return post(request).then(function(response) {
            return parseInt(response.result, 16);
        });
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

    function newAddress () {

    }

    function makeSpend(abcSpendInfo, Callback)
    {

    }

    function send(from, to, gas, gasPrice, value, data)
    {
        //curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{see above}],"id":1}'
        var request = {
            id: 1,
            jsonrpc: "2.0",
            method: "eth_blockNumber",
            params: [{
                from: from,
                to: to,
                gas: gas, // 30400,
                gasPrice: gasPrice, // 10000000000000
                value: value, // 2441406250
                data: data
                }]
        };

        return post(request).then(function(response) {
            return parseInt(response.result, 16);
        });
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

    function post(request)
    {
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