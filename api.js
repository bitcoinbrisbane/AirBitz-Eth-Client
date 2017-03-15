// define(function()
// {
    var abcTxEngine = {
        getBlockHeight: getBlockHeight
    }

    //abcTxEngine.getBlockHeight
    function getBlockHeight () {
        var url = "http://139.59.38.230:8545";

        var request = {
            id: 1,
            jsonrpc: "2.0",
            method: "eth_blockNumber",
            params: []
        };

        //$.post(url, JSON.stringify(request), displaySearchResult, "json");
        $.post(url, JSON.stringify(request), function(response){
            var dec = parseInt(response.result, 16);
            alert(dec);
        });
    }

    function getBalance(options)
    {

    }

    function displaySearchResult(response) {

        if (response.result)
                alert(response.result);

        else if (response.error)
                alert("Search error: " + response.error.message);
    };
//}
//}