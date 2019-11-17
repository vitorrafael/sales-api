module.exports = {
  buildReport: function(data) {
    const report = {
      name: data[0]['seller.name']
    }
  
    for (let i=0; i < data.length; i++) {
      report[i] = {
        buyer: data[i]['buyer.name'],
        product: data[i]['item.name'],
        value: data[i]['item.value'],
        total: data[i].quantity * data[i]['item.value']
      }
    }
  
    return report;
  }
}
