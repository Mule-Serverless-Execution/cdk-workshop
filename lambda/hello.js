/*
    handler is a conventionally used name for the function that serves as the entry point for your AWS Lambda function.
    AWS Lambda looks for a property named handler in the exported module to identify the function that should be invoked
    when the Lambda function is triggered.
 */

/*
    The async nature of the function allows you to use await inside the function,
    enabling you to work with promises in a more synchronous-like manner.
 */

exports.handler = async function(event) {
    console.log("request:", JSON.stringify(event, undefined, 2));
    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `Hello, CDK! You've hit ${event.path}\n`
    };
};