class HomeController {
  constructor(giphy) {
    this.giphy = giphy;
    this.title = 'Nicolas Cage';
    this.stickers = [];
    this.loadStickers();
  }

  loadStickers() {
    this.giphy.getFeatured()
      .then(data => this.stickers = data);
  }
}

HomeController.$inject = ['giphy'];

export {HomeController};
