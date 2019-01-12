/***************************************************
 * Copyright (c) Software AG. All Rights Reserved. *
 ***************************************************/

// Helper:
function Point(p_x, p_y) {
    this.x = p_x;
    this.y = p_y;
    this.toString = function() {
        return 'Point('+this.x+', '+this.y+')';
    }
	
	this.getX = function() {
		return this.x;
	}
	
	this.getY = function() {
		return this.y;
	}
}

function Rectangle(p_x, p_y, p_width, p_height) {
    this.x = p_x;
    this.y = p_y;
    this.width = p_width;
    this.height = p_height;
    this.top = p_y;
    this.left = p_x;
    this.right = p_x + p_width;
    this.bottom = p_y + p_height;
    this.isPointInside = function(p_point) {
        return ((p_point.x > this.left)
            &&  (p_point.x < this.right)
            &&  (p_point.y > this.top)
            &&  (p_point.y < this.bottom)
        );
    }

    this.isRectangleInside = function(p_rect) {
        return ((p_rect.left > this.left)
            &&  (p_rect.right < this.right)
            &&  (p_rect.top > this.top)
            &&  (p_rect.bottom < this.bottom)
        );
    }

    this.toString = function() {
        return 'Rectangle(x='+this.x+', y='+this.y+', w='+this.width+', h='+this.height+' [r='+this.right+', b='+this.bottom+'])';
    }
}

function getMousePointInWindow(ev) {
	var x = ev.clientX + document.body.scrollLeft;
    var y = ev.clientY + document.body.scrollTop;
	return new Point(x, y);

}


function getObjectBounds(p_objectID) {
    var obj = document.getElementById(p_objectID);
    var x = obj.offsetLeft;
    var y = obj.offsetTop;
    var width = obj.offsetWidth;
    var height = obj.offsetHeight;	
    return new Rectangle(x, y, width, height);
}

function getVisibleRectOfWindow() {
	var x = document.body.scrollLeft;
    var y = document.body.scrollTop;
    var width = document.body.offsetWidth;
    var height = document.body.offsetHeight;
    return new Rectangle(x, y, width, height);
}