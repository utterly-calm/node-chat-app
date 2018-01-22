const expect = require("expect");
const { generateMessage, generateLocationMessage } = require('./message')

describe("generateMessage", () => {
    it("should generate correct message object", () => {
        var from = 'Vipul';
        var text = 'This is a message';
        var message = generateMessage(from, text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });
    });
});

describe("generateLocationMessage", () => {
    it("should generate correct location object", () => {
        var from = 'Vipul';
        var lat = 1;
        var lng = 1;
        var message = generateLocationMessage(from, lat, lng);
        expect(message.createdAt).toBeA('number');
        expect(message.url).toBe(`https://www.google.com/maps?q=${lat},${lng}`);
    });
});