const express = require("express");
const Web3 = require("web3");

const contract = require("./contract");

const app = express();
const web3 = new Web3();

const { eth } = web3;

web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

const transaction = "0x78ee068ec5608f34f3cdc287c7e56bf2f764d0f756b318f5b6352c96873db23f"

console.log(eth.coinbase);
console.log(eth.getTransaction(transaction))

const helloContract = web3.eth.contract(contract.ABI).at(contract.address);

app.get("/", function(req, res) {
	const { personal } = web3;

	web3.personal.unlockAccount(eth.coinbase, "123", 1000);

	res.send(helloContract.setData.sendTransaction(
		"Hell", 
		{ from: eth.coinbase})
	);
});

app.listen(8000, function() {
	console.log("Server has been started on localhost:8000");
});
