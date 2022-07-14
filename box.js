AFRAME.registerComponent("Move-Box",{
    schema:{
        moveX: {type:"number",default:1 }

    },
    tick:function(){
this.data.moveX= this.data.moveX+0.01
var pos =this.el.getAttribute("postion")
pos.x = this.data.moveX;
this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
    }
}
    
)