// define(function()
// {
    var url = "http://localhost:8545";
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

        var result = post(request);
    }

    function getBalance(options)
    {
        //0xfAc2682521Cc3Bd6F199b58F3cDEB9e802C02AfC
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

        //var result = post(request);
        var result = post(request);
    }

    function getNumTransactions(options, Callback)
    {
        //'{"jsonrpc":"2.0","method":"eth_getTransactionCount","params":["0x407d73d8a49eeb85d32cf465507dd71d507100c1","latest"],"id":1}'
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

        var result = post(request);
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
        //'{"jsonrpc":"2.0","method":"eth_getTransactionCount","params":["0x407d73d8a49eeb85d32cf465507dd71d507100c1","latest"],"id":1}'
        address = "0x365cb620d1d1b30d7224c04a18fecaf04113eeb6";
        var numberOfTransactions = getNumTransactions([address]);

        return numberOfTransactions;
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
        $.post(url, JSON.stringify(request), function(response){
            var dec = parseInt(response.result, 16);
            alert(dec);
        });
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
//}
//}