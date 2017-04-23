// define(function()
// {
    var url = "http://139.59.38.230:8545";

    var abcTxEngine = {
        getBlockHeight: getBlockHeight
    }

    function getBlockHeight () {
        var request = {
            id: 1,
            jsonrpc: "2.0",
            method: "eth_blockNumber",
            params: []
        };

        $.post(url, JSON.stringify(request), function(response){
            var dec = parseInt(response.result, 16);
            alert(dec);
        });
    }

    function getBalance(options)
    {
        return 1;
    }

    function getNumTransactions(options, Callback)
    {
        return 1;
    }

    function getFreshAddress(addresses, options)
    {

    }

    function addGapLimitAddresses(addresses, options)
    {

    }

    function isAddressUsed(address, options)
    {
        return false;
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

    function displayResult(response) {

        if (response.result)
                alert(response.result);

        else if (response.error)
                alert("Search error: " + response.error.message);
    };
//}
//}