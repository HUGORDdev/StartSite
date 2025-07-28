$(function(){
   var $mainMenuItems = $("#main-menu ul").children("li"),
   totalMainMenuItems = $mainMenuItems.length,
   openedIdex = 2,

   init = function(){
      bindEvents();
      if(valideIndex(openedIdex)){
         animateItems($mainMenuItems.eq(openedIdex),true,700);
      }

   },
    bindEvents = function(){
      $mainMenuItems.children(".images").click(function(){
         var newIndex= $(this).parent().index(),
          $item = $mainMenuItems.eq(newIndex);
         if(openedIdex === newIndex)
         {
           animateItems($item, false , 250);
           openedIdex = -1;
         }      
          else
         {
           if(valideIndex(newIndex))
             {
             animateItems($mainMenuItems.eq(openedIdex),false,250);
             openedIdex = newIndex ;
             animateItems($item, true ,250);
             }
         }   
     });
    },
  //   on teste si  l'index est valide
  valideIndex = function(indexToCheck){
      return(indexToCheck >= 0)&&(indexToCheck < totalMainMenuItems); 
  },
   animateItems = function($item, toOpen,speed){   
  //    expression ? valeur1 : valeur2
     var  $colorImage = $item.find(".color");
     var itemParam = toOpen? { width :"420px"} : {width :"140px"} ;
    var    colorImageParam = toOpen? { left : "0px"} : {left : "140px"};
      $colorImage.animate(colorImageParam,speed);
      $item.animate( itemParam , speed);
   };

   init();
});