const expect = require("expect");
const {generateMessage} = require('./message')

describe("generateMessage", () => {
    it("should generate correct mesage object", () => {
        var from = 'Vipul';
        var text = 'This is a message';
        var message = generateMessage(from, text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});