class SearchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    const result = this.#parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return result;
  }

  #clearInput() {
    this.#parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
