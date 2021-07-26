class HttpConstants {
  static get BadRequest() {
    return 400;
  }
  static get OK() {
    return 200;
  }
  static get Created() {
    return 201;
  }
  static get NoContent() {
    return 204;
  }
}

module.exports = HttpConstants;
