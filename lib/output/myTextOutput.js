export default class MyTextOutput {
  constructor (formatter = null) {
    this.formatter = formatter
  }
  getResult (text) {
    if (!this.formatter) {
      throw new Error('Text Formatter is required')
    }
    let result = this.formatter.getFormatterText(text)
    return result
  }
}
