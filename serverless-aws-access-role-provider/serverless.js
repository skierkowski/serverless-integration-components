const { Component } = require('@serverless/core');

class ServerlessAwsAccessRoleProvider extends Component {
  /**
   * The "provide" method is a stateless method which performs a data
   * lookup to third party services and returns those values as outputs
   * 
   * @param {*} inputs 
   */
  async provide(inputs = {}) {
    const { accessRole } = inputs

    /**
     * Calls AWS STS to generate credentials using the accessRole
     */
    
     const outputs = {
       AWS_ACCESS_KEY_ID: generatedCreds.awsAccessKeyId,
       AWS_SECRET_ACCESS_KEY: generatedCreds.awsSecretAccessKey
     }

    return outputs
  }
}

module.exports = ServerlessAwsAccessRoleProvider;