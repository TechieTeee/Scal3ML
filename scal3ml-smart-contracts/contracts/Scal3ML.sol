// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Scal3ML {
    struct Data {
        string ipfsHash;
        address payable owner;
        uint256 price;
        mapping(address => bool) hasAccess;
        mapping(address => uint256) contributors;
    }
    
    struct Model {
        string ipfsHash;
        address payable owner;
        uint256 price;
        mapping(address => bool) hasAccess;
        mapping(address => uint256) contributors;
    }
    
    mapping(uint256 => Data) public dataStore;
    uint256 public dataCount;
    
    mapping(uint256 => Model) public modelStore;
    uint256 public modelCount;
    
    event DataUploaded(uint256 indexed id, string ipfsHash, address indexed owner, uint256 price);
    event ModelUploaded(uint256 indexed id, string ipfsHash, address indexed owner, uint256 price);
    event DataPurchased(uint256 indexed id, address indexed buyer, uint256 amountPaid);
    event ModelPurchased(uint256 indexed id, address indexed buyer, uint256 amountPaid);
    event DataAccessGranted(uint256 indexed id, address indexed user);
    event ModelAccessGranted(uint256 indexed id, address indexed user);
    
    function uploadData(string memory _ipfsHash, uint256 _price) public {
        dataCount++;
        Data storage newData = dataStore[dataCount];
        newData.ipfsHash = _ipfsHash;
        newData.owner = payable(msg.sender);
        newData.price = _price;
        emit DataUploaded(dataCount, _ipfsHash, msg.sender, _price);
    }

    function uploadModel(string memory _ipfsHash, uint256 _price) public {
        modelCount++;
        Model storage newModel = modelStore[modelCount];
        newModel.ipfsHash = _ipfsHash;
        newModel.owner = payable(msg.sender);
        newModel.price = _price;
        emit ModelUploaded(modelCount, _ipfsHash, msg.sender, _price);
    }
    
    function purchaseData(uint256 _id) public payable {
        require(msg.value >= dataStore[_id].price, "Insufficient funds");
        dataStore[_id].owner.transfer(msg.value);
        emit DataPurchased(_id, msg.sender, msg.value);
    }
    
    function purchaseModel(uint256 _id) public payable {
        require(msg.value >= modelStore[_id].price, "Insufficient funds");
        modelStore[_id].owner.transfer(msg.value);
        emit ModelPurchased(_id, msg.sender, msg.value);
    }
    
    function grantDataAccess(uint256 _id, address _user) public {
        require(msg.sender == dataStore[_id].owner, "Only owner can grant access");
        dataStore[_id].hasAccess[_user] = true;
        emit DataAccessGranted(_id, _user);
    }
    
    function grantModelAccess(uint256 _id, address _user) public {
        require(msg.sender == modelStore[_id].owner, "Only owner can grant access");
        modelStore[_id].hasAccess[_user] = true;
        emit ModelAccessGranted(_id, _user);
    }
}
