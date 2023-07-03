// The $(document).ready() ensures that the code included runs only when the document object model (DOM) is loaded.
$(document).ready(function(){
    $(input).change(function(){
        // the below line allows to put the text present in the input box into a variable input
        console.log($(this).val());
        var input = $(this).val();
        // appending list items to the list created for recordings tasks 
        $('ul').append('<li>' + input + '<i class="fas fa-check fa-beat"></i> <i class="fas fa-xmark fa-beat"></i> </li>');
        //reseting the input box once the task has been recorded
        $(this).val('');
    });

    $('ul').on('click','.fa-xmark', function(){
       // console.log($(this));
       // console.log($(this).parent());
    //    $(this) provides reference to a <i> tag, the parent of which is the list item itself
        $(this).parent('li').fadeOut(210);
    })

    $('ul').on('click','.fa-check',function(){
     //   console.log($(this));
     //   console.log($(this).parent());
    //    $(this) provides reference to a <i> tag, the parent of which is the list item itself
        $(this).parent('li').toggleClass('completed');
    })
    
});