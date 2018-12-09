export default class SimpleFormatter {
  getFormatterText (text) {
    let trans = {
      'a': 'Ä',
      'b': 'ß',
      'c': 'Ć'
    }
    let outPutTxt = ''
    for (let index = 0; index < text.length; index++) {
      const ele = text[index]
      outPutTxt += trans[ele.toLowerCase()]
    }
    return outPutTxt
  }
}
