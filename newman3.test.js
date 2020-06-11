const newman = require('newman'); // require newman in your project

describe("group 1", () => {
  test("case 1", function(){

    console.log("1-1-1 before");
  
    newman.run({
      collection: require('./sample-collection.json'),
      reporters: 'json'
    }).on('done', function (err, summary) {
      if (err || summary.error) {
        console.error('collection run encountered an error.');
        expect(0).toBe(1);
        expect(summary.error).toBe(1);
      }
      else {
        expect(0).toBe(1);
        console.log('collection run completed.');
        expect(summary.error).toBe(1);
      }
    });

    console.log("1-1-1 after");

    expect(1).toBe(1);
    expect(1).toBe(1);
  });
});
