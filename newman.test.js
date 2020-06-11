const newman = require('newman'); // require newman in your project

describe("group 1", () => {
  test("case 1", async function(){

    console.log("1-1-1 before");
    
    await postman_run(); 
 
    console.log("1-1-1 after");

    expect(1).toBe(1);
    expect(1).toBe(1);
  });
});

const postman_run = () => {
  return new Promise((resolve, reject)=>{
    newman.run({
      collection: require('./sample-collection.json'),
      reporters: 'json'
    }).on('done', function (err, summary) {
      if (err || summary.error) {
        console.error('collection run encountered an error.');
        expect(0).toBe(1);
        expect(summary.error).toBe(1);
        resolve();
      }
      else {
        expect(0).toBe(1);
        console.log('collection run completed.');
        expect(summary.error).toBe(1);
        resolve();
      }
    });
  });
}
