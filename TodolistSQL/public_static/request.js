/**
 * Created by rishabh on 12/7/17.
 */
$(function(){
    var enterid=$('#enterid').val();
    var enterdone=$('#enterdone').val();
    var input=$('#inpval').val();
    var todo=[];
    $('#updatebtn').click(function(){

    $.post('/todos/update',{done:enterdone,id:enterid},function(data){
    console.log(data);
    })
    })
})