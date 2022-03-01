const DepAddress = require('../contracts/preComputeAddress.sol');

contract('preComputedAddress verification', (accounts)=>{
    var instance;
    before(async()=>{
        instance = await DepAddress.deployed();
    });

    it('verify', async()=>{
        let bcode = await instance.getBytecode();
        let addr = await instance.computeAddress(bcode, 121);
        console.log('the computed address is '+ addr);
        let txhsh= instance.deploy(bcode,121);
        console.log(txhsh);
    });
});