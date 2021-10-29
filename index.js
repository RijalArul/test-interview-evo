const dataProduct = [
  {
    id: 1,
    name: 'book',
    price: 12.49,
    category: 'books',
    goodsType: null
  },
  {
    id: 2,
    name: 'music',
    price: 14.99,
    category: 'music',
    goodsType: null
  },
  {
    id: 3,
    name: 'Chocolate Bar',
    category: 'foods',
    price: 0.85,
    goodsType: null
  },
  {
    id: 4,
    name: 'Import Box Of Chocolate Bar',
    price: 10.0,
    category: 'foods',
    goodsType: 'import'
  },
  {
    id: 5,
    name: 'Import bottle of perfume',
    price: 47.5,
    category: 'perfume',
    goodsType: 'import'
  }
]

const dataTransaction = [
  {
    id: 1,
    items: [
      {
        id: 1,
        name: 'book',
        price: 12.49,
        quantity: 1,
        category: 'books',
        goodsType: null
      },
      {
        id: 2,
        name: 'music',
        price: 14.99,
        quantity: 1,
        category: 'music',
        goodsType: null
      },
      {
        id: 3,
        name: 'Chocolate Bar',
        price: 0.85,
        quantity: 1,
        category: 'foods',
        goodsType: null
      }
    ]
  },
  {
    id: 2,
    items: [
      {
        id: 4,
        name: 'Import Box Of Chocolate Bar',
        price: 10.0,
        quantity: 1,
        category: 'foods',
        goodsType: 'import'
      },
      {
        id: 5,
        name: 'Import bottle of perfume',
        price: 47.5,
        quantity: 1,
        category: 'perfume',
        goodsType: 'import'
      }
    ]
  }
]

function main (product, transaction, idInput) {
  let salesTax = 0
  let result = ''
  let arrResultTax = []
  let arrImportTax = []
  let importTax = []
  let totalResult = 0
  for (let i = 0; i < product.length; i++) {
    let totalResultTax = 0
    for (let j = 0; j < transaction.length; j++) {
      const { id } = transaction[j]
      for (let k = 0; k < transaction[j].items.length; k++) {
        const { name, price, quantity, category, goodsType } = transaction[
          j
        ].items[k]

        if (idInput === id) {
          if (
            category === 'foods' ||
            category === 'medical' ||
            category === 'books'
          ) {
            if (product[i].name === name) {
              totalResult = price * quantity
              result = `${quantity} ${name}: ${price} \n`
            }

            if (goodsType === 'import') {
              salesTax = price * quantity * (5 / 100)
              totalResult = price * quantity + salesTax
              // arrImportTax.push(totalResult)
            }
          } else {
            if (goodsType === null) {
              salesTax = price * quantity * (10 / 100)
              totalResultTax = price * quantity + salesTax
              result += `${quantity} ${name}: ${totalResultTax} \n`
            }

            if (goodsType === 'import') {
              // console.log(name)
              salesTax = price * quantity * (15 / 100)
              totalResultTax = price * quantity + salesTax
              // console.log(totalResultTax)
              result += `${quantity} ${name}: ${totalResultTax} \n`
            }
          }
        }
      }
      arrResultTax.push(totalResultTax)
    }
  }

  let strSplit = result.split('\n')

  let resultTax = 0

  // console.log(arrResultTax)
  for (let i = 0; i < arrResultTax.length; i++) {
    resultTax = arrResultTax[i]
  }

  totalResult = totalResult + resultTax

  var uniqueArray = strSplit.filter(function (elem, pos) {
    return strSplit.indexOf(elem) == pos
  })

  let outputStr = ''
  for (let i = 0; i < uniqueArray.length; i++) {
    outputStr += uniqueArray[i] + `\n` + totalResult + `\n` + salesTax
  }

  // console.log(arrImportTax[0])

  return outputStr
}

console.log(main(dataProduct, dataTransaction, 2))
