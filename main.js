function Game(spec){
  this.lightScore = spec.lightScore;
  this.darkScore = spec.darkScore;
}
function ChessPiece(spec){
  this.color =  spec.color;
  this.type =  spec.type;
  this.currentX = spec.currentX;
  this.currentY = spec.currentY;
  $('.c'+this.currentX+'.r'+this.currentY).html(spec.type);
  $('.c'+this.currentX+'.r'+this.currentY).css({'color':spec.color});
  switch(this.type){
    case 'K':
      this.move = function(x,y){
        x = methods.alphaToNumeral(x);
        if(Math.abs(x - this.currentX <= 1) && Math.abs(y - this.currentY <= 1)){
          $('.c'+this.currentX+'.r'+this.currentY).html('');
          $('.c'+x+'.r'+y).html(spec.type);
          $('.c'+x+'.r'+y).css({'color':spec.color});
          this.currentX = x;
          this.currentY = y;
        }else{
          console.log('INVALID MOVE');
        }
      }
      break;
    case 'Q':
      this.move = function(x,y){
        x = methods.alphaToNumeral(x);
        if(Math.abs(x - this.currentX) === Math.abs(y - this.currentY) || x === this.currentX || y === this.currentY){
          $('.c'+this.currentX+'.r'+this.currentY).html('');
          $('.c'+x+'.r'+y).html(spec.type);
          $('.c'+x+'.r'+y).css({'color':spec.color});
          this.currentX = x;
          this.currentY = y;
        }else{
          console.log('NEWx='+x+'--NEWy='+y+'--OLDx='+this.currentX+'--OLDy='+this.currentY);
        }
      }
      break;
    case 'B':
      this.move = function(x,y){
        x = methods.alphaToNumeral(x);
        if(Math.abs(x - this.currentX) === Math.abs(y - this.currentY)){
          $('.c'+this.currentX+'.r'+this.currentY).html('');
          $('.c'+x+'.r'+y).html(spec.type);
          $('.c'+x+'.r'+y).css({'color':spec.color});
          this.currentX = x;
          this.currentY = y;
        }else{
          console.log('NEWx='+x+'--NEWy='+y+'--OLDx='+this.currentX+'--OLDy='+this.currentY);
        }
      }
      break;
    case 'R':
      this.move = function(x,y){
        x = methods.alphaToNumeral(x);
        if(x === this.currentX || y === this.currentY){
          $('.c'+this.currentX+'.r'+this.currentY).html('');
          $('.c'+x+'.r'+y).html(spec.type);
          $('.c'+x+'.r'+y).css({'color':spec.color});
          this.currentX = x;
          this.currentY = y;
        }else{
          console.log('NEWx='+x+'--NEWy='+y+'--OLDx='+this.currentX+'--OLDy='+this.currentY);
        }
      }
      break;
    case 'N':
      this.move = function(x,y){
        x = methods.alphaToNumeral(x);
        if(Math.abs(x - this.currentX) === 1 && Math.abs(y - this.currentY) === 2 || Math.abs(x - this.currentX) === 2 && Math.abs(y - this.currentY) === 1){
          $('.c'+this.currentX+'.r'+this.currentY).html('');
          $('.c'+x+'.r'+y).html(spec.type);
          $('.c'+x+'.r'+y).css({'color':spec.color});
          this.currentX = x;
          this.currentY = y;
        }else{
          console.log('NEWx='+x+'--NEWy='+y+'--OLDx='+this.currentX+'--OLDy='+this.currentY);
        }
      }
      break;
    case 'P':
      this.move = function(x,y){
        x = methods.alphaToNumeral(x);
        if(this.currentY === 2 || this.currentY === 7){
          if(x === this.currentX && (y - this.currentY === 2 || y - this.currentY === 1)){
            $('.c'+this.currentX+'.r'+this.currentY).html('');
            $('.c'+x+'.r'+y).html(spec.type);
            $('.c'+x+'.r'+y).css({'color':spec.color});
            this.currentX = x;
            this.currentY = y;
          }else{
            console.log('NEWx='+x+'--NEWy='+y+'--OLDx='+this.currentX+'--OLDy='+this.currentY);
          }
        }else if(x === this.currentX && y - this.currentY === 1){
          $('.c'+this.currentX+'.r'+this.currentY).html('');
          $('.c'+x+'.r'+y).html(spec.type);
          $('.c'+x+'.r'+y).css({'color':spec.color});
          this.currentX = x;
          this.currentY = y;
        }else{
          console.log('NEWx='+x+'--NEWy='+y+'--OLDx='+this.currentX+'--OLDy='+this.currentY);
        }
      }
      break;
    default:
      console.log('Class not recognized');
  }
}





var methods={
  init:function(){
    methods.initStyle();
    methods.initEvents();
    methods.renderLight();
    methods.renderDark();
    console.log('Must move pieces using the console');
  },
  initStyle:function(){
    //render chessboard
    $('body').append('<table>');
    for(i=0;i<9;i++){
      $('table').append('<tr class="row'+i+'">');
      for(j=0;j<9;j++){
        var x=j;
        var y=8-i;
        //determines A-H & 1-8 side/bottom index
        var foo = '';
        if(y===0){
          if(x===1){
            foo = 'A';
          }else if(x===2){
            foo = 'B';
          }else if(x===3){
            foo = 'C';
          }else if(x===4){
            foo = 'D';
          }else if(x===5){
            foo = 'E';
          }else if(x===6){
            foo = 'F';
          }else if(x===7){
            foo = 'G';
          }else if(x===8){
            foo = 'H';
          }
        }else if(x===0){
          foo = y;
        }
        $('.row'+i).append('<td class="c'+x+' r'+y+'">'+foo+'</td>');
      }
    }
  },
  initEvents:function(){

  },
  renderLight:function(){
    methods.lightKing = new ChessPiece({type:'K',color:'white',currentX:5,currentY:1});
    methods.lightQueen = new ChessPiece({type:'Q',color:'white',currentX:4,currentY:1});
    methods.lightBishopLeft = new ChessPiece({type:'B',color:'white',currentX:3,currentY:1});
    methods.lightBishopRight = new ChessPiece({type:'B',color:'white',currentX:6,currentY:1});
    methods.lightRookLeft = new ChessPiece({type:'R',color:'white',currentX:1,currentY:1});
    methods.lightRookRight = new ChessPiece({type:'R',color:'white',currentX:8,currentY:1});
    methods.lightKnightLeft = new ChessPiece({type:'N',color:'white',currentX:2,currentY:1});
    methods.lightKnightRight = new ChessPiece({type:'N',color:'white',currentX:7,currentY:1});
    methods.lightPawn1 = new ChessPiece({type:'P',color:'white',currentX:1,currentY:2});
    methods.lightPawn2 = new ChessPiece({type:'P',color:'white',currentX:2,currentY:2});
    methods.lightPawn3 = new ChessPiece({type:'P',color:'white',currentX:3,currentY:2});
    methods.lightPawn4 = new ChessPiece({type:'P',color:'white',currentX:4,currentY:2});
    methods.lightPawn5 = new ChessPiece({type:'P',color:'white',currentX:5,currentY:2});
    methods.lightPawn6 = new ChessPiece({type:'P',color:'white',currentX:6,currentY:2});
    methods.lightPawn7 = new ChessPiece({type:'P',color:'white',currentX:7,currentY:2});
    methods.lightPawn8 = new ChessPiece({type:'P',color:'white',currentX:8,currentY:2});
  },
  renderDark:function(){
    methods.darkKing = new ChessPiece({type:'K',color:'black',currentX:5,currentY:8});
    methods.darkQueen = new ChessPiece({type:'Q',color:'black',currentX:4,currentY:8});
    methods.darkBishopRight = new ChessPiece({type:'B',color:'black',currentX:3,currentY:8});
    methods.darkBishopLeft = new ChessPiece({type:'B',color:'black',currentX:6,currentY:8});
    methods.darkRookRight = new ChessPiece({type:'R',color:'black',currentX:1,currentY:8});
    methods.darkRookLeft = new ChessPiece({type:'R',color:'black',currentX:8,currentY:8});
    methods.darkKnightRight = new ChessPiece({type:'N',color:'black',currentX:2,currentY:8});
    methods.darkKnightLeft = new ChessPiece({type:'N',color:'black',currentX:7,currentY:8});
    methods.darkPawn1 = new ChessPiece({type:'P',color:'black',currentX:1,currentY:7});
    methods.darkPawn2 = new ChessPiece({type:'P',color:'black',currentX:2,currentY:7});
    methods.darkPawn3 = new ChessPiece({type:'P',color:'black',currentX:3,currentY:7});
    methods.darkPawn4 = new ChessPiece({type:'P',color:'black',currentX:4,currentY:7});
    methods.darkPawn5 = new ChessPiece({type:'P',color:'black',currentX:5,currentY:7});
    methods.darkPawn6 = new ChessPiece({type:'P',color:'black',currentX:6,currentY:7});
    methods.darkPawn7 = new ChessPiece({type:'P',color:'black',currentX:7,currentY:7});
    methods.darkPawn8 = new ChessPiece({type:'P',color:'black',currentX:8,currentY:7});
  },
  alphaToNumeral:function(x){
    if(x.toLowerCase()==='a'){
      return 1;
    }else if(x.toLowerCase()==='b'){
      return 2;
    }else if(x.toLowerCase()==='c'){
      return 3;
    }else if(x.toLowerCase()==='d'){
      return 4;
    }else if(x.toLowerCase()==='e'){
      return 5;
    }else if(x.toLowerCase()==='f'){
      return 6;
    }else if(x.toLowerCase()==='g'){
      return 7;
    }else if(x.toLowerCase()==='h'){
      return 8;
    }
  }
}

$(document).ready(function(){
  methods.init();
});
