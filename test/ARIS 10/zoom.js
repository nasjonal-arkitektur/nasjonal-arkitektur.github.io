/***************************************************
 * Copyright (c) Software AG. All Rights Reserved. *
 ***************************************************/

function zoomManager(id, zoomSteps, startIndex) {
	this.id = id;
	this.zoomSteps = zoomSteps;
	this.startIndex = startIndex;
	this.currentIndex = startIndex;
	
	this.zoomIn = function() {
		if (this.currentIndex < this.zoomSteps.length-1) {
			this.currentIndex++;
			this._doZoom();
		}		
	};
	
	this.zoomOut = function() {
		if (this.currentIndex > 0) {
			this.currentIndex--;
			this._doZoom();
		}
	};
	
	this.zoomOrig = function() {
		this.currentIndex = this.startIndex;
		this._doZoom();
	};

	this.getId = function() {
		return this.id;
	}

	this.showOverview = function(w, h, modelWidth, modelHeight) {
		var img = parent.tree.document.getElementById("blank");
		img.src = this.id + "_" + this.zoomSteps[0] + ".png";
		img.style.display = '';
		
		// Nötig oder nicht???
		var currentW = w;
		var currentH = h - 30;
		if (img.height > 1) {
			corrWidth = currentW/modelWidth;
			corrHeight = currentH/modelHeight;
			if (corrWidth > corrHeight) {
				currentW = modelWidth * corrHeight;
			}
			else {
				currentH = modelHeight * corrWidth;
			}
			
			img.width = currentW;		
			img.height = currentH;
			
		}
		
	}

	
	this._doZoom = function() {
		var img = parent.data.document.getElementById(this.id);
		img.src = this.id + "_" + this.zoomSteps[this.currentIndex] + ".png";
		img.useMap = "#ObjectMap" + this.zoomSteps[this.currentIndex];
		
		var tree = parent.tree.document.getElementById("tree");
		if (tree.style.display == 'none') {
			var ScrollTop = document.body.scrollTop;
			parent.tree.showOverview(true);
		}
	}


	this.doOptimalZoom = function(h, w, popup) {
		var img = parent.data.document.getElementById(this.id);
		var actualZoomValue = this.zoomSteps[this.currentIndex];
		var currentZoomValue = actualZoomValue;
		img.src = this.id + "_" + actualZoomValue + ".png";
		var currentZoomValueCorr = 100/currentZoomValue;
		var imgHeight = img.height;
		var imgWidth = img.width;
		var corrH_W = h/w;
		var corrHeight_Width = img.height/img.width;
		var i = this.currentIndex;
		if (corrHeight_Width > corrH_W) {
			//Höhe ist kritische Größe!
			if (img.height < h) {
				
				while((img.height*currentZoomValue/actualZoomValue < h) && (i < this.zoomSteps.length-1)) {
					i++;
					currentZoomValue = this.zoomSteps[i];
					this.currentIndex = i;
				}
				if ((img.height > h) && (i > 0)) {
					i--;
				} 
				
			}
			else if (img.height*currentZoomValue/actualZoomValue > h) {
				while((img.height*currentZoomValue/actualZoomValue > h) && (i > 0)) {
					i--;
					currentZoomValue = this.zoomSteps[i];
					this.currentIndex = i;
				}
				
				
			}
		}
		else {
			//Breite ist kritische Größe!
			if (img.width < w) {
				while((img.width*currentZoomValue/actualZoomValue < w) && (i < this.zoomSteps.length-1)) {
					i++;
					currentZoomValue = this.zoomSteps[i];
					this.currentIndex = i;
				}
				if ((img.width*currentZoomValue/actualZoomValue > w) && (i > 0)) {
					i--;
				} 
				
			}
			else if (img.width > w) {
				while((img.width*currentZoomValue/actualZoomValue > w) && (i > 0)) {
					i--;
					currentZoomValue = this.zoomSteps[i];
					this.currentIndex = i;
				}
				
			}
		}
		this.currentIndex = i;
		img.src = this.id + "_" + this.zoomSteps[i] + ".png";
		img.useMap = "#ObjectMap" + this.zoomSteps[i];
		
		var tree = parent.tree.document.getElementById("tree");
		if (tree.style.display == 'none') {
			var ScrollTop = document.body.scrollTop;
			parent.tree.showOverview(true);
		}

	}


	this.overviewResize = function(w, h) {
		var tree = parent.tree.document.getElementById("tree");
		parent.tree.setTreeDimension(w, h);
		if (tree.style.display == 'none') {
			parent.tree.showOverview(false);
		}
		
	}

	this.getZoomValue = function() {
		return this.zoomSteps[this.currentIndex];
	}

}

function getZoomManager() {
	return zoom;
}

