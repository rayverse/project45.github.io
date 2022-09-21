class Screen {
constructor() {
    this.titleimg = createImg();
    this.intro = createElement("h2");
    this.nextButtonImg = createImg();
    this.trialButtonImg = createImg();
    //this.bgImg = createImg();
}
setElementPosition(){
    this.titleimg.position(x, y);
    this.nextButtonImg.position(x,y);
    this.trialButtonImg.position(x, y);
}
setElementStyle(){
    this.titleimg.class("titleStyle");
}
display(){
    this.setElementPosition();
    this.setElementStyle();
}
}