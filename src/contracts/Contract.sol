//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract Contract {
    string private message;

    constructor(string memory _message) {
        console.log("Deploying a Contract with message:", _message);
        message = _message;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory _message) public {
        console.log("Changing message from '%s' to '%s'", message, _message);
        message = _message;
    }
}
