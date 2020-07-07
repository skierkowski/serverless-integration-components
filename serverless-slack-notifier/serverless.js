const { Component } = require('@serverless/core');

class ServerlessSlackNotifier extends Component {
  async notify(inputs = {}, event = {}) {
    const { channel, webhookUrl } = inputs;
    const { message } = event;

    /**
     * Sends a message to Slack by POSTing to the webhookURL
     * Uses the channel and message as content body
     */
  } 
}

module.exports = MyComponent;