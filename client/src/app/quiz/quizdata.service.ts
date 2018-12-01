export  class  QuizdataService {
  private quizList = [
    {left: 'http://homepages.neiu.edu/~ejgore/cs300/images/red.png', right: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_%28film%29.jpg'},
    {left: 'http://homepages.neiu.edu/~ejgore/cs300/images/red.png', right: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_%28film%29.jpg'},
    {left: 'http://homepages.neiu.edu/~ejgore/cs300/images/red.png', right: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_%28film%29.jpg'},
    {left: 'http://homepages.neiu.edu/~ejgore/cs300/images/red.png', right: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_%28film%29.jpg'},
    {left: 'http://homepages.neiu.edu/~ejgore/cs300/images/red.png', right: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_%28film%29.jpg'},
  ];
  private quizRes = [];
  private partnerRes = ['left', 'right', 'right', 'left', 'right', 'left', 'left', 'right' ];

  addResult (result: string) {
    this.quizRes.push(result);
  }
  getList() {
    return this.quizList;
  }
  getResult() {
    return this.quizRes;
  }
  getPartnerRes() {
    return this.partnerRes;
  }
}
