const ABI = [ { "constant": true, "inputs": [], "name": "getData", "outputs": [ { "name": "", "type": "string", "value": "hello" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "helloString", "type": "string" } ], "name": "setData", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" } ]

const address = "0xB5f572EFB5d697B959387D35621E6d117086EC2b"

module.exports = {
	ABI,
	address,
}