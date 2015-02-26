var jekyllSearch = {

  config: {
    queryString: 'q',
    resultsContainerId: 'search-results',
    searchFormId: 'search-form',
    fields: [{name: 'title', boost: 10}, {name: 'content'}],
    ref: 'url'
  },

  index: {},
  data: {},

  init: function() {
    this.createIndex();
    this.populateIndex();
    this.searchFromQueryString();
    this.enableSearchFromForm();
  },

  createIndex: function() {
    var config = this.config;
    this.index = lunr(function() {
      for(var i = 0; i < config.fields.length; i++) {
        if(config.fields[i].boost) {
          this.field(config.fields[i].name, {boost: config.fields[i].boost});
        } else {
          this.field(config.fields[i].name);
        }
      }
      this.ref(config.ref);
    });
  },
  
  populateIndex: function() {
    if(typeof searchData != 'object'){
      throw "Cannot find search data!";
    }
    for(var i = 0; i < searchData.length; i++) {
      this.index.add(searchData[i]);
      this.data[searchData[i][this.config.ref]] = searchData[i];
    }
  },
  
  updateSearchResults: function(query) {
    var results = this.index.search(query);
    query = query.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
       return '&#'+i.charCodeAt(0)+';';
    });
    var searchResultsEl = document.getElementById(this.config.resultsContainerId);
    if(!searchResultsEl) {
      throw "Cannot find search results container!";
    }
    if(query == "") {
      searchResultsEl.innerHTML = '<p class="search-status">Enter a term to search this site...</p>';
      return;
    }
    if(results.length == 0) {
      searchResultsEl.innerHTML = '<p class="search-status">No results found for "' + query + '".</p>';
      return;
    }
    searchResultsEl.innerHTML = '<p class="search-status">Showing ' + results.length + ' ' + (results.length == 1 ? 'result' : 'results')  + ' for "' + query + '".</p>';
    var resultListEl = document.createElement('ol');
    for(var i = 0; i < results.length; i++) {
      var result = this.data[results[i].ref];
      var resultContainerEl = document.createElement('li');
      var resultLinkEl = document.createElement('a');
      resultLinkEl.innerHTML = result.title;
      resultLinkEl.style.fontWeight = 'bold';
      resultLinkEl.href = results[i].ref;
      resultContainerEl.appendChild(resultLinkEl);
      var resultExerptEl = document.createElement('p');
      resultExerptEl.innerHTML = this.truncateString(result.content, 170, '...');
      resultExerptEl.style.fontStyle = 'italic';
      resultContainerEl.appendChild(resultExerptEl);
      resultListEl.appendChild(resultContainerEl);
    }
    resultListEl.style.marginBottom = '50px';
    searchResultsEl.appendChild(resultListEl);
  },
  
  truncateString: function(string, length, append) {
    if(string.length <= length){
      return string;
    }
    var trimmedString = string.substr(0, length);
    return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + append;
  },

  getQueryParam: function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  },
  
  searchFromQueryString: function() {
    var query = this.getQueryParam(this.config.queryString);
    if(!query){
      query = "";
    }
    this.updateSearchResults(query);
  },
  
  enableSearchFromForm: function() {
    var that = this;
    window.addEventListener('popstate', function(event) {
      that.searchFromQueryString.call(that);
    });
    var searchFormEl = document.getElementById(this.config.searchFormId);
    searchFormEl.elements[0].value = this.getQueryParam(this.config.queryString) || '';
    if(!searchFormEl) {
      return false;
    }
    searchFormEl.addEventListener('submit', function(event) {
      event.preventDefault();
      var query = searchFormEl.elements[0].value;
      searchFormEl.elements[0].blur();
      that.updateSearchResults(query);
      history.pushState({}, document.title, "?" + that.config.queryString + '=' + query);
      window.scrollTo(0, 0);
    });
  }

};

jekyllSearch.init();