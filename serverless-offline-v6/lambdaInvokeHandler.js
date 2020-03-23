"use strict";

const { config, Lambda } = require("aws-sdk");

const { handlerToInvoke } = require("../utils/index");

const { stringify } = JSON;

config.update({
  accessKeyId: "ABC",
  secretAccessKey: "SECRET",
});

const lambda = new Lambda({
  apiVersion: "2015-03-31",
  endpoint: "http://localhost:3007",
});

exports.invokeInvocationTypeEvent = async function invokeInvocationTypeEvent() {
  const params = {
    // ClientContext: undefined,
    FunctionName: "so-v6-dev-invokedHandler",
    InvocationType: "Event",
    // Payload: undefined,
  };

  const response = await lambda.invoke(params).promise();

  return {
    body: stringify(response),
    statusCode: 200,
  };
};

exports.invokeInvocationTypeRequestResponse = async function invokeInvocationTypeRequestResponse() {
  const params = {
    // ClientContext: undefined,
    FunctionName: "lambda-invoke-tests-dev-invokedHandler",
    InvocationType: "RequestResponse",
    // Payload: undefined,
  };

  const response = await lambda.invoke(params).promise();

  return {
    body: stringify(response),
    statusCode: 200,
  };
};

module.exports = { handlerToInvoke };
