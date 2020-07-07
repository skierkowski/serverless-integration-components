const { Component } = require('@serverless/core');

class ServerlessTerraformProvider extends Component {
  /**
   * The "provide" method is a stateless method which performs a data
   * lookup to third party services and returns those values as outputs
   * 
   * @param {*} inputs 
   */
  async provide(inputs = {}) {
    const { accessToken, org, workspace} = inputs
    let outputs = {}

    /**
     * Calls Terraform Cloud using the accessToken to access the
     * outputs from org/workspace. 
     */

    return outputs
  }
}

module.exports = MyComponent;