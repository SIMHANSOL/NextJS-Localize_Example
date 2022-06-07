function translate(context: any) {
  const fs = require("fs")
  const file = fs.readFileSync(`./public/localizes/${context.locale}/common.json`, "utf-8")
  return JSON.parse(file)
}

export default translate
