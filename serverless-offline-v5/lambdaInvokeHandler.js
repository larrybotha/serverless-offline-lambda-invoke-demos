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
  endpoint: "http://localhost:3005",
});

exports.invokeEvent = async function invokeEvent() {
  const params = {
    // ClientContext: undefined,
    FunctionName: "so-v5-dev-invokedHandler",
    InvocationType: "Event",
    // Payload: undefined,
  };

  const response = await lambda.invoke(params).promise();

  return {
    body: stringify(response),
    statusCode: 200,
  };
};

exports.invokeRequestResponse = async function invokeRequestResponse() {
  const params = {
    // ClientContext: undefined,
    FunctionName: "so-v5-dev-invokedHandler",
    InvocationType: "RequestResponse",
    Payload: JSON.stringify({ foo: "bar" }),
  };

  const response = await lambda.invoke(params).promise();

  return {
    body: stringify(response),
    statusCode: 200,
  };
};

exports.invokedHandler = handlerToInvoke;
