function translate(locale: any, fileName: string) {
  const fs = require("fs")
  const file = fs.readFileSync(`./public/localizes/${locale}/${fileName}.json`, "utf-8")
  return JSON.parse(file)
}

export default translate
