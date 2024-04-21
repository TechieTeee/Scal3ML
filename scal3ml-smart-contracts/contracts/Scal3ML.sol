// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Scal3ML {
    // Struct to represent a machine learning model
    struct Model {
        address owner; // Owner of the model
        string metadata; // Metadata about the model (e.g., description, hyperparameters)
        bytes modelData; // Actual model data (can be stored off-chain)
        uint256 price; // Price in wei if the model is for sale, 0 if not for sale
        address[] contributors; // Addresses of contributors who worked on the model
        mapping(address => uint256) contributions; // Contributions of each contributor
    }
    
    // Mapping from model ID to model details
    mapping(uint256 => Model) public models;
    uint256 public modelCount; // Counter for total models
    
    // Event for model creation
    event ModelCreated(uint256 indexed id, address indexed owner, string metadata, uint256 price);
    
    // Event for model sale
    event ModelForSale(uint256 indexed id, uint256 price);
    
    // Modifier to check if the caller is the owner of the model
    modifier onlyOwner(uint256 _modelId) {
        require(msg.sender == models[_modelId].owner, "Only the owner can perform this action");
        _;
    }
    
    // Function to create a new model
    function createModel(string memory _metadata, bytes memory _modelData) external {
        models[modelCount] = Model({
            owner: msg.sender,
            metadata: _metadata,
            modelData: _modelData,
            price: 0,
            contributors: new address 
        });
        emit ModelCreated(modelCount, msg.sender, _metadata, 0);
        modelCount++;
    }
    
    // Function to set a model for sale
    function setModelForSale(uint256 _modelId, uint256 _price) external onlyOwner(_modelId) {
        models[_modelId].price = _price;
        emit ModelForSale(_modelId, _price);
    }
    
    // Function to buy a model
    function buyModel(uint256 _modelId) external payable {
        require(models[_modelId].price > 0, "Model is not for sale");
        require(msg.value >= models[_modelId].price, "Insufficient funds");
        
        address payable owner = payable(models[_modelId].owner);
        owner.transfer(msg.value); // Transfer funds to model owner
        
        // Transfer ownership of the model
        models[_modelId].owner = msg.sender;
        models[_modelId].price = 0; // Reset price
    }
    
    // Function to add a contributor to a model
    function addContributor(uint256 _modelId, address _contributor, uint256 _contribution) external onlyOwner(_modelId) {
        models[_modelId].contributors.push(_contributor);
        models[_modelId].contributions[_contributor] = _contribution;
    }
}
