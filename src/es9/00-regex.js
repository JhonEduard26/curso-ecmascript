const regex = /(\d{4})-(\d{2})-(\d{2})/

const matchers = regex.exec('2022-23-12')
console.table(matchers)