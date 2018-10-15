var ViewModel = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.level = ko.observable('newborn');

  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribtution =ko.observable('https://www.flickr.com/photos/big');
  this.nickname=ko.observableArray(['Tabtab','t-bone','Mr.t','tabita']);
  this.incrementCounter = function() {
    this.clickCount(this.clickCount() +1);
    if(this.clickCount()<10)
     { this.level('newborn');}
    else if (this.clickCount()<110 && this.clickCount()>10) {
      this.level('infant');
    }
    else if (this.clickCount()<200 && this.clickCount()>=110)
     {this.level('teen');}
  };
}

ko.applyBindings(new ViewModel());
