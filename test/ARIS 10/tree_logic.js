/***************************************************
 * Copyright (c) Software AG. All Rights Reserved. *
 ***************************************************/

var IMAGESPATH = "images/";

var TNodeID = 1;

var highlightNodeId = -1;

var TNodes = new Array();

var TROOT		= 1;
var TFOLDER		= 2;
var TMODEL		= 3;
var TOBJOCC		= 4;
var TOBJASSIGN	= 5;
var TOBJINFO	= 6;

//UML-Typen
var TACTIVITYGRAPH 			    = 8;
var TACTOR 		   			    = 9;
var TACTORPERSON	   		    = 10;
var TACTORPOSITION  		    = 11;
var TACTORGROUP	   			    = 12;
var TACTORORGANIZATIONALUNIT    = 13;
var TACTORAPPLICATIONSYSTEMTYPE = 14;
var TSIGNAL					    = 15;
var TEXCEPTION				    = 16;
var TSTATEMACHINE 			    = 17;
var TUSECASE					= 18;
var TPACKAGE					= 19;
var TPROFILE					= 20;
var TUMLMODEL				    = 21;
var TSTEREOTYPE				    = 22;
var TCONSTRAINT 				= 23;
var TCLASSIFIERINSTATE		    = 24; // Attention: No image for this type yet
var TCLASSIFIERROLE 			= 25; 
var TARTIFACT				    = 26;
var TCOMPONENT				    = 27;
var TNODE					    = 28;
var TSUBSYSTEM				    = 29;
var TCLASS					    = 30;
var TDIAGRAM	   			    = 31;
var TUML	   			        = 32;

var TEMPTY       = IMAGESPATH + "empty.gif";
var TJOIN        = IMAGESPATH + "join.gif";
var TJOINBOTTOM  = IMAGESPATH + "joinbottom.gif";
var TLINE        = IMAGESPATH + "line.gif";
var TPLUS        = IMAGESPATH + "plus.gif";
var TPLUSBOTTOM  = IMAGESPATH + "plusbottom.gif";
var TMINUS       = IMAGESPATH + "minus.gif";
var TMINUSBOTTOM = IMAGESPATH + "minusbottom.gif";

var ROOTIMAGE 		= "root.gif"
var FOLDERIMAGE 	= "folder.gif"
var FOLDEROPENIMAGE = "folderopen.gif"
var MODELIMAGE 		= "model.gif"
var OBJOCCIMAGE 	= "obj_occur_1.gif"
var OBJASSIGNIMAGE 	= "obj_assign.gif"
var OBJINFOIMAGE 	= "obj_info.gif"

//UML images
var ACTIVITYGRAPHIMAGE 			    = "activitygraph.gif"
var ACTORIMAGE 		   			    = "actor.gif"
var ACTORPERSONIMAGE	   			= "actorperson.gif"
var ACTORPOSITIONIMAGE  			= "actorposition.gif"
var ACTORGROUPIMAGE	   			    = "actorgroup.gif"
var ACTORORGANIZATIONALUNITIMAGE    = "actororganizationalunit.gif"
var ACTORAPPLICATIONSYSTEMTYPEIMAGE = "actorapplicationsystemtype.gif"
var SIGNALIMAGE					    = "signal.gif"
var EXCEPTIONIMAGE				    = "exception.gif"
var STATEMACHINEIMAGE 			    = "statemachine.gif"
var USECASEIMAGE					= "usecase.gif"
var PACKAGEIMAGE					= "package.gif"
var PROFILEIMAGE					= "profile.gif"
var UMLMODELIMAGE				    = "uml_model.gif"
var STEREOTYPEIMAGE				    = "stereotype.gif"
var CONSTRAINTIMAGE 				= "constraint.gif"
var CLASSIFIERINSTATEIMAGE		    = "classifierinstate.gif" // Attention: No image for this type yet
var CLASSIFIERROLEIMAGE 			= "classifierrole.gif"
var ARTIFACTIMAGE				    = "artifact.gif"
var COMPONENTIMAGE				    = "component.gif"
var NODEIMAGE					    = "node.gif"
var SUBSYSTEMIMAGE				    = "subsystem.gif"
var CLASSIMAGE					    = "class.gif"
var DIAGRAMIMAGE		            = "diagram.gif"
var UMLIMAGE		                = "uml.gif"

var TIcons = new Array(	"",
						IMAGESPATH + ROOTIMAGE, //TROOT 
						IMAGESPATH + FOLDERIMAGE, //TFOLDER 
						IMAGESPATH + MODELIMAGE, //TMODEL 
						IMAGESPATH + OBJOCCIMAGE, //TOBJOCC 
						IMAGESPATH + OBJASSIGNIMAGE, //TOBJASSIGN 
						IMAGESPATH + OBJINFOIMAGE, //TOBJINFO 
						IMAGESPATH + "", //Dummy-Eintrag 
						IMAGESPATH + ACTIVITYGRAPHIMAGE, //TACTIVITYGRAPH
						IMAGESPATH + ACTORIMAGE, //TACTOR
						IMAGESPATH + ACTORPERSONIMAGE, //TACTORPERSON
						IMAGESPATH + ACTORPOSITIONIMAGE, //TACTORPOSITION
						IMAGESPATH + ACTORGROUPIMAGE, //TACTORGROUP
						IMAGESPATH + ACTORORGANIZATIONALUNITIMAGE, //TACTORORGANIZATIONALUNIT
						IMAGESPATH + ACTORAPPLICATIONSYSTEMTYPEIMAGE, //TACTORAPPLICATIONSYSTEMTYPE
						IMAGESPATH + SIGNALIMAGE, //TSIGNAL
						IMAGESPATH + EXCEPTIONIMAGE, //TEXCEPTION
						IMAGESPATH + STATEMACHINEIMAGE, //TSTATEMACHINE
						IMAGESPATH + USECASEIMAGE, //TUSECASE
						IMAGESPATH + PACKAGEIMAGE, //TPACKAGE
						IMAGESPATH + PROFILEIMAGE, //TPROFILE
						IMAGESPATH + UMLMODELIMAGE, //TUMLMODEL
						IMAGESPATH + STEREOTYPEIMAGE, //TSTEREOTYPE
						IMAGESPATH + CONSTRAINTIMAGE, //TCONSTRAINT
						IMAGESPATH + CLASSIFIERINSTATEIMAGE, //TCLASSIFIERINSTATE // Attention: No image for this type yet
						IMAGESPATH + CLASSIFIERROLEIMAGE, //TCLASSIFIERROLE
						IMAGESPATH + ARTIFACTIMAGE, //TARTIFACT
						IMAGESPATH + COMPONENTIMAGE, //TCOMPONENT
						IMAGESPATH + NODEIMAGE, //TNODE
						IMAGESPATH + SUBSYSTEMIMAGE, //TSUBSYSTEM
						IMAGESPATH + CLASSIMAGE, //TCLASS
						IMAGESPATH + DIAGRAMIMAGE, //TDIAGRAM
						IMAGESPATH + UMLIMAGE); //TUML
						
var TOIcons = new Array("",
						IMAGESPATH + ROOTIMAGE, //TROOT 
						IMAGESPATH + FOLDEROPENIMAGE, //TFOLDER 
						IMAGESPATH + MODELIMAGE, //TMODEL 
						IMAGESPATH + OBJOCCIMAGE, //TOBJOCC 
						IMAGESPATH + OBJASSIGNIMAGE, //TOBJASSIGN 
						IMAGESPATH + OBJINFOIMAGE, //TOBJINFO
						IMAGESPATH + "", //Dummy-Eintrag 
						IMAGESPATH + ACTIVITYGRAPHIMAGE, //TACTIVITYGRAPH
						IMAGESPATH + ACTORIMAGE, //TACTOR
						IMAGESPATH + ACTORPERSONIMAGE, //TACTORPERSON
						IMAGESPATH + ACTORPOSITIONIMAGE, //TACTORPOSITION
						IMAGESPATH + ACTORGROUPIMAGE, //TACTORGROUP
						IMAGESPATH + ACTORORGANIZATIONALUNITIMAGE, //TACTORORGANIZATIONALUNIT
						IMAGESPATH + ACTORAPPLICATIONSYSTEMTYPEIMAGE, //TACTORAPPLICATIONSYSTEMTYPE
						IMAGESPATH + SIGNALIMAGE, //TSIGNAL
						IMAGESPATH + EXCEPTIONIMAGE, //TEXCEPTION
						IMAGESPATH + STATEMACHINEIMAGE, //TSTATEMACHINE
						IMAGESPATH + USECASEIMAGE, //TUSECASE
						IMAGESPATH + PACKAGEIMAGE, //TPACKAGE
						IMAGESPATH + PROFILEIMAGE, //TPROFILE
						IMAGESPATH + UMLMODELIMAGE, //TUMLMODEL
						IMAGESPATH + STEREOTYPEIMAGE, //TSTEREOTYPE
						IMAGESPATH + CONSTRAINTIMAGE, //TCONSTRAINT
						IMAGESPATH + CLASSIFIERINSTATEIMAGE, //TCLASSIFIERINSTATE // Attention: No image for this type yet
						IMAGESPATH + CLASSIFIERROLEIMAGE, //TCLASSIFIERROLE
						IMAGESPATH + ARTIFACTIMAGE, //TARTIFACT
						IMAGESPATH + COMPONENTIMAGE, //TCOMPONENT
						IMAGESPATH + NODEIMAGE, //TNODE
						IMAGESPATH + SUBSYSTEMIMAGE, //TSUBSYSTEM
						IMAGESPATH + CLASSIMAGE, //TCLASS
						IMAGESPATH + DIAGRAMIMAGE, //TDIAGRAM
						IMAGESPATH + UMLIMAGE); //TUML

var lastId = 1;	

var browser_name    = navigator.appName;
var browser_version = navigator.appVersion;
var user_agent      = navigator.userAgent;					

function isUMLNode(type) {
	var result =
		   type == TACTIVITYGRAPH || type == TACTOR || type == TACTORPERSON || 
		   type == TACTORPOSITION || type == TACTORGROUP || type == TACTORORGANIZATIONALUNIT || 
		   type == TACTORAPPLICATIONSYSTEMTYPE || type == TSIGNAL || type == TEXCEPTION || 
		   type == TSTATEMACHINE || type == TUSECASE || type == TPACKAGE || type == TPROFILE || 
		   type == TUMLMODEL || type == TSTEREOTYPE || type == TCONSTRAINT || type == TCLASSIFIERINSTATE || 
		   type == TCLASSIFIERROLE || type == TARTIFACT || type == TCOMPONENT || type == TNODE || 
		   type == TSUBSYSTEM || type == TCLASS || type == TDIAGRAM || type == TUML;
    return result;
}

var is_hierarchy;

function setIsHierarchy(hierarchy) {
	is_hierarchy = hierarchy;
}

function setIcon(node, new_icon) {
	node.icon = new_icon;
}

function setOpenIcon(node, new_openIcon) {
	node.openIcon = new_openIcon;
}

function getBrowserName() {
	   
	if (browser_name.substring(0,9) == "Microsoft") {
		browser_name = "MSIE";
	} else if (browser_name.substring(0,8) == "Netscape") {
		browser_name = "NN";
	} else if (navigator.userAgent.indexOf('Opera') != -1) {
	    browser_name = "Opera";
	} 
	return browser_name;
}

function getBrowserVersion() {      
	if (browser_name == "MSIE") {
		var pos = user_agent.indexOf('MSIE');
		if (pos > -1) {
			browser_version = user_agent.substring(pos + 5);
			var pos = browser_version.indexOf(';');
			var browser_version = browser_version.substring(0,pos);
		}
	} 
	if (browser_name == "NN") {
		var browser_version = user_agent.substring(8);
		var pos = browser_version.indexOf(' ');
		var browser_version = browser_version.substring(0, pos); 
	}
	if (browser_name == "NN" && parseInt(navigator.appVersion) >= 5) {
		var pos = user_agent.lastIndexOf('/');
		var browser_version = user_agent.substring(pos + 1);
	}
	return browser_version;	
}

function TaddChild(text, url, target, type) {
	var nod = new TNode(text, url, target, type);
	nod.parent	= this;
	if(this.firstChild == null) {
		this.firstChild = nod;
		this.lastChild = nod;
	} else {
		this.lastChild.next = nod;
		this.lastChild = nod;
	}
	return nod;
}

function toggle(nodeId) {
	var obj = document.getElementById("U"+nodeId);
	var nod = TNodes[nodeId];
	nod.expanded = !nod.expanded;
	if (nod.expanded) {
		obj.style.display="";
		if (nod.type == TFOLDER || isUMLNode(nod.type)) {
    	    document.getElementById("I"+nodeId).src=nod.openIcon;
			var srcImg;
			if (nod.firstChild==null) {
				srcImg = (nod.next==null) ? TJOINBOTTOM : TJOIN;
			} else {
				srcImg = (nod.next==null) ? TMINUSBOTTOM : TMINUS;
			}
			document.getElementById("P"+nodeId).src=srcImg;
		}
	} else {	    
		obj.style.display="none"; 	
		if (nod.type == TFOLDER || isUMLNode(nod.type)) {
			document.getElementById("I"+nodeId).src=nod.icon;
			var srcImg;
			if (nod.firstChild==null) {
				srcImg = (nod.next==null) ? TJOINBOTTOM : TJOIN;
			} else {
				srcImg = (nod.next==null) ? TPLUSBOTTOM : TPLUS;
			}
			document.getElementById("P"+nodeId).src=srcImg;
		}
	}
}

function TgenTree(prefix, parentIsLast) {
	var vis = (this.expanded) ? '""' : "none";
	var treeContent = new Array();
	
	if (this.next == null) {
		if (this.type != TROOT) {
			var src_p = (this.type == TFOLDER || isUMLNode(this.type)) ? ((this.expanded) ? TMINUSBOTTOM : TPLUSBOTTOM) : TJOINBOTTOM;
			treeContent.push(prefix + this.TgenSpan(this.TgenImgIdP(src_p)));
	  		lastId = this.id;
		}
	} else {
		var src_m = ((this.type == TFOLDER || isUMLNode(this.type)) && this.firstChild!=null) ? ((this.expanded) ? TMINUS : TPLUS) : TJOIN;				
		treeContent.push(prefix + this.TgenSpan(this.TgenImgIdP(src_m)));
	}
	
	//******************
	//if (this.type == TFOLDER || this.type == TROOT) {
	//******************
	
	if (this.type == TFOLDER) {
		treeContent.push(this.TgenSpan( (this.expanded) ? this.TgenImgIdI(this.openIcon) : this.TgenImgIdI(this.icon) ));
	}
	
	if (isUMLNode(this.type)) {
		treeContent.push(this.TgenImgIdI(this.icon));
	}
	
	if (this.url == "") {
		if (isUMLNode(this.type)) {
			treeContent.push(this.text);
		} else {
	 		treeContent.push(this.TgenImg(this.icon) + this.text);
		}
	} else {
		treeContent.push("<span id='H"+this.id+"' class='jstree'>");
	    if (this.type == TMODEL || this.type == TOBJOCC || this.type == TOBJASSIGN || this.type == TOBJINFO) {
			treeContent.push(this.TgenImg(this.icon));
		}
		treeContent.push(this.TgenElement());
		treeContent.push("</span>");
	}
	
	if (this.type != TROOT) {
		treeContent.push("<br>");
	}
	
if (this.type == TFOLDER || this.type == TROOT || isUMLNode(this.type)) {
		treeContent.push("<span id='U"+this.id+"' style='display:"+vis+"'>");
		var nod = this.firstChild;
		var mypref = "";
		if (this.type == TFOLDER || isUMLNode(this.type)) { mypref = prefix + this.TgenImg( (this.next==null) ? TEMPTY : TLINE ); }
		while (nod != null) {
			treeContent.push(nod.TgenTree(mypref, (this.next!=null)));
			nod = nod.next;
		}
		treeContent.push("</span>");
	}
	return treeContent.join("");
}

function TgenSpan(dat) { return "<span id='F"+"U"+this.id+"' style='display:\"\"' onClick='toggle("+this.id+");'>" + dat+"</span>"; }
function TgenImage(src) { return "<img class='jstree' src='" + src  + "'>"; }
function TgenImageIdI(src) { return "<img class='jstree' src='" + src  + "' id=I" + this.id + ">"; }
function TgenImageIdP(src) { return "<img class='jstree' src='" + src  + "' id=P" + this.id + ">"; }
function TgenElement() { return (this.url == " ") ? (this.text==" ")?"":this.text : "<a onClick='highlight("+this.id+");' class='jstree' href='"+this.url+"' target='"+this.target+"'>"+this.text+"</a>"; }


function closeTree() {
	for (var i=2; i<TNodes.length; i++) {
		if (TNodes[i].type == TFOLDER || TNodes[i].type == TROOT || isUMLNode(TNodes[i].type)) {
			if (TNodes[i].expanded) {
				toggle(TNodes[i].id);
			}			
		}
	}
}

function highlight(nodeId) {
	var span = document.getElementById("H" + nodeId);
	var old_span = document.getElementById("H" + highlightNodeId);
	if(old_span != null) {
		old_span.className = "jstree";
	}
	if(span != null) {
		span.className = "highlight";
		highlightNodeId = nodeId;
	}
	
}

function findNode(nodeId) {
	// Erwarte Modell, kein Folder
	var nod = TNodes[nodeId].parent;
	while (nod != null) {
		if (!nod.expanded) {		
			toggle(nod.id);
		}
		nod = nod.parent;
	}
}

function scrollToNode(nodeId) {
	var obj = "P"+nodeId;
	//var node_parent = TNodes[nodeId].parent.id;
	document.getElementById(obj).scrollIntoView("true");
}

function scrollToNode_NN6(nodeId) {
	var obj = "P"+nodeId;
	var x = 0;
	var y = document.getElementById(obj).offsetTop;
	window.scrollTo(x, y);
}

function findAndScrollTo(nodeId) {
	findNode(nodeId);
	browser_name = getBrowserName();
	browser_version = getBrowserVersion();
	if (browser_name == "NN" && parseInt(browser_version) == 6) {
		scrollToNode_NN6(nodeId);
	} else {
		scrollToNode(nodeId);
	}
}

function getNodeById(nodeId) {
	return TNodes[nodeId].id;
}

function TwriteTree() {
	document.write("<style>");
	document.write("span.jstree {background-color:#FFF; line-height:16px; margin:0px; padding 0px 2px;}");
	document.write("span.highlight {background-color:#006; line-height:16px; margin:0px; padding 0px 2px;}");
	document.write("span.jstree a.jstree {text-decoration: none; font-size:9pt; font-family: Arial; font-weight: 700; color: grey;}");
	document.write("span.highlight a.jstree {text-decoration: none; font-size:9pt; font-family: Arial; font-weight: 700; color:white; }");
	document.write("img.jstree { border-width : 0px; vertical-align : middle; }");
	document.write("div.jstree { line-height: 6pt;  font-size : 9pt; font-family : Arial; }");
	document.write("</style>");
	if (parent.frames.length == 0) {
		document.write("<pre><div class='jstree' style='position: absolute; left: 0px; top: 58px;'>"+this.TgenTree("", true)+"</div></pre>");
	} else {
		document.write("<pre><div class='jstree'>"+this.TgenTree("", true)+"</div></pre>");
	}
}

function TNode(text, url, target, type) {
	//Eigenschaften
	this.text = text;
	this.type = type;
	this.url = url ? url : "";
	this.target =  target ? target : "";
	if (parent.frames.length == 0) {
		this.target = "_self";
	}
	if (is_hierarchy) {
		this.icon = IMAGESPATH + MODELIMAGE;
		this.openIcon = IMAGESPATH + MODELIMAGE;
	} else {
		this.icon = TIcons[type];
		this.openIcon = TOIcons[type];
	}
	this.id = TNodeID++;
	TNodes[this.id] = this;
	// Zustand
	this.expanded	= true;
	//Struktur
	this.parent		= null;
	this.firstChild	= null;
	this.lastChild	= null;
	this.next		= null;
	//Funktionen	
	this.TaddChild = TaddChild;
	this.TgenTree = TgenTree;
	this.TgenImg = TgenImage;
	this.TgenImgIdI = TgenImageIdI;
	this.TgenImgIdP = TgenImageIdP;
	this.TgenElement = TgenElement;
	this.TgenSpan = TgenSpan;
	this.TwriteTree = TwriteTree;
	return this;
}

function selectNodeOfDisplayedModel(modId) {
	for (var i=0; i<TNodes.length; i++) {
		if ((TNodes[i] != undefined) && (TNodes[i] != null)) {
			if (TNodes[i].url == modId) {
				findAndScrollTo(TNodes[i].id);
				highlight(TNodes[i].id);
			}
		}
	}
}
