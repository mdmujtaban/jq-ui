// 1
$( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function(event, ui) {
        $( this )
          .addClass("ui-state-highlight")
          .find( "p" )
            .html("Dropped!");
      }
    });
  } );

// 2
$( function() {
    $( "#resizable" ).resizable();
  } );

$( function() {
    $( "#selectable" ).selectable();
  } );

 $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );
 // 
 $( function() {
    $( "#accordion" ).accordion();
  } );