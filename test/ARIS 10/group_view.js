function writeTreeRoot_group_view() {
    jsout(("var nod_root = " + "new TNode(\' \', \' \', \'\', TROOT);"));    
}


function writeTreeGroups_group_view() {
	for ( var i = 0 ; i < ogroups.length; i++ ){
		var ogroup = ogroups[i];
		jsout(("//group" + ogroup.GUID()));
		bfirst = true;
		recprintgroup(ogroup, bfirst);  
		            
	}  
}

function writeTreeModels_group_view() {
	for ( var i = 0 ; i < omodels.length ; i++ ){
		var omodel = omodels[i];
		jsout(("//model" + omodel.GUID()));
		writeTreeNode(makenodeid(omodel.GUID()), "nod_root", omodel.Name(g_nloc), makefilename(omodel), "model", "TMODEL");             
	}
}

function recprintgroup(ogroup, bfirst) {
	var osubgroup = null; 
    	var omodel = null; 
    	var oshortcut = null; 
    	var lkindnum = 0; 

    	var var_nod_child = makenodeid(ogroup.GUID());
    	var var_nod_papa = makenodeid(ogroup.Parent().GUID());

    	if (bfirst) {
		writeTreeNode(makenodeid(ogroup.GUID()), "nod_root", ogroup.Name(g_nloc), " ", "", "TFOLDER");
    	} else {
		writeTreeNode(var_nod_child, var_nod_papa, ogroup.Name(g_nloc), " ", "", "TFOLDER");
    	}

	bfirst = false;
		
    	var srootnode = var_nod_child;
    	var osubgroups = ogroup.Childs();   
    	var omodels = ogroup.ModelList();
    	var oshortcuts = ogroup.Shortcuts();
    
    	osubgroups = ArisData.sort(osubgroups, Constants.AT_NAME, Constants.SORT_TYPE, g_nloc);
    	omodels = ArisData.sort(omodels, Constants.AT_NAME, Constants.SORT_TYPE, g_nloc);
    	oshortcuts = ArisData.sort(oshortcuts, Constants.AT_NAME, Constants.SORT_TYPE, g_nloc);
    
    	// handle subgroups of current group
    	for ( var i = 0 ; i < osubgroups.length; i++ ){
        	osubgroup = osubgroups[i];
		if (!isGroupWritten(osubgroup, foundGroups)) { 
			setGroup(osubgroup);       
        		recprintgroup(osubgroup, bfirst);
		}
    	}

    	// handle models in current group
    	for ( var j = 0 ; j < omodels.length; j++ ){
        	omodel = omodels[j];
        	writeTreeNode(makenodeid(omodel.GUID()), srootnode, omodel.Name(g_nloc), makefilename(omodel), "model", "TMODEL");
    	}

    	// handle model shortcuts
    	for ( var k = 0 ; k < (oshortcuts.length - 1)+1 ; k++ ){
        	oshortcut = oshortcuts[k];
        	lkindnum = oshortcut.KindNum();
        	if (lkindnum == Constants.CID_MODEL) {
                    writeTreeNode(makenodeid(oshortcut.GUID()), makenodeid(ogroup.GUID()), oshortcut.Name(g_nloc), makefilename(oshortcut), "model", "TMODEL");
        	}
    	}
	
    
}
