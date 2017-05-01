# AirBitz-Eth-Client

geth -testnet --mine --rpc --networkid=39318 --cache=2048 --maxpeers=0 --rpccorsdomain "*" --rpcapi "eth,web3,personal,net,miner,admin,debug"

curl http://localhost:8545 -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1337}'

Test accounts

On Ubuntu
0x01b382ad42e4e0b487dd4afa343980bfde0639fb
0xf63eb1cd56336b4cd0ebcbd25b773195d520ab15
0x5757b5c3d846ec22402339c9cbe9e207346b2f55

On Mac
0x365cb620d1d1b30d7224c04a18fecaf04113eeb6
0xfAc2682521Cc3Bd6F199b58F3cDEB9e802C02AfC
1000000000000000000