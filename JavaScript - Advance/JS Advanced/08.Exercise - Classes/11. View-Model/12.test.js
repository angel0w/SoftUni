// describe('PaymentPackege', () => { 
//     describe('create instance', () => {
//         let paymentPackage;

//         forEach(() => {
//             paymentPackage = new paymentPackage('Todor', 10)
//         });
//         it('name should be correct', () => {
//             assertequal(paymentPackage._name,'Todor', 'name has correct')
//         })
//         it('value shoul dbe correct', () => {
//             assert.equal(paymentPackage._value,10,"value has correct set to 10")
//         })
//         it('vat should be correct', () => {
//             assert.equal(paymentPackage.VAT,20,"default value is set correct")
//             assert.equal(typeof(paymentPackage._VAT), 'number', 'vat is correct type');
//         });
//         it('active should be correct', () => {
//             assert.equal(paymentPackage._active, true, "active have correct initial value true")
//             assert.equal(typeof(paymentPackage._active),'boolean', 'active jas correct type')
//         })
//     })

//     describe('test getters', () => {
//         let paymentPackage;
//         beforeEach(() => {
//             paymentPackage = new paymentPackage('Todor', 10)
//         });
//         it('instance should be return correct name', () => {
//             assert.equal(paymentPackage.name,"Todor");
//         })
//         it('should be return correct value', () => {
//             assert.equal(paymentPackage.value,"10");
//         })
//         it('test get vat', () => {
//             assert.equal(paymentPackage.VAT,20);
//         })
//         it('test active', () => {
//             assert.equal(paymentPackage.active, true);
//         })
//     })

//     describe('Test setters', () => {
//         it('set incorrect name', () => {
//             assert.throws(() => {new paymentPackage(10,10)}, 'Name must be a non-empty string')
//         })

//         it('set empty name', () => {
//             assert.throws(() => {new paymentPackage('', 10)}, 'Name must be a non-empty string')
//         })

//         it('set correct value', () => {
//             let paymentPackage = new paymentPackage('Todor', 10);
//             assert.equal(paymentPackage.name, 'Todor')
//             paymentPackage.name = 'Gosho'
//             assert.equal(paymentPackage.name, 'Gosho');
//         })
//         it('set incorrect value type', () => {
//             assert.throws(() => {new paymentPackage('Todor','10')},'Value must be a non-negative number')
//         })
//         it('set negative value', () => {
//             assert.throws(() => { new paymentPackage ('Todor', -50)}, 'Value must be a non-negative number')
//         })
//         it ('set correct value', () => {
//             let paymentPackage = new paymentPackage('Todor', 10);
//             assert.equal(paymentPackage.value, 10);
//             paymentPackage.value = 50;
//             assert.equal(paymentPackage.value, 50);
//         })

//         it('set incorrect VAT type',() => {
//             assert.throws(() => {paymentPackage('Todor', 10)}, 'VAT must be a non-negative')
//         })
//     })
// })