(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 275,
	height: 225,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Tete = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Tete
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#186800").ss(3,1,1).p("ABskZIBAgPQBGgQAbgEQBugPBMADQBKADAjAGQAyAHBCAWQA0ARAsAnQAmAjACARQABAOgBAEQgCAGgHgBQgMgCgYgIQAsASAhAXQAnAaAzA4QAwA1AFATQAQBIgZA8QgzB5jKAnQjfAqopgRQoIgQikgnQh+gehTh6QgdgrgQgtQgOgmAEgMQAFgTAHgPIAFgLQAnhAA7gtQAqggAogQQAJgDAQgDQgUAAgEgCQgIgEAEgSQAEgRALgHQAOgKBAgWQBLgZA7gIQAtgGBEgMQA5gIA3ACQBUAEAgADQA3AFAeAJQAtANAwAc");
	this.shape.setTransform(116.4,76.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2BA005").s().p("AgvFXQoIgQikgnQh+gehTh6QgdgrgQgtQgOgmAEgMQAFgTAHgPIAFgLQAnhAA7gtQAqggAogQQAJgDAQgDQgUAAgEgCQgIgEAEgSQAEgRALgHQAOgKBAgWQBLgZA7gIQAtgGBEgMQA5gIA3ACIB0AHQA3AFAeAJQAtANAwAcICjAEIBAgPQBGgQAbgEQBugPBMADQBKADAjAGQAyAHBCAWQA0ARAsAnQAmAjACARQABAOgBAEQgCAGgHgBQgMgCgYgIQAsASAhAXQAnAaAzA4QAwA1AFATQAQBIgZA8QgzB5jKAnQigAelIAAQiEAAicgFg");
	this.shape_1.setTransform(116.4,76.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#186800").ss(3,1,1).p("ABtkLIAvghQA1giAbgEQAZgDBRgFQBigFAzACQArACA2ABQAqADA9AVQAyAQAeApQAVAdADAXQAAACALAnQAIAcgGgBQgMgCgYgIQAsASAhAXQAnAaAzA4QAwA1AFATQAOBBgiBEQg+B7jLAnQjfAqojgRQoCgQikgnQh+gehNh7QgbgsgPgtQgMgnAEgOQAFgRAHgPIAFgLQAnhAA7gtQAqggAogQQAJgDAQgDQgUAAgEgCQgHgDAKgXQASgnABgDQAPgwABgBQASgbA6gIQA/gJBrgDQBkgEBGADQCHAGA7ASQAcAIAkAfQASAQAMAN");
	this.shape_2.setTransform(116.3,75.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2BA005").s().p("Ag/FoQoCgQikgnQh+gehNh7QgbgsgPgtQgMgnAEgOQAFgRAHgPIAFgLQAnhAA7gtQAqggAogQQAJgDAQgDQgUAAgEgCQgHgDAKgXIATgqIAQgxQASgbA6gIQA/gJBrgDQBkgEBGADQCHAGA7ASQAcAIAkAfQASAQAMANICjAEIAvghQA1giAbgEQAZgDBRgFQBigFAzACIBhADQAqADA9AVQAyAQAeApQAVAdADAXIALApQAIAcgGgBQgMgCgYgIQAsASAhAXQAnAaAzA4QAwA1AFATQAOBBgiBEQg+B7jLAnQifAelGAAQiCAAibgFg");
	this.shape_3.setTransform(116.3,75.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#186800").ss(3,1,1).p("ABtjrQgEgWgCgcQgEg2AIgaQAMgiBqgDQA7gBBpAIQBLADByAQQCCATBCAWQAsAPgMBDQgDASgHAgQgEAaAHAKQAaAggDAOQgBAKgNgDQgMgCgYgIQAsATAhAWQAnAaAzA5QAwA0AFATQAOBAgmBKQhCB+jKAnQjfAqoXgTQnygRingoQh+gehWh9QgfgtgRgtQgPgoAEgNQAFgTAHgPIAFgJQAnhAA7guQAqggAogQQAJgDAQgCQgSAAgGgCQgYgKANgXQABgBAYgdQAHgJgGgVQgKgagEgNQgQgxA0gHQBhgOB9gNQCkgRA5ADQB6AFAQABQBOAGAdAIQAcAJgDBAQgBAggHAf");
	this.shape_4.setTransform(116.3,72.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2BA005").s().p("Ag6GNQnygRingoQh+gehWh9QgfgtgRgtQgPgoAEgNQAFgTAHgPIAFgJQAnhAA7guQAqggAogQQAJgDAQgCQgSAAgGgCQgYgKANgXIAZgeQAHgJgGgVIgOgnQgQgxA0gHQBhgOB9gNQCkgRA5ADICKAGQBOAGAdAIQAcAJgDBAQgBAggHAfICjAEQgEgWgCgcQgEg2AIgaQAMgiBqgDQA7gBBpAIQBLADByAQQCCATBCAWQAsAPgMBDIgKAyQgEAaAHAKQAaAggDAOQgBAKgNgDQgMgCgYgIQAsATAhAWQAnAaAzA5QAwA0AFATQAOBAgmBKQhCB+jKAnQiaAdkwAAQiIAAikgGg");
	this.shape_5.setTransform(116.3,72.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#186800").ss(3,1,1).p("ABskNIAvghQA1giAbgEQAZgDBRgFQBigFAzACQArACA2ABQAqADA9AVQAxAQAdAqQAMARAOAiQAKAaAFAUQAFAXgHgBQgMgCgYgIQAsASAhAXQAnAaAzA4QAwA1AFATQAQBIgbA/Qg1B9jKAnQjgAqomgPQoHgPijgnQh+gehTh/QgdgtgQguQgOgoAEgOQAFgRAHgPIAFgLQAnhAA7gtQAqggAogQQAJgDAQgDQgUAAgEgCQgHgDAHgQQAJgTACgIQAKgsALgQQAYgmA6gIQA/gJBrgDQBkgEBGADQCHAGA7ASQAcAIAkAfQASAQAMAN");
	this.shape_6.setTransform(116.4,76.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2BA005").s().p("AgxFsQoHgPijgnQh+gehTh/QgdgtgQguQgOgoAEgOQAFgRAHgPIAFgLQAnhAA7gtQAqggAogQQAJgDAQgDQgUAAgEgCQgHgDAHgQQAJgTACgIQAKgsALgQQAYgmA6gIQA/gJBrgDQBkgEBGADQCHAGA7ASQAcAIAkAfQASAQAMANICjAEIAvghQA1giAbgEQAZgDBRgFQBigFAzACIBhADQAqADA9AVQAxAQAdAqQAMARAOAiQAKAaAFAUQAFAXgHgBQgMgCgYgIQAsASAhAXQAnAaAzA4QAwA1AFATQAQBIgbA/Qg1B9jKAnQikAflVAAQh8AAiRgEg");
	this.shape_7.setTransform(116.4,76.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},32).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// Yeux
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#186800").ss(3,0,1).p("AFAB+QgIghghgjQgqgshCgWQhHgahcgBQiJgDhuBPQgiAZgbAfIgVAZQABgJAFgOQAIgdAPgcQAuhYBdgvQBhgxBnAIQBoAJBGA/QAuArAeBHQAQAnAHAjgAFCCLIAAgDIgCgK");
	this.shape_8.setTransform(163.5,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2BA005").s().p("AEYA/QgqgshCgWQhHgahcgBQiKgDhtBPQgjAZgbAfIgUAZQABgJAFgOQAHgdAPgcQAvhYBdgvQBhgxBmAIQBpAJBFA/QAvArAeBHQAQAnAHAjQgIghghgjg");
	this.shape_9.setTransform(163.5,9.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#186800").ss(3,0,1).p("AlDB3QAEgLAFgQQAOghAQgeQA3heBPglQBhgtBmANQBmAMBIA/QA7A0AbBMQANAoACAdQgKgqgsgrQhZhUirgIQiGgGhxBQQgkAagcAfg");
	this.shape_10.setTransform(73.3,10.4,1,1,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2BA005").s().p("AEOA1QhZhUirgIQiGgGhxBQQgkAagcAfIgWAbIAJgbQAOghAQgeQA3heBOglQBigtBmANQBnAMBHA/QA7A0AaBMQAOAoABAdQgKgqgrgrg");
	this.shape_11.setTransform(73.3,10.4,1,1,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#186800").ss(3).p("AkuC5QAiAOAxAPQBjAeBRAGQDCAPBWgbQAggKACgGIgFgFQARgPASgdQAkg6AEhDQADg2gYg7QgWg0gjglQgkglg5gcQhAgfg+gEQhBgEhOAQQhRARglAdQg1ApgZAfQgqA1gJBEQgJBLAXBBQAMAgAOAQg");
	this.shape_12.setTransform(163.3,30.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.008)").s().p("AgnD6QhRgGhjgeQgxgPgigOQgOgQgMggQgXhBAJhLQAJhEAqg1QAZgfA1gpQAlgdBRgRQBOgQBBAEQA+AEBAAfQA5AcAkAlQAjAlAWA0QAYA7gDA2QgEBDgkA6QgSAdgRAPIAFAFQgCAGggAKQg3AShlAAQg4AAhEgGg");
	this.shape_13.setTransform(163.3,30.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#186800").ss(3).p("AEvC5QgiAOgxAPQhjAehRAGQjCAPhWgbQgggKgCgGIAFgFQgRgPgSgdQgkg6gEhDQgDg2AYg7QAWg0AjglQAkglA5gcQBAgfA+gEQBBgEBOAQQBRARAlAdQA1ApAZAfQAqA1AJBEQAJBLgXBBQgMAggOAQg");
	this.shape_14.setTransform(73.7,30.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.008)").s().p("AjwDuQgggKgCgGIAFgFQgRgPgSgdQgkg6gEhDQgDg2AYg7QAWg0AjglQAkglA5gcQBAgfA+gEQBBgEBOAQQBRARAlAdQA1ApAZAfQAqA1AJBEQAJBLgXBBQgMAggOAQQgiAOgxAPQhjAehRAGQhEAGg4AAQhlAAg3gSg");
	this.shape_15.setTransform(73.7,30.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#186800").ss(3,0,1).p("AFZCyQgLgsg3gpQhdhGixgGQjTgIhcA/QgdAUgNAYIgIAVQgEg0AQg7QAfh1BhglQBzgsCFAHQCEAHBIAzQBGAxATB1QAKA9gCA6g");
	this.shape_16.setTransform(163.5,16.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2BA005").s().p("AEXBXQhdhFixgHQjTgHhcA/QgdATgNAZIgIAUQgEgzAQg8QAfh0BhglQBzgtCFAIQCEAHBIAzQBGAxATB1QAKA8gCA6QgLgsg3gpg");
	this.shape_17.setTransform(163.5,16.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#186800").ss(3,0,1).p("AlZCEQgDgxANg3QAZhuBOgkQBjgtCaAKQCcAKBWA4QBCArANBnQAHA1gGAsQgUgjg3gjQhthHiqgGQiIgEhxA/QgjAUgcAYg");
	this.shape_18.setTransform(73.2,16.6,1,1,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2BA005").s().p("AEMBWQhthHiqgGQiIgEhxA/QgjAUgcAYIgWAUQgDgxANg3QAZhuBOgkQBjgtCaAKQCcAKBWA4QBCArANBnQAHA1gGAsQgUgjg3gjg");
	this.shape_19.setTransform(73.2,16.6,1,1,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#186800").ss(3).p("AEvC5QgiAOgxAPQhjAehRAGQjCAPhWgbQgggKgCgGIAFgFQgRgPgSgdQgkg6gEhDQgDg2AYg7QAWg0AjglQAkglA5gcQBAgfA+gEQBBgEBOAQQBRARAlAdQA1ApAZAfQAqA1AJBEQAJBLgXBBQgMAggOAQg");
	this.shape_20.setTransform(73.7,31.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#186800").ss(3,0,1).p("AE5CbQgQAdgmAIQgeAFgegIQhlghg4gMQhhgWhPASQh9AdgxgZQgQgIgFgNIgDgLQgGg0AJg8QARh6BKgvQAkgWBDgBQBXgCDtAZQCJAPAJCZQADAvgLA5QgJAqgFAKg");
	this.shape_21.setTransform(163.3,24.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2BA005").s().p("ADHC9Qhlghg4gMQhhgWhPASQh9AdgxgZQgQgIgFgNIgDgLQgGg0AJg8QARh6BKgvQAkgWBDgBQBXgCDtAZQCJAPAJCZQADAvgLA5QgJAqgFAKQgQAdgmAIQgLACgMAAQgSAAgTgFg");
	this.shape_22.setTransform(163.3,24.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#186800").ss(3,0,1).p("AlWCHQgJhGAShFQAjiPCHgGQBHgDBtAFQBjAGA1gFQCAgLAkCeQASBNgHBSQgQgHgygIQhlgQirgIQiGgGh5AMg");
	this.shape_23.setTransform(74.7,22.7,1,1,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2BA005").s().p("AEWCNQhlgQirgIQiGgGh5AMIhdAMQgJhGAShFQAjiPCHgGQBHgDBtAFQBjAGA1gFQCAgLAkCeQASBNgHBSQgQgHgygIg");
	this.shape_24.setTransform(74.7,22.7,1,1,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnA7QgRgEgVgCIgQgBQAAgJADgOQAHgbASgYQAUgdASgPQAJgHAFgCIAOAEQATAEAQAHQAnAQATAUQgPALgZAaIgQASQgPAVgNAXQgWgJgbgHg");
	this.shape_25.setTransform(63.7,29.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#003333").s().p("AgDDJQg8gCgygbQgZgOgfgbQgqglgFhdQgBglAYgsQAQgfAYgZQAXgZApgSQAwgWArABQA0ABAiANQAmAPAgAjQAmAqAMAiQAQAvgMBKQgFAmgeAhQgYAbgpATQgzAXg5AAIgHAAg");
	this.shape_26.setTransform(73.2,35.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgnA7QgSgFgUgCIgRAAQAAgJAFgOQAGgcASgYQAUgdASgOQAJgHAFgBIAOACQAUAFAPAHQAnAQATAUQgPAMgZAZIgQATQgJAMgKARIgJAPQgVgLgcgGg");
	this.shape_27.setTransform(153.3,28.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#003333").s().p("AhuCyQgpgTgZgbQgeghgFgmQgMhLAQguQAMgiAmgqQAggjAmgPQAigNA0gBQArgBAwAWQApASAXAZQAYAZARAfQAYAsgCAlQgFBdgqAlQggAcgYANQgyAbg8ACIgHAAQg5AAgygXg");
	this.shape_28.setTransform(163.5,35.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#186800").ss(3).p("AEbCgQghAOgyAPQhjAehQAGQjCAPhXgbQgfgKgCgHIAEgEQgHgNgIgaQgPg1gEhCQgFhLAGgsQAIhAAdgfQAYgZBSAXQBqAeAigCQAkgCBdgwQBMgnAcAVQA2ApAZAgQAqA0AIBFQAKBLgYBAQgMAggOARg");
	this.shape_29.setTransform(161.4,35.7,1,1,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AkEDVQgfgKgCgHIAEgEQgHgNgIgaQgPg1gEhCQgFhLAGgsQAIhAAdgfQAYgZBSAXQBqAeAigCQAkgCBdgwQBMgnAcAVQA2ApAZAgQAqA0AIBFQAKBLgYBAQgMAggOARQghAOgyAPQhjAehQAGQhEAFg4AAQhlAAg4gRg");
	this.shape_30.setTransform(161.4,35.7,1,1,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#186800").ss(3).p("AEfChQghAOgyAPQhjAehQAGQjCAPhXgbQgfgKgCgHIAEgEQgJgNgKgbQgUg1gEhCQgEhDAJg0QAMg/AegfQAZgaBWAQQB1AVAcgCQAggCBcgoQBHgeAcAVQA2ApAZAgQAqA0AIBFQAKBLgYBAQgMAggOARg");
	this.shape_31.setTransform(75.2,35.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AkADWQgfgKgCgHIAEgEQgJgNgKgbQgUg1gEhCQgEhDAJg0QAMg/AegfQAZgaBWAQQB1AVAcgCQAggCBcgoQBHgeAcAVQA2ApAZAgQAqA0AIBFQAKBLgYBAQgMAggOARQghAOgyAPQhjAehQAGQhEAFg4AAQhlAAg4gRg");
	this.shape_32.setTransform(75.2,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{skewY:0,x:73.7,y:30.7}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_20},{t:this.shape_14,p:{skewY:180,x:163.3,y:31.9}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},32).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_20},{t:this.shape_14,p:{skewY:180,x:163.3,y:31.9}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).wait(1));

	// Calque 3
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#186800").ss(3).p("AisBgQA3h8AIgpIACgFQAEgFALgFQAhgOBVAEQBhAFAMAGQAHAEACAJQABAGAEASIAUBBQAOBDgdABQi3AFiPAEg");
	this.shape_33.setTransform(117.4,44.4,0.79,1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2BA005").s().p("AhthFIACgFQAEgFALgFQAhgOBVAEQBhAFAMAGQAHAEACAJIAFAYIAUBBQAOBDgdABIlGAJQA3h8AIgpg");
	this.shape_34.setTransform(117.4,44.4,0.79,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33}]}).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.2,-5.1,202.5,117.6);


(lib.mouche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Corps
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#59594D").s().p("AgNASQgHgIAAgKQAAgJAHgIQAGgIAHAAQAJAAAGAIIABACQAFAGAAAJQAAAKgGAIQgGAIgJAAQgHAAgGgIg");
	this.shape.setTransform(-0.6,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Ailes
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.698)").s().p("AifA9QgWgKADgUQACgTASgQQASgSAVgEQAVgFAiAFIBQAMQABgHATgSQASgSAggHQAggGATAIQATAIAIAZQANAjACARQADAbgSADQgUACgMgHQgLgHgPgOQgQgOgGgNQgHgMgTAHQgUAGgVgBQgUgBgOAKQgOALgYABQgZAAgJASQgJARgTAIQgJADgIAAQgMAAgNgGg");
	this.shape_1.setTransform(-0.8,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.698)").s().p("AgGBhQgagagSgpQgKgYgZgnQgOgiAUgQQAdgXATAAQAWgBAEAjQACAYgDARQgCARAAAbQABAcALAXQAOAXAIAIQALgPAAgWIAAgrQgBgTgMgTQgLgUgCgQQgDgbAjgUQAkgVAKAkQAKAlgUBGQgSBCgVAZQgHAIgJAAQgOAAgQgSg");
	this.shape_2.setTransform(-2.7,-11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.698)").s().p("Ah4BUQgcgKACgkQABgdARgWQAWggAZA9QAJAXANAKQAHAFAZAJQAaAJAIgCQAIACARgKQAagPAKgkQASg/AMgVQAUglASAuQAOAkgEAMQgCAegVAXQgVAWhbAUQgxALgkAAQgbAAgTgGg");
	this.shape_3.setTransform(-0.9,-9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.698)").s().p("AAyAPQgyg7g/A1Qg/A2gegjQgegiAhgJQAhgKAYAAQAXgBAUgKQAUgLAJABIAVAAQAKABgDgJIAfAJQAXAHAdAVQAcATAUgFQATgHAMAUQALAWgLAOQgVAJgUAAQgoAAgjgog");
	this.shape_4.setTransform(-0.6,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-6.9,36.1,13.6);


(lib.langue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		document.addEventListener("dblclick", jouer.bind(this));
		function jouer(){
			langue.play();
			bouche.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC3300").ss(3).p("AAlAAQAAAJgLAGQgLAIgPAAQgOAAgLgIQgLgGAAgJQAAgIALgHQALgHAOAAQAPAAALAHQALAHAAAIg");
	this.shape.setTransform(9.7,137.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("AgZAQQgLgHAAgJQAAgIALgHQALgHAOAAQAPAAALAHQALAHAAAIQAAAJgLAHQgLAGgPABQgOgBgLgGg");
	this.shape_1.setTransform(9.7,137.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC3300").s().p("AguA8QgLAAgCgFIgCgGQgBgEgEgGIgFgJIgDgOIgHgRQgDgOACgLQACgHACgDIAGgHIAEgGQACgDAFgCQANgFATAAIAfAAIAbAAQAQAAAKAEQAGADAFADQAEAEADAEQAFAHAEASQACAKgBAEQAAAEgFAJIgDAOIgFAIIgIAOQgGAJgFACQgEACgJAAg");
	this.shape_2.setTransform(9.1,134.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC3300").s().p("AAQCiQgQgDgdgNQgIgDgDgEQgGgHAFgGQgHgOABgeQABghgEgNIgMgcQgFgIgIgaIgKggQgKgjAGgUQACgIAHgLIAMgSQAEgHAEgCQADgCAKAAQAIABAVgCQASgBAJACQANABAWAKQARAHAJAIQARAOAEAeQADASgFAKQgCAHgIAHIgMAMQgJALgFAQQgEAKgEATQgEAOACAJQABAFAFAJQAQAfAMAiQAEALgBAHQgCAKgNAHQgPAHgRAAQgIAAgJgBg");
	this.shape_3.setTransform(7.3,126.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC3300").s().p("AgLEQQgKgDgDgEQgEgFAAgKIgHh2QgCgigDgSQgHgggCgRIgCgqQgDgWgNglQgOgogEgSQgIgqAOgpQAHgZAOgOQARgRAfgFQAvgJAdAZQASARAEAdQADAZgIAcQgGARgPAgQgQAggFAQQgKAdgDAlQgGBTAYCMQAEAbgJAKQgJAJgRAAIgGABQgJAAgLgEg");
	this.shape_4.setTransform(7.9,114.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC3300").s().p("AgMF+QgFgFAAgOIADiUQABg3gEgaQgCgNgJgqQgIgogHhFQgHhRgFggIgLg6QgFghAAgZQABhHAqgjQAOgMARgGQAMgEAJABQARACAMAOQAMAOAEAXQADAQAAAaQAAA8gHAnQgCAPgKAnQgIAjgDAUIgEA8QgCBHACAkIAIBcQAFA4gBAjIgBAmQAAAWAEAQQAEANAAAGQABAKgGAGQgEAFgKABIgRABQgNADgGAAIgCAAQgIAAgEgGg");
	this.shape_5.setTransform(7,103.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC3300").s().p("Ag6IJQgQgJgHgWQgFgPgCgaIgTkIIgBhcQAAirAHjMQADhmAMg2IACgFIgBgEQAAgFAGgJQASgbAcgRQAdgRAegDQAwgEAUAcQALAOADAYQAFApgPA3QgIAggUA+QgKAggLA0IgUBVQgJAjgUBEQgRA7gEAsQgCATAAA1QAABZACAvQAEBMAMA7IABAJQADABABACQAEAGADATQADASgCAGQgFAOgSAEQgKADgJAAQgOAAgKgGg");
	this.shape_6.setTransform(11.8,87.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC3300").s().p("AhRKwQg1kwAHkkQAHkhBBkvQAPhFAUgoQAbg5AugVQAqAkAUA7QARA2gEA+QgEAxgSBAIgjBvQhHDjgUDuQgTDxAlDqg");
	this.shape_7.setTransform(12.9,68.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Jambegauche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#186800").ss(3,1,1).p("AhuoDQAVgXBGgKQBHgMAuARQA+AXAqA6QA1BKgOBkQgSCCgTBRQgaBqgsBsQgsBtgHA4QgGAoAMA1QAFAVARA1IgzArQg/AshGgCQhdgCgwgiQgPgKgIgNIgGgKg");
	this.shape.setTransform(27.5,55.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2BA005").s().p("AhJIqQhdgCgwgiQgPgKgIgNIgGgKICFvoQAVgXBGgKQBHgMAuARQA+AXAqA6QA1BKgOBkQgSCCgTBRQgaBqgsBsQgsBtgHA4QgGAoAMA1QAFAVARA1IgzArQg9AqhDAAIgFAAg");
	this.shape_1.setTransform(27.5,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,-1.5,51.9,113.9);


(lib.Jambedroite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#186800").ss(3,1,1).p("ACtonQgigLgvgFQhcgKhCAeQhKAigwBBQgrA5gOBDQgNA/ADAwQADA7AbBDQAMAeAmBAQAlA+APAqQAeBSAFARQAOAvAEAzQABAMABAYQABAagCAmQgCAggHAVIANATQARAWAXAOQAeAVAcAKQAvARBIAGQAeADBLgSg");
	this.shape.setTransform(25.7,57.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2BA005").s().p("ACYI6QhIgGgvgRQgcgKgegVQgXgOgRgWIgNgTQAHgVACggQACgmgBgaIgCgkQgEgzgOgvQgFgRgehSQgPgqglg+QgmhAgMgeQgbhDgDg7QgDgwANg/QAOhDArg5QAwhBBKgiQBCgeBcAKQAvAFAiALIBURSQhCAPgfAAIgIAAg");
	this.shape_1.setTransform(25.7,57.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,54.5,117.2);


(lib.Interpoler10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#186800").ss(3,1,1).p("ACjm2QgvhEgXhtIgNhfIhiBdQhsBsgnBOQgwBdgKBnQgLBoAZCBQAWBpAvB4QAXA9AUAmIAMAnQAPA3ANBSQAWCEAEBFIAfAGQAmAGAaAAQApAAAxgGQADgPACgeQAEg9gEhQQgFiegPhGIgvjXQASgWAVghQArhBAPg5IAmidQgJgjgNgpQgZhQgRgYg");
	this.shape.setTransform(2.4,-17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2BA005").s().p("AAALBIgfgHQgEhEgWiEQgNhSgPg3IgMgnQgUgngXg8Qgvh4gWhpQgZiBALhoQAKhnAwheQAnhNBshsIBihdIANBfQAXBsAvBFQARAXAZBRQANAoAJAkIgmCdQgPA5grBBQgVAhgSAWIAvDXQAPBGAFCeQAEBQgEA9QgCAegDAPQgxAGgpAAQgaAAgmgGg");
	this.shape_1.setTransform(2.4,-17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C16122").ss(2.5,1,1).p("AAUixIgXAWQggAagkATQg5AfgPABQgWgCgVAIQgQAHgJAMQgJANACAOQACAUAEAGQAGANAOABQAOAAAogOQAmgNAUgMIAxghIhrBWQgFABgGABQgNACgGAEQgVAQADARQADAQAHANQAKARAMABQAnACALgIQAHgEAOgQQASgUAGgFIBihSIg9BIQgGAGgUAVQgQAQgFAHQgIALgBAFQgDAIAEARQAEASAQALQANAKAOgBQAMAAALgEQAKgEAEgFQACgDAPgdQARgjAQgZQATgfAbgdQAXgXARgMQBGgxAFgbQAEgQgFggQgFgegGgJQgFgHhbAEg");
	this.shape_2.setTransform(-3.1,70.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB430").s().p("Ag5CvQgQgLgEgSQgEgRADgIQABgFAIgLQAFgHAQgQIAagbIA9hIIhiBSIgYAZQgOAQgHAEQgLAIgngCQgMgBgKgRQgHgNgDgQQgDgRAVgQQAGgEANgCIALgCIBrhWIgxAhQgUAMgmANQgoAOgOAAQgOgBgGgNQgEgGgCgUQgCgOAJgNQAJgMAQgHQAVgIAWACQAPgBA5gfQAkgTAggaIAXgWIBagFQBbgEAFAHQAGAJAFAeQAFAggEAQQgFAbhGAxQgRAMgXAXQgbAdgTAfQgQAZgRAjIgRAgQgEAFgKAEQgLAEgMAAIgDABQgMAAgMgKg");
	this.shape_3.setTransform(-3.1,70.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.4,-90.1,53.1,180.1);


(lib.Interpoler7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#186800").ss(3,1,1).p("AirnBQAihWAdh3QAOg8AHgqIBnBuQBwB9AoBNQAyBiANB2QAPCBggB4QgfB1goBiQgUAxgOAaIgfBDQghBUgNBSQgWCEgEBFQg1AMgqAAQgaAAgigDIgegDQgBgPgBgeQgCg9AFhQQALiSAOhGIA2kAQgTgWgVghQgrhBgOg5QgMgxgPhkIgMhZQAuhUASgrg");
	this.shape.setTransform(-1.6,-16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2BA005").s().p("AiVLyIgegDIgCgtQgCg9AFhQQALiSAOhGIA2kAQgTgWgVghQgrhBgOg5QgMgxgPhkIgMhZQAuhUASgrQAihWAdh3QAOg8AHgqIBnBuQBwB9AoBNQAyBiANB2QAPCBggB4QgfB1goBiQgUAxgOAaIgfBDQghBUgNBSQgWCEgEBFQg1AMgqAAQgaAAgigDg");
	this.shape_1.setTransform(-1.6,-16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C16122").ss(2.5,1,1).p("AjWigIgLAOQgJARADAQQAGAYAWApQANAXAdAuQAbAxAfArIAGARQAHARAIAGQAfAWAegMQASgHAGgMQAIgLgEgNQgEgMgCgDQgBgDgMgIIgOgGIgnhmIAiAfQAiAkANAKQAWARAmAkIAJAHQALAIAKABQASAAARgKQAUgMAAgSQAAgXgFgLQgEgIgLgIQgJgFgRgBIgQAAIhUhLIB7AsIAJAIQANAJARACQAUACASgMQAQgMACgOQADgogagSQgKgHgRACIgPADQhQgQgigUQgVgMghgYIgbgWg");
	this.shape_2.setTransform(1.9,75.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB430").s().p("AhSCZQgIgGgHgRIgGgRQgfgrgbgxIgqhFQgWgpgGgYQgDgQAJgRIALgOIC7gGIAbAWQAhAYAVAMQAiAUBQAQIAPgDQARgCAKAHQAaASgDAoQgCAOgQAMQgSAMgUgCQgRgCgNgJIgJgIIh7gsIBUBLIAQAAQARABAJAFQALAIAEAIQAFALAAAXQAAASgUAMQgRAKgSAAQgKgBgLgIIgJgHQgmgkgWgRQgNgKgigkIgigfIAnBmIAOAGQAMAIABADQACADAEAMQAEANgIALQgGAMgSAHQgLAEgKAAQgUAAgUgOg");
	this.shape_3.setTransform(1.9,75.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.7,-93.4,53.3,186.6);


(lib.eyeR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("AB/AAQAAA0gmAlQglAmg0AAQgzAAgmgmQglglAAg0QAAgzAlglQAmgmAzAAQA0AAAlAmQAmAlAAAzg");
	this.shape.setTransform(34.3,23.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003333").s().p("AhYBZQgmglAAg0QAAgzAmglQAlglAzAAQAzAAAmAlQAmAlAAAzQAAA0gmAlQgmAmgzAAQgzAAglgmg");
	this.shape_1.setTransform(34.3,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.1,9.5,34.8,28.4);


(lib.eyeL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Pupille
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("ACDAAQAAA2gnAmQgmAng2AAQg1AAgngnQgmgmAAg2QAAg1AmgmQAngnA1AAQA2AAAmAnQAnAmAAA1g");
	this.shape.setTransform(12.8,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003333").s().p("AhcBcQglgmgBg2QABg1AlgnQAngmA1AAQA2AAAmAmQAmAnAAA1QAAA2gmAmQgmAmg2AAQg1AAgngmg");
	this.shape_1.setTransform(12.8,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-12.3,29.2,29.2);


(lib.BoucheSaute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Levre haut
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C16122").ss(3).p("ArYBDQBqgUDygyQCFgdBMgcQA5gWATgCQA5gFAhAQIAbgKQAigMAWACQAkADBLAaQB3ApAwAOQBTAXBrAxQBcAkBpgG");
	this.shape.setTransform(121,37.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C16122").ss(3,1,1).p("AMiDtQCtgUBAgfQA2gaAlhFQAlhEgUhSQgVhZhFgXQgfgKgqAJQAAAAhiAbQixAxjqAAQj7AAh1gaQgVgFgSgLQgOgKgBgBQgJAMgTAHQgKAEgmAKQh8AgjhACQjYADh5g/QgNgHhEgrQgrgcgkgIQhagVhNAoQhLAogcBOQgkBfA3BTQAjA0AyAaQAqAVBCANQBrATCXgH");
	this.shape_1.setTransform(115.1,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFB430").s().p("AJdDPQhrgyhTgYQgwgOh3gpQhLgagkgDQgWgCgiALIgdAKQghgQg3AGQgTACg5AVQhMAciFAdQjyA1hqAUQiXAHhrgUQhCgMgqgVQgygagjg1Qg3hSAkhfQAchPBLgnQBNgpBaAVQAkAJArAbQBEArANAHQB5A/DYgCQDhgCB8ggIAwgOQATgIAJgLIAPAKQASALAVAFQB1AbD7gBQDqAACxgxIBigbQAqgJAfALQBFAXAVBYQAUBSglBEQglBFg2AaQhAAfitAUIggABQhXAAhOgeg");
	this.shape_2.setTransform(115.1,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Interieur bouche
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#C16122").ss(3).p("AmmixQABACBJBeQBQBrAnBMQA1BmA3ArQBDA2BigHQBkgGA3g7QArguAYhaQAbhmCCitQg1gbhOgdQicg5hyABQhwABixA6g");
	this.shape_3.setTransform(118.4,50.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC3300").s().p("Ah5D3Qg3grg1hmQgnhMhQhrIhKhgICbg6QCxg6BwgBQBygBCcA5QBOAdA1AbQiCCtgbBmQgYBagrAuQg3A7hkAGIgVABQhUAAg8gwg");
	this.shape_4.setTransform(118.4,50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Levre bas
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#C16122").ss(3).p("Arfi1QAAABAeAEQAnAIAmAVQB8BCBdCqQBYCjB0BKQBnBBCCgCQCKgCBYhGQBbhJAxiZQAviSCGg/QBDgfA7AAQhdg7iBg8QkDh4izgBQiwAAk9BoQifA0h6A0g");
	this.shape_5.setTransform(119,59.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFB430").s().p("Ai8FGQh0hKhZijQhciqh8hCQgngVgmgIQgegEgBgBQB7g0Ceg0QE9hoCxAAQCzABEDB4QCBA8BdA7Qg7AAhDAfQiHA/guCSQgxCZhbBJQhZBGiKACIgGABQh+AAhkhAg");
	this.shape_6.setTransform(117.1,59.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-1.9,234,102);


(lib.Bouche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bouche
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C16122").ss(3).p("AsGCOIBzArQg2AEhEgCQiJgChFgXQhHgYgyhKQgkg1gGgjQgCgRAGgoIAGgkQAshTBlglQBQgdAzANQAbAHAaA6QAhBKAFAGQAxA9BTAxQBsBDB5APQCCARBoAAQBiAAAsgPQAmgNAsgUIBZAiQBFAcDvgNQBfgGBJgcQBfgkBHhKQBYhfApgfQA6gqA1AEQA5AEApA0QAnAygDA3QgEBEgQAmQgZA8hHAnQhDAlhNAGIhAAAIAbgNQgOAFgOAGQiBA2hbACQhvADiPgEQiRgDgjgHQgUgDglgCIgigBQhDgBgwAJQgjAHisgGQi0gGhJgNQg7gLiEgtgANWC+IBUgqAskCDIAeAL");
	this.shape.setTransform(115.2,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB430").s().p("AFgEAQiRgDgjgHQgUgDglgCIgigBQhDgBgwAJQgjAHisgGQi0gGhJgNQg7gLiEgtIhZggIgegLIAeALIBzArQg2AEhEgCQiJgChFgXQhHgYgyhKQgkg1gGgjQgCgRAGgoIAGgkQAshTBlglQBQgdAzANQAbAHAaA6QAhBKAFAGQAxA9BTAxQBsBDB5APQCCARBoAAQBiAAAsgPQAmgNAsgUIBZAiQBFAcDvgNQBfgGBJgcQBfgkBHhKQBYhfApgfQA6gqA1AEQA5AEApA0QAnAygDA3QgEBEgQAmQgZA8hHAnQhDAlhNAGIhAAAIAbgNIgcALQiBA2hbACIhiABQhIAAhUgCgANWC+IBUgqg");
	this.shape_1.setTransform(115.2,25.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C16122").ss(3,1,1).p("AKIiIQhNANh8AAIi9ABQgbAigqAiQhSBDhGAEQhFAEhUhJQgbgXgZgcIgTgYQjPgEhsgOQgxgGhCgTIASAGQBoAgATANQATAOAtAqQAbAaBPBMQBOBNA7AiQBRAvBbgCQBjgBA9gXQA5gWBEg6QApgjBEg8QA0gyAZgRQAdgVBlgfQAXgHAVgGgAK8iWQgNAHgmAHQgBAAAAAAAqFiyIAcAIQgIgCgIgCgAq7jDIA2AR");
	this.shape_2.setTransform(118.1,64.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB430").s().p("Ai4CJQg7ghhOhNQhPhNgbgZQgtgrgTgOQgTgMhoghIgSgFQBDASAwAGQBsAODPAFIATAXQAZAcAbAYQBUBIBFgEQBGgDBShDQAqgjAbghIC9gBQB9AABMgNIgsAMQhlAfgdAVQgZASg0AxQhEA9gpAjQhEA6g5AVQg9AXhhACIgGAAQhZAAhPgug");
	this.shape_3.setTransform(119.6,65.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC3300").s().p("AgWBnQgqgBgpgXIghgXQgkgXgyg0IgpgxIAlAAQAsgBAcgDQAsgEA5gbIAoAPQAsAPAgADQA1AGCYACQhGBKgvAgQhUA8hQAAIgHgBg");
	this.shape_4.setTransform(121.9,57);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#C16122").ss(3,0,1).p("AsGCOIBzArQg2AEhEgCQiJgChFgXQhHgYgyhKQgkg1gGgjQgCgRAGgoIAGgkQAshTBlglQBQgdAzANQAbAHAaA6QAhBKAFAGQAxA9BTAxQBsBDB5APQCCARBoAAQBiAAAsgPQAmgNAsgUIBZAiQBFAcDvgNQBfgGBJgcQBfgkBHhKQBYhfApgfQA6gqA1AEQA5AEApA0QAnAygDA3QgEBEgQAmQgZA8hHAnQhDAlhNAGIhAAAIAbgNQgOAFgOAGQiBA2hbACQhvADiPgEQiRgDgjgHQgUgDglAAIgiACQhDgGgwAJQgjAHisgGQi0gGhJgNQg7gLiEgtgANWC+IBUgqAskCDIAeAL");
	this.shape_5.setTransform(115.2,25.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFB430").s().p("AFgEAQiRgDgjgHQgUgDglAAIgiACQhDgGgwAJQgjAHisgGQi0gGhJgNQg7gLiEgtIhZggIgegLIAeALIBzArQg2AEhEgCQiJgChFgXQhHgYgyhKQgkg1gGgjQgCgRAGgoIAGgkQAshTBlglQBQgdAzANQAbAHAaA6QAhBKAFAGQAxA9BTAxQBsBDB5APQCCARBoAAQBiAAAsgPQAmgNAsgUIBZAiQBFAcDvgNQBfgGBJgcQBfgkBHhKQBYhfApgfQA6gqA1AEQA5AEApA0QAnAygDA3QgEBEgQAmQgZA8hHAnQhDAlhNAGIhAAAIAbgNIgcALQiBA2hbACIhiABQhIAAhUgCgANWC+IBUgqg");
	this.shape_6.setTransform(115.2,25.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#C16122").ss(3,1,1).p("AKIiAQhNANh8AAIi9ABQgbAZgqAZQhSA0hGADQhFAEhUg5IhHg5QjPgFhsgOQgxgGhCgSIASAFQBoAhATAMQATAOAtArQAbAZBPBNQBIBGBBAhQBPAnBdgBQBrgCA1gPQA9gSBAg2QApgjBEg/QA0gvAZgSQAdgVBlgfQAXgGAVgGgAK8iPQgNAHgmAHQgBABAAAAAppiiQgIgCgIgDIgMgEgAq7i7IA2AQ");
	this.shape_7.setTransform(118.1,63.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFB430").s().p("Ai4CJQhBgghIhHQhPhMgbgaQgtgqgTgOQgTgNhoggIgSgGQBDATAwAGQBsAODPAEIBHA6QBUA5BFgEQBGgEBSgzQAqgaAbgZIC9gBQB9AABMgNIgsANQhlAfgdAVQgZARg0AyQhEA8gpAjQhAA2g9ASQg1AQhpABIgHABQhbAAhMgng");
	this.shape_8.setTransform(119.6,64.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC3300").s().p("AgXBnQgpgBgqgXIghgXQgjgXgxg0IgrgxIAmAAQAtgBAbgDQAsgEA5gbIAoAPQAsAPAhADQA0AGCZACQhHBKgvAgQhUA8hQAAIgIgBg");
	this.shape_9.setTransform(121.9,57);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#C16122").ss(3,0,1).p("Ar/CPIB0ArQg5AGhGABQiNADhFgXQhIgYgzhLQgmg2gGgkQgGgiAJgqIAJgiQAshTBhgiQBIgZA3AJQAtAIArA5QAYAfAeAxQA6BIA1AnQBbBAB2APQCIARBmADQBnACApgOQAmgNAugRIBOAcQBBAbEAgPQBbgFBFgcQBVgkBIhKQBPhWA6gkQA+gnA5AEQA4AEApA1QAnAygDA2QgDBFgQAlQgaA9hHAnQhDAkhNAHIg/gBIAagNQgNAGgOAGQiCA1hbADQjRAFgZAAQiHAAhBgQQgTgFglABIgiACQgRgCgXAAQgugCgeAIQg8AOijgJQiUgHhYgRQg8gLiDgtgANdC+IBZg1AsfB2IAgAZ");
	this.shape_10.setTransform(114.4,25.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFB430").s().p("ACzD3QgTgFglABIgiACQgRgCgXAAQgugCgeAIQg8AOijgJQiUgHhYgRQg8gLiDgtIhagfIgggZIAgAZIB0ArQg5AGhGABQiNADhFgXQhIgYgzhLQgmg2gGgkQgGgiAJgqIAJgiQAshTBhgiQBIgZA3AJQAtAIArA5QAYAfAeAxQA6BIA1AnQBbBAB2APQCIARBmADQBnACApgOQAmgNAugRIBOAcQBBAbEAgPQBbgFBFgcQBVgkBIhKQBPhWA6gkQA+gnA5AEQA4AEApA1QAnAygDA2QgDBFgQAlQgaA9hHAnQhDAkhNAHIg/gBIAagNIgbAMQiCA1hbADIjqAFQiHAAhBgQgANdC+IBZg1g");
	this.shape_11.setTransform(114.4,25.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#C16122").ss(3).p("AKnhpQgiAGg4ABQgeABhUAAQh+AAguAEIgVAEQhpAXhwAGQhFAEhWgRIhIgSQjMgOhsgOQgxgHhCgSIASAGQAkALA2ALQAoAJAGAEQAOAJApAyQA0A8AtAsQCNCLC3gDQBxgBAqgLQA6gOA+g1QAvgnA2g+QAwg1AVgPQATgOBEgPQAmgJBEgPgALuh+QgFADghAJQggAJgBAAApNiQQgIgCgIgCIgMgEgAqfipIA2AR");
	this.shape_12.setTransform(115.3,61.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFB430").s().p("AlHAiQgtgqg0g+QgqgygNgJQgGgEgpgJQg1gLgkgLIgTgGQBDATAxAGQBrAODNAOIBIASQBWARBEgEQBxgGBpgXIAVgEQAugEB9AAIBzgBQA4gBAigGIhqAYQhFAPgTAOQgVAPgwA3Qg2A8gvAnQg9A1g6AOQgrALhvABIgGABQi1AAiKiJg");
	this.shape_13.setTransform(119.8,64.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#C16122").ss(3,0,1).p("Ar5B9IBpA3Qg7AHhKADQiTAFhFgXQhLgZguhAQglgzgIg8QgCgRAJgrIAKgnQArhTBKglQA0gaA0ABQBNACA4BBQAeAiAeA2QAwA7BFApQBcA1B6AQQC0AXAwAFQBjAIAlgMQAogNA2gPIAoANQAsANAWAEQApAIA5ABQBJACCMgIQBXgGBCgeQBOgjBJhNQCVihB2AJQA4AEAqA8QAoA5gDA3QgDBBgVAtQgeBAhHAnQhDAkhSAAIhEgIIAbgNQgOAFgOAGQiBA2hbACQigANhQAGQiOAJgzgaQgRgJgngEIgkgBQgTgBgYABQgwADgeAMQhEAciggTQgsgGi2ghQgsgIhegmQhjgqghgMgANZC5IB3g5AsjBfIAqAe");
	this.shape_14.setTransform(114.9,26.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFB430").s().p("ACwD+QgRgJgngEIgkgBQgTgBgYABQgwADgeAMQhEAciggTQgsgGi2ghQgsgIhegmQhjgqghgMIgqgeIAqAeIBpA3Qg7AHhKADQiTAFhFgXQhLgZguhAQglgzgIg8QgCgRAJgrIAKgnQArhTBKglQA0gaA0ABQBNACA4BBQAeAiAeA2QAwA7BFApQBcA1B6AQQC0AXAwAFQBjAIAlgMQAogNA2gPIAoANQAsANAWAEQApAIA5ABQBJACCMgIQBXgGBCgeQBOgjBJhNQCVihB2AJQA4AEAqA8QAoA5gDA3QgDBBgVAtQgeBAhHAnQhDAkhSAAIhEgIIAbgNIgcALQiBA2hbACIjwATQglACgfAAQhXAAgmgTgANZC5IB3g5g");
	this.shape_15.setTransform(114.9,26.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C16122").ss(3).p("ApCh2IASAFQAlAMA7ALQAvAIAFAEQAPAKAgAlQAuAyArArQA9A8BXAaQBOAYBqgCQB9gCAsgIQBJgOA8gzQAugnAtgxQAmgnAWgQQAMgIAhgHQAPgDAUgDQAmgFAYgDAIqg/QgcACgcAAQhmAAiOgLQh7gLg3ADQhHAEhSABIhHAAQjPgFhsgOQgwgGhDgSALjhjQgNAHgmAHQgBABAAAAQgJACgbAFQgbAFgTADQgaAEgZACApeh/IAcAJQgIgCgIgDgAqUiPIA2AQ");
	this.shape_16.setTransform(114.2,58.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFB430").s().p("AhzB7QhXgag9g9Qgsgogtg0QghglgOgKQgFgEgvgJQg7gLglgLIgSgGQBCASAxAHQBsAODPAEIBHAAQBSAABHgEQA2gDB8AKQCOAMBmAAQAbAAAcgDQggAHgNAJQgVAPgmAqQgtAugvAnQg7AzhJAOQgsAJh9ACIgNAAQhiAAhJgWg");
	this.shape_17.setTransform(113,61.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#C16122").ss(3).p("AKnhpQgiAGg4ABQgeABhUAAQh+AAguAEIgVAEQhpAXhwAGQhFAEhWgRIhIgSQjMgOhsgOQgxgHhCgSIASAGQAkALA2ALQAoAJAGAEQAOAJApAyQA0A8AtAsQCNCLC3gDQBxgBAqgLQA6gOA+g1QAvgnA2g+QAwg1AVgPQATgOBEgPQAmgJBEgPgALuh+QgFADghAJQggAJgBAAAppiYIAcAIQgIgCgIgCgAqfipIA2AR");
	this.shape_18.setTransform(115.3,61.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#C16122").ss(3).p("AKvhzQhMANh9AAIi9ABQgbAZgqAaQhSAyhGADQhHAEhSg3IhHg6QjPgEhsgOQgwgHhDgSIASAGQBoAgATANQATAOAtAqQAbAaBPBMQBIBHBBAgQBPAoBdgCQBrgBA1gQQA9gSBAg2QApgjBEg+QA0gwAZgRQAdgVBlgfQAXgHAVgGgALjiBQgNAHgmAHQgBAAAAAAApeidIAcAIQgIgCgIgCgAqUiuIA2AR");
	this.shape_19.setTransform(114.2,62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},50).to({state:[{t:this.shape_9},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_9},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_9},{t:this.shape_13},{t:this.shape_18},{t:this.shape_11},{t:this.shape_10}]},22).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_19},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-4.6,242.5,89.8);


(lib.Haut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C16122").ss(3,1,1).p("AGEgOQgHAJgHABQgJADgHAAAmDACQAHAJAHABQAJADAHAA");
	this.shape.setTransform(87.8,73.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(46));

	// Cou
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C16122").ss(3,1,1).p("AD+lXQkNB1gxAxQg3A3gMA/QgHAmgKBbQgMA6gJAZQgFAQgSAxQgSA7grBD");
	this.shape_1.setTransform(151.7,38.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C16122").ss(3,1).p("AnGF1QgqhDgXgpQgNgYgYh+QgciXgEgRQgOg+gJgcQgPgtgdgcQgsgthcg5QBWgMB8gNQD6gZDFgEQDEgDGAAlQBAAHCEgEQB/gDAyAG");
	this.shape_2.setTransform(95.2,37.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB430").s().p("AnTFMQgqhDgYgpQgNgYgYh+QgbiXgFgRQgOg+gJgcQgPgtgdgcQgsgthcg5QBWgMB9gNQD5gZDFgEQDFgDF/AlQBAAHCFgEQB+gDAyAGQkPB2gwAwQg3A3gNBAQgGAmgLBaQgMA6gJAZIgWBBQgTA7gqBEQjBBjjHAAQi3AAi9hSg");
	this.shape_3.setTransform(96.6,41.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#C16122").ss(3,1).p("AnUF2QgvhEgXgpQgFgHgEgOQgMgkgShcQgCgLgCgKQgYh/gFgTQgDgLgCgJQgLgugHgXQgFgOgFgMQgNgcgUgUQgKgKgLgLQgrglhEguIgBgBQBWgMB8gMQD6gZDEgEQDMgDF3AlQBOAGB2gDQAIAAAJAAQBwgDAwAFQgGAEgGADQg2AXg6AdQhuA2gwAhQgUAOgLALQglAngRApQgHATgFAUQgFAegHA3QgDAVgDAWQgGAdgFATQgFATgHAQQgEAMgLAcQgEALgFANQgTA1glA8QgEAGgFAF");
	this.shape_4.setTransform(97,37.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFB430").s().p("AnPFNQgvhEgXgoQgEgHgFgOQgLgkgShcIgFgWQgYh+gFgTIgEgUQgLgvgIgXQgEgOgGgLQgNgcgTgUIgWgVQgrgmhDgtIgBgBQBVgMB8gNQD6gZDFgEQDLgCF3AkQBOAGB2gDIARAAQBwgDAwAGIgMAHQg2AXg5AdQhuA1gwAhQgVAPgLALQglAmgQAqQgIASgEAVIgNBVIgFArIgMAwQgFATgGAQIgPAoIgKAYQgSA0gmA8IgIAMQjABijGAAQi1AAi8hRg");
	this.shape_5.setTransform(96.4,41.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#C16122").ss(3,1).p("AnQF2QgwhEgXgoQgFgHgEgNQgMgigUhdQgCgLgCgLQgYh6gGgYQgDgLgCgIQgLgugHgXQgFgOgFgLQgMgcgTgVQgKgLgMgKQgrgnhBgvIAAgBQBVgMB8gMQD6gZDDgEQDLgDF3AkQBOAHB2gDQAIAAAJAAQBvgDAxAFQgEADgDADQguAThCAjQhvA5gtAgQgUAPgLAMQglAngQApQgHASgEAWQgGAegHA2QgDAVgDAWQgHAdgFASQgEARgJATQgFAMgLAbQgFALgFANQgUAzgnA8QgEAFgFAF");
	this.shape_6.setTransform(96.5,37.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFB430").s().p("AnOFNQgwhDgXgpQgFgHgEgNQgMghgUheIgDgWQgZh6gGgXIgEgUQgLgtgIgYQgEgOgFgLQgNgcgTgVIgVgVQgrgnhBgvIgBAAQBVgMB8gNQD6gZDDgEQDMgDF2AlQBOAGB2gDIARAAQBvgDAxAGIgHAGQguAThCAjQhvA4gsAhQgVAOgLAMQgkAngRAqQgGASgFAVQgGAegGA3IgHArQgGAcgGATQgEAQgJATIgPAnIgLAYQgUAzgmA8IgJALQjABhjFAAQi1AAi8hRg");
	this.shape_7.setTransform(96.3,41.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C16122").ss(3,1).p("AnHF1QgxhCgXgoQgFgIgFgMQgMgfgUhfQgCgLgDgLQgYh2gHgbQgCgMgCgIQgLgtgIgXQgEgPgFgKQgMgcgTgVQgKgLgLgLQgrgog+gwIgBgBQBVgMB8gMQD5gZDEgEQDKgDF2AkQBNAHB3gDQAIAAAJAAQBugDAyAFQgBADgBACQgnAPhJApQhwA7gqAhQgTAPgMAMQgkAogPApQgHASgFAWQgFAfgIA1QgDAWgEAVQgHAdgFASQgEANgKAWQgGANgLAaQgFALgGAMQgWAygnA7QgFAFgFAF");
	this.shape_8.setTransform(95.6,37.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFB430").s().p("AnNFNQgxhDgXgoQgFgHgFgMQgMgggUhfIgFgWQgYh2gHgbIgEgTQgLgtgIgYQgEgOgFgLQgMgcgTgVIgVgVQgrgog+gxIgBAAQBVgMB8gNQD5gZDEgEQDKgDF2AlQBNAGB3gDIARAAQBugDAyAFIgCAGQgnAPhJApQhwA7gqAgQgTAPgMANQgkAngPAqQgHARgFAWQgFAfgIA2IgHAqQgHAegFARQgEAOgKAWIgRAmIgLAYQgWAygnA7IgKAKQi/BgjDAAQi2AAi8hRg");
	this.shape_9.setTransform(96.2,41.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#C16122").ss(3,1).p("AnHF1QgxhCgYgnQgFgJgEgLQgNgcgVhhQgDgLgCgLQgYhygIgfQgDgLgCgJQgLgrgHgYQgFgPgEgKQgMgcgSgVQgJgMgMgKQgrgqg7gxIgBgBQBVgMB8gMQD4gZDEgEQDJgDF2AkQBNAHB2gDQAJAAAJAAQBtgDAyAFQACACABACQgeALhSAvQhwA+goAgQgSAPgMAOQgkAogOApQgHARgEAXQgHAdgHA3QgEAWgEAUQgHAegGARQgDALgMAYQgHAOgLAZQgFAKgGANQgYAxgpA6QgFAFgFAE");
	this.shape_10.setTransform(95.5,37.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFB430").s().p("AnOFNQgxhDgYgnQgFgIgEgLQgNgdgVhgIgFgXIggiRIgFgTQgLgsgHgYIgJgYQgMgcgSgWQgJgLgMgLQgrgpg7gyIgBAAQBVgMB8gNQD4gYDEgFQDJgDF2AkQBNAHB2gDIASAAQBtgDAyAFQAAABABAAQAAABABAAQAAABAAAAQABABAAAAQgeAMhSAvQhwA+goAgQgSAPgMAOQgkAngOApQgHARgEAYQgHAfgHA0IgIArQgHAegGARQgDALgMAYIgSAmIgLAXQgYAxgpA7IgKAIQi+BgjDAAQi2AAi8hRg");
	this.shape_11.setTransform(96.2,41.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#C16122").ss(3,1).p("AnUF1QgyhBgXgnQgGgJgEgKQgNgagWhiQgDgLgDgMQgXhtgJgjQgDgMgCgIQgLgrgHgYQgFgPgEgJQgMgcgRgWQgJgMgLgKQgsgrg4gzIgBAAQBVgMB7gNQD4gYDEgFQDJgDF1AkQBMAHB3gDQAIAAAJAAQBsgDAzAFQAFACADABQgWAIhaA1QhwBAgmAgQgRAQgNAOQgiAogOApQgGARgFAYQgHAegIA1QgEAXgEATQgHAfgGAQQgDAIgOAbQgHAOgMAYQgFALgHAMQgZAwgqA5");
	this.shape_12.setTransform(96.7,37.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFB430").s().p("AnQFMQgyhBgYgnIgKgTQgMgagXhiIgFgXQgYhtgIgjIgFgUQgLgrgIgYIgIgYQgMgcgSgWQgJgMgKgKQgsgrg4gzIgBAAQBVgMB7gNQD4gYDDgFQDJgDF2AkQBLAHB4gDIARAAQBsgDAzAFIAIADQgXAIhZA1QhxBAglAgQgSAQgMAOQgjAogOApQgFARgGAYQgGAggIAzIgIAqQgHAfgHAQQgCAIgPAbIgTAmIgLAXQgZAwgqA5IgMAIQi8BfjCAAQi2AAi9hSg");
	this.shape_13.setTransform(96.3,41.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#C16122").ss(3,1).p("AngF1QgyhBgYgmQgGgJgEgJQgNgYgYhkQgDgLgCgMQgYhpgKgnQgDgMgCgHQgLgqgHgZQgFgPgDgJQgMgcgRgWQgJgMgLgLQgsgsg1g0QBUgMB7gNQD4gYDDgFQDIgDF1AkQBMAHB3gDQAIAAAJAAQBrgDA0AFQAIABAFABQgOAEhiA7QhxBDgjAgQgRAPgMAQQgjAogNApQgGAQgFAZQgHAfgHA0QgFAXgEATQgIAfgGAPQgCAGgQAeQgIAOgMAXQgGAKgHAMQgbAvgqA5");
	this.shape_14.setTransform(97.8,37.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFB430").s().p("AnSFMQgyhBgYgmIgKgSQgNgYgYhkIgFgXIgiiQIgFgTIgShDIgIgYQgMgcgRgWQgJgMgLgLIhhhgQBUgMB7gNQD4gYDDgFQDIgDF1AkQBMAHB3gDIARAAQBrgDA0AFIANACQgOAEhiA7QhxBDgjAgQgRAPgMAQQgjAogNApQgGAQgFAZQgHAhgHAyIgJAqQgIAfgGAPQgCAGgQAeIgUAlIgNAWQgbAvgqA5IgMAHQi8BejBAAQi3AAi9hSg");
	this.shape_15.setTransform(96.4,41.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C16122").ss(3,1,1).p("AD+lXQgHgBhqBBQhxBGgeAgQg6A5gSA5QgLAjgPBZQgNBBgKAWQgCAEgnBEQgfA2g2BG");
	this.shape_16.setTransform(151.7,38.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#C16122").ss(3,1).p("AnMF1Qg/hPgXgpQgOgYgdh6QgeiCgJghQgShDgJgXQgRgsgegdQgsgtgzg2QBWgMB8gNQD6gZDFgEQDEgDGAAlQBAAHCEgEQB/gDAyAG");
	this.shape_17.setTransform(95.8,37.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFB430").s().p("AnTFMQg/hPgYgpQgOgYgdh6QgeiCgJghQgShDgJgXQgRgsgdgdQgtgtgzg2QBWgMB9gNQD5gZDFgEQDFgDF/AlQBAAHCFgEQB+gDAyAGQgGAAhqBBQhyBGggAfQg5A6gTA4QgLAkgOBYQgOBCgKAWIgpBIQgeA1g2BHQjBBjjHAAQi3AAi9hSg");
	this.shape_18.setTransform(96.6,41.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#C16122").ss(3,1,1).p("AnRF0QhAhOgXgoQgFgIgFgOQgPgmgVhVQgEgTgEgSQgWhigIgeQgShEgJgWQgSgsgdgdQAAAAgBgBQgsgtgzg1IgBgBQBXgLB8gMQECgZC+gEQARAAASAAQDBgBFhAjQALABAMABQA+AEBwgDQAJAAAKAAQBvgDAwAGQgBAAgKAGQgYAMhLAuQhiA8gkAgQgHAFgFAFQgtAtgTAtQgFANgEANQgIAdgLA9QgCAQgDASQgIAkgHAXQgFAQgGAMQgCAGgXAoQgHAMgJAOQgSAfgcAmQgTAagWAc");
	this.shape_19.setTransform(96.1,37.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFB430").s().p("AnFFRIgMgGQhAhOgXgpQgFgHgFgOQgPgngVhVIgIgkQgWhjgIgdQgShEgJgXQgSgrgdgdIgBgBIhfhjIgBAAQBXgMB8gMQECgYC+gEIAjgBQDBAAFhAiIAXACQA+AFBwgDIATgBQBvgCAwAGIgLAFQgYAMhLAuQhiA8gkAgIgMAKQgtAugTAtQgFAMgEANQgIAegLA9IgFAhQgIAlgHAWQgFARgGAMIgZAuIgQAaQgSAfgcAmIgpA1QjCBjjHAAQixAAi4hNg");
	this.shape_20.setTransform(96.1,41.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#C16122").ss(3,1,1).p("AnOF0QhBhOgZgoQgEgIgGgNQgQgngUhUQgFgTgEgSQgWhigIgfQgShDgJgYQgTgrgcgdQgBgBAAAAQgtgtg0g2QBXgLB8gMQEEgXC9gEQARgBASAAQDAgBFkAjQAKABANABQA+AEBwgDQAKAAAJAAQBvgDAxAGQAAAAgHAFQgVAKhPAvQhjA9gkAgQgGAGgFAFQgtAugRAtQgFAMgEAOQgHAfgKA8QgDAQgDARQgIAmgHAVQgFAPgHAOQgEAHgWAnQgGALgJAOQgTAfgdAmQgUAZgWAb");
	this.shape_21.setTransform(95.7,37.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFB430").s().p("AnDFQIgLgHQhBhNgZgpIgKgVQgQgngUhUIgJgkQgWhjgIgeQgShDgJgYQgTgsgcgdIgBgBIhhhiQBXgMB8gLQEEgYC9gEIAjgBQDAgBFkAjIAXACQA+AFBwgDIATgBQBvgCAxAFIgHAFQgVAKhPAwQhjA9gkAfIgLALQgtAugRAuQgFAMgEAOQgHAegKA9IgGAhQgIAlgHAWQgFAOgHAPIgaAtIgPAaQgTAfgdAmIgqA0QjCBjjHAAQiyAAi5hOg");
	this.shape_22.setTransform(95.7,41.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#C16122").ss(3,1,1).p("AnFF1IgGgEQhDhNgZgoQgFgJgFgMQgSgogUhSQgFgTgEgSQgVhigIggQgShCgKgaQgTgrgdgdQAAgBgBAAQgsgtg1g1IAAgBQBXgLB9gLQEFgXC8gEQARAAASgBQDAgBFlAjQALABAMABQA+AFBxgDQAKAAAJgBQBvgCAyAFQACAAgFAEQgSAIhSAyQhlA9gjAgQgGAGgFAFQgtAugQAvQgEAMgDAOQgHAggKA7QgDARgDAQQgIAmgHAVQgFANgIAQQgFAKgVAkQgGALgJAOQgUAegeAmQgUAZgXAb");
	this.shape_23.setTransform(95.3,37.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFB430").s().p("AnFFNIgGgFQhDhNgZgoIgKgUQgSgogUhTIgJglQgVhigIggQgShCgKgZQgTgrgdgeIgBgBIhhhiIAAAAQBXgLB9gLQEFgXC8gEIAjgBQDAgCFlAjIAXACQA+AFBxgDIATAAQBvgDAyAGQAAAAAAAAQAAAAAAABQAAAAgBABQgBABgBABQgSAIhSAxQhlA+gjAfIgLALQgtAvgQAuQgEAMgDAPQgHAfgKA8IgGAhQgIAmgHAVQgFAMgIARIgaAtIgPAaQgUAegeAmIgrAzQi2Bei/AEIgSAAQi3AAi8hQg");
	this.shape_24.setTransform(95.3,41.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#C16122").ss(3,1,1).p("Am/F2QgFgEgFgEQhEhMgZgpQgGgIgFgLQgTgpgUhRQgFgTgEgTQgVhhgIghQgShCgLgaQgTgsgdgdQgBgBAAAAQgsgtg2g1IAAgBQBYgKB8gLQEHgWC8gEQARgBARAAQDAgCFnAjQALABANABQA8AFBzgCQAKgBAJAAQBvgDAyAFQADABgBADQgQAGhVAzQhmA+giAgQgHAFgFAGQgtAvgOAvQgDAMgEAPQgGAggIA7QgEARgDARQgJAmgHAUQgEALgKATQgGALgTAiQgHALgJAOQgUAegfAlQgVAZgXAa");
	this.shape_25.setTransform(95,37.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFB430").s().p("Am/FOIgKgIQhEhMgZgpQgGgIgFgLQgTgpgUhRIgJgmQgVhhgIghQgShCgLgaQgTgsgdgdIgBgBIhihiIAAgBQBYgKB8gLQEHgWC8gEIAigBQDAgCFnAjIAYACQA8AFBzgCIATgBQBvgDAyAFQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQgQAGhVAzQhmA+giAgIgMALQgtAvgOAvIgHAbQgGAggIA7IgHAiQgJAmgHAUQgEALgKATIgZAtIgQAZQgUAegfAlIgsAzQjCBkjHAAQi0AAi7hQg");
	this.shape_26.setTransform(95,41.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#C16122").ss(3,1,1).p("Am+F2QgFgFgFgEQhFhMgagoQgGgJgFgKQgVgqgUhPQgEgTgFgUQgThggJgjQgRhBgMgbQgTgrgegeQgBgBAAAAQgsgtg2g1IgBgBQBZgJB8gLQEIgVC8gFQARAAARAAQC/gDFpAjQAMABAMABQA8AGB0gDQAJAAAKAAQBvgDAyAFQAFAAABADQgMADhZA2QhnA+giAgQgGAFgFAGQgtAwgNAvQgDAMgDAQQgGAhgHA6QgEASgDAQQgJAmgIAUQgDAJgLAVQgIANgSAgQgGALgKAOQgUAdggAlQgWAZgYAa");
	this.shape_27.setTransform(94.7,37.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFB430").s().p("Am+FNIgKgIQhFhMgagoQgGgJgFgKQgVgqgUhQIgJgmQgThhgJgiQgRhBgMgcQgTgrgegeIgBgBQgsgsg2g1IgBgBQBZgKB8gKQEIgWC8gEIAigBQC/gCFpAjIAYACQA8AFB0gCIATgBQBvgDAyAFQAFABABACQgMAEhZA1QhnA+giAgIgLALQgtAwgNAwIgGAcQgGAhgHA6IgHAhQgJAngIATQgDAKgLAUIgaAuIgQAZQgUAcggAmIguAyQjBBkjIAAQi0AAi8hRg");
	this.shape_28.setTransform(94.7,41.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#C16122").ss(3,1,1).p("Am+F1QgEgEgFgFQhHhLgbgoQgGgKgFgJQgWgqgUhPQgEgSgFgUQgThhgJgjQgRhAgNgdQgTgrgegeQgBgBAAAAQgsgsg3g2IAAAAQBYgKB9gKQEJgUC8gFQARAAARgBQC+gDFsAkQALABANABQA7AFB1gCQAKAAAJgBQBvgDAzAFQAHAAADACQgKAChcA3QhoA/giAfQgFAGgGAGQgsAxgLAwQgDALgDARQgFAigHA6QgEARgDAQQgJAngIATQgDAHgNAXQgIAPgSAeQgGALgJAOQgVAcgiAmQgWAYgXAZ");
	this.shape_29.setTransform(94.6,37.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFB430").s().p("Am+FNIgJgJQhHhMgbgoIgKgSQgXgrgUhOIgJgnQgThggJgkQgRhAgMgdQgUgrgegeIgBgBQgsgsg3g1IgBgBQBagJB8gKQEKgVC7gEIAigBQC+gDFsAjIAXACQA8AGB1gDIATAAQBvgDAzAEQAHABADACQgKABhcA3QhoA/giAgIgLAMQgtAwgKAwIgGAdIgMBbIgIAhQgIAogJASQgCAIgNAXIgZAtIgRAYQgUAdgiAlIgtAxQjCBkjIAAQi2AAi8hRg");
	this.shape_30.setTransform(94.6,41.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#C16122").ss(3,1).p("Am0F1QhhhmgWgpQgeg2gXhpQgVhsgJghQgPg5gOgfQgSgogfgfQgsgtg5g2QBggJCIgKQEQgVDFgEQDEgDGAAlQBAAHCEgEQB/gDAyAG");
	this.shape_31.setTransform(93.4,37.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#C16122").ss(3,1,1).p("AD+lXQgHgBhhA6QhpA/ggAfQg1A3gKA3QgGAigKBXQgOBCgLAZQgEAJgmBCQgTAig0A4IgxAx");
	this.shape_32.setTransform(151.7,38.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFB430").s().p("Am9FMQhhhmgXgpQgdg2gXhpQgVhsgJghQgPg5gOgfQgTgogegfQgtgtg5g2QBhgJCIgKQEPgVDGgEQDEgDF/AlQBAAHCFgEQB+gDAzAGQgIAAhhA6QhoA+ggAgQg3A3gLA3QgGAigJBWQgOBCgLAZQgEAKgmBCQgUAhg0A4IgwAyQjBBjjHAAQi3AAi9hSg");
	this.shape_33.setTransform(94.3,41.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#C16122").ss(3,1,1).p("Am9F1QhmhqgUgkQgeg2gXhpQgVhsgJghQgPg5gOgeQgSgogegfQgtgtg7g3QBhgJCKgLQERgUDGgEQDEgEGAAmQA/AGCHgDQCAgDAzAGQgfAMhbA4QhjA+geAjQgxA0gLA8QgIAogIBMQgNA9gOAdQgGAMgpBBQgQAahgBl");
	this.shape_34.setTransform(94.3,37.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFB430").s().p("Am9FcQhmhqgUgjQgeg2gWhqQgWhsgJghQgPg5gOgeQgRgogfgeQgtgtg7g3QBigKCJgKQESgVDFgEQDEgDF/AlQBBAHCGgDQCAgEAzAHQgfALhbA5QhiA+gfAiQgxA1gLA7QgHAogJBNQgNA9gOAcQgFANgpBAQgRAahgBmQgTAMhWASQhhAThtAJQhQAHhHAAQi+AAhwgxg");
	this.shape_35.setTransform(94.3,39.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#C16122").ss(3,1,1).p("Am7F1QhuhxgQgdQgeg2gXhqQgVhsgJghQgPg4gNgeQgSgngfgfQgtgtg9g4QBjgKCKgKQEUgVDFgEQDEgDGAAlQBAAHCIgDQCCgDAzAHQg2AXhVA3QhdA9gcAmQgsAygLA/QgJAtgIBFQgMA4gQAfQgIAQgsA/QgUAchVBY");
	this.shape_36.setTransform(94.3,37.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFB430").s().p("Am7FWQhuhxgQgdQgeg2gXhqQgVhsgJghQgPg4gNgeQgSgngfgfQgtgtg9g4QBjgKCKgKQEUgVDFgEQDEgDGAAlQBAAHCIgDQCCgDAzAHQg2AXhVA3QhdA9gcAmQgsAygLA/QgJAvgIBDQgMA4gQAfQgIAQgsA/QgUAchVBYQgwAcgugDIhhgVQiQBGiHAFIgUAAQiFAAiLg+g");
	this.shape_37.setTransform(94.3,40.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#C16122").ss(3,1,1).p("Am6F1Qg8g9gVgWQgogrgJgQQgdg2gXhpQgVhsgJghQgPg5gNgdQgSgngfgeQgsgthAg5QBkgKCLgLQEWgVDGgEQDEgDF/AlQBAAHCLgDQCEgCAyAGQhOAjhPA2QhWA9gaAoQgmAwgMBEQgKAzgHA6QgMAzgSAjQgKATgvA9QgaAihHBH");
	this.shape_38.setTransform(94.2,37.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFB430").s().p("Am6FbIhRhTQgogrgJgQQgdg2gXhpQgVhsgJghQgPg5gNgdQgSgngfgeQgsgthAg5QBkgKCLgLQEWgVDGgEQDEgDF/AlQBAAHCLgDQCEgCAyAGQhOAjhPA2QhWA9gaAoQgmAwgMBEQgKAzgHA6QgMAzgSAjQgKATgvA9QgaAihHBHQhGAnhHgCQgxgChhgdQh+A6hqAFIgVAAQhsAAhyg0g");
	this.shape_39.setTransform(94.2,40);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#C16122").ss(3,1,1).p("Am6F0QhJhJgIgIQgrgsgIgPQgdg2gXhpQgVhsgJghQgPg5gOgcQgRgmgegfQgtgthCg6QBlgKCMgKQEZgWDFgEQDEgDGAAlQBAAHCMgCQCGgDAzAHQhmAuhJA2QhQA7gYAsQghAtgLBIQgMA5gHAxQgLAugUAmQgMAWgyA8QgfAjg7A6");
	this.shape_40.setTransform(94.2,37.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFB430").s().p("Am6FfIhShSQgqgsgIgOQgdg2gXhpQgWhsgIghQgQg5gNgdQgRgmgfgeQgsgthCg6QBkgKCNgLQEZgVDFgEQDEgEF/AmQBAAGCNgCQCGgCAzAGQhmAvhJA1QhRA8gXArQghAtgLBIQgMA6gHAwQgLAvgUAmQgMAVgzA8QgeAjg7A6QhdAzhfgBQhQgBhxgoQhtAthOAEIgRABQhWAAhbgrg");
	this.shape_41.setTransform(94.2,39.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#C16122").ss(3,1,1).p("Am7F0Qh7h4gKgTQgeg2gXhqQgVhsgJghQgPg4gNgcQgRgmgfgfQgsgthFg7QBmgKCOgKQEbgWDFgEQDEgDGAAlQA/AGCPgBQCIgCAzAGQh9A7hDA0QhLA6gWAvQgbAqgMBLQgNBCgGAmQgKAqgXApQgNAZg2A6QgrAvgnAj");
	this.shape_42.setTransform(94.2,37.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFB430").s().p("AicFYQhfAigtADQhGAGhNgmQh7h4gKgTQgeg2gXhqQgVhsgJghQgPg4gNgcQgRgmgfgfQgsgthFg7QBmgKCOgKQEbgWDFgEQDEgDGAAlQA/AGCPgBQCIgCAzAGQh9A7hDA0QhLA6gWAvQgbAqgMBNQgNBAgGAmQgKAqgXApQgNAZg2A6QgrAvgnAjQhzA9h3AAIgCAAQhrAAiFgzg");
	this.shape_43.setTransform(94.2,39.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#C16122").ss(3,1,1).p("Am7F0QhGhDgMgNQgvgvgHgMQgdg2gXhpQgVhsgJghQgPg5gNgbQgRglgfgfQgsgthHg8QBngKCPgLQEdgWDFgEQDEgDGAAlQBAAGCQgBQCKgBAzAGQiUBGg9AzQhFA6gUAxQgVAogNBPQgPBJgFAcQgJAkgZAtQgQAcg4A5QgyAzgYAV");
	this.shape_44.setTransform(94.2,37.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFB430").s().p("Aj8FUQhBAVgcADQgsAGg1gcIhShQQgwgvgGgMQgeg2gXhpQgVhsgJghQgPg5gNgbQgRglgfgfQgsgthHg8QBngKCPgLQEdgWDFgEQDFgDF/AlQBAAGCQgBQCKgBAzAGQiVBGg8AzQhFA6gUAxQgWAogMBRQgPBHgEAcQgKAkgZAtQgQAcg4A5QgyAzgYAVQiJBIiRABIgEAAQiFAAiag+g");
	this.shape_45.setTransform(94.2,40.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#C16122").ss(3,1,1).p("Am5F1QiDh8gJgRQgeg2gWhpQgWhsgJghQgPg5gLgbQgRgkgggfQgsgthJg9QBogKCRgLQEfgWDFgEQDEgDGAAlQA/AGCTgBQCLgBAzAHQisBRg3AyQg/A5gRA1QgQAlgMBUQgRBOgEATQgIAfgcAwQgRAfg8A3IhDA7");
	this.shape_46.setTransform(94.1,37.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFB430").s().p("AlbFQQgNABggAMQgTAIgegTQiDh7gJgRQgdg2gXhqQgWhsgIghQgPg4gMgbQgSgkgfgfQgsgthJg9QBpgLCQgKQEfgWDFgEQDEgEF/AmQBAAGCTgBQCLgBAzAGQisBSg3AyQg/A5gRA0QgQAmgMBTIgVBhQgJAggbAwQgSAeg7A4IhDA6QihBUimADIgNAAQieAAiqhIg");
	this.shape_47.setTransform(94.1,40.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#C16122").ss(3,1).p("AmwF0QgdgZghgdQhAg7gOgaQgeg2gXhpQgVhsgJghQgPg4gMgbQgQgjgfgfQgtgthLg+QBpgLCRgLQEigWDFgEQDEgDGAAlQA/AGCVAAQCNgBAzAG");
	this.shape_48.setTransform(93,37.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#C16122").ss(3,1,1).p("AEOlVQjEBegxAwQg3A5gPA3QgKAjgOBYQgSBVgCAIQgJAbgdAzQgUAig+A2Ig8Av");
	this.shape_49.setTransform(153.3,38.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFB430").s().p("Am7FGQgdgYghgeQhAg7gOgZQgeg2gXhpQgVhsgJghQgPg5gMgaQgQgkgfgfQgtgthLg+QBpgKCRgLQEigWDFgEQDEgEGAAmQA/AGCVgBQCNgBAzAHQjDBdgxAxQg5A4gQA4QgKAjgNBXQgSBVgDAJQgIAagdA0QgUAhg/A2Ig7AvQjOBqjFAAQi4AAixhbg");
	this.shape_50.setTransform(94.1,41.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#C16122").ss(3,1,1).p("Am8F0QgugqgYgVQgpgmgaglQgQgXgOgrQgJgdgNhBQgWhsgJghQgPg4gLgbQgRgkgggfQgsgthJg9QBogLCRgKQEfgWDFgEQDEgEGAAmQA/AGCTgBQCLgBAzAGQisBSg3AyQg/A5gRA0QgQAmgMBTQgRBPgEASQgIAggcAwQgRAeg8A4QgcAZghAb");
	this.shape_51.setTransform(94.1,37.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFB430").s().p("AlbFRQgJAAgmAMQgTAGgfgSIhGg/QgpgmgaglQgQgXgNgrQgKgdgNhBQgWhsgIghQgPg4gMgbQgSgkgfgfQgsgthJg9QBpgLCQgKQEfgWDFgEQDEgEF/AmQBAAGCTgBQCLgBAzAGQisBSg3AyQg/A5gRA0QgQAmgMBTIgVBhQgJAggbAwQgSAeg7A4Ig9A0QiuBaiyAAQieAAikhFg");
	this.shape_52.setTransform(94.1,40.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#C16122").ss(3,1,1).p("Am9FzQgygqgYgVQgqgkgSgmQgghFgUhaQgVhsgJghQgPg5gNgbQgRglgfgfQgsgthHg8QBngKCPgLQEdgWDFgEQDEgDGAAlQBAAGCQgBQCKgBAzAGQiUBGg9AzQhFA6gUAxQgVAogNBPQgPBJgFAcQgJAkgZAtQgQAcg4A5QgsAqgfAc");
	this.shape_53.setTransform(94.2,37.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFB430").s().p("Aj8FUIheAYQgtAFg1gdIhLg+QgqglgRgmQghhEgUhbQgVhsgJghQgPg4gNgcQgRglgfgfQgsgthHg8QBngKCPgLQEdgVDFgEQDFgEF/AmQBAAGCQgBQCKgCAzAHQiVBGg8AyQhFA6gUAyQgWAogMBRQgPBGgEAdQgKAkgZAtQgQAbg4A5QgsArgeAbQiKBJiQABIgGAAQiFAAiYg9g");
	this.shape_54.setTransform(94.2,40.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#C16122").ss(3,1,1).p("Am7F2Qh2h0gPgbQgeg2gXhpQgVhsgJghQgPg5gNgcQgRglgfgfQgsgthFg7QBmgKCOgLQEbgVDFgEQDEgEGAAmQA/AGCPgCQCIgCAzAHQh9A6hDA0QhLA7gWAuQgbArgMBLQgNBBgGAnQgKApgXAqQgNAYg2A7QgrAugnAj");
	this.shape_55.setTransform(94.2,37.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFB430").s().p("AicFYQhiAjgrAEQhGAHhMgmQh2hzgPgbQgeg2gXhqQgVhsgJghQgPg4gNgcQgRgmgfgfQgsgthFg7QBmgKCOgKQEbgWDFgEQDEgDGAAlQA/AGCPgBQCIgCAzAGQh9A7hDA0QhLA6gWAvQgbAqgMBNQgNBAgGAmQgKAqgXApQgNAZg2A6QgrAvgnAjQhzA9h3AAIgCAAQhrAAiFgzg");
	this.shape_56.setTransform(94.2,39.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#C16122").ss(3,1,1).p("Am8F0Qg+g+gSgTQgqgsgIgOQgdg2gXhpQgVhsgJghQgPg5gOgdQgRgmgegeQgtgthCg6QBlgKCMgLQEZgVDFgEQDEgEGAAmQBAAGCMgCQCGgCAzAGQhmAvhJA1QhQA8gYArQghAtgLBIQgMA6gHAwQgLAvgUAmQgMAVgyA8QgfAjg7A6");
	this.shape_57.setTransform(94.2,37.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFB430").s().p("Am8FeIhRhRQgpgsgIgOQgdg2gXhpQgWhsgIghQgQg5gNgdQgRgmgfgeQgsgthCg6QBkgKCNgLQEZgVDFgEQDEgEF/AmQBAAGCNgCQCGgCAzAGQhmAvhJA1QhRA8gXArQghAtgLBIQgMA6gHAwQgLAvgUAmQgMAVgzA8QgeAjg7A6QhdAzhfgBQhQgBhxgoQhtAthOAEIgRAAQhXAAhcgrg");
	this.shape_58.setTransform(94.2,39.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#C16122").ss(3,1,1).p("Am8F1QhwhygQgcQgdg2gXhpQgVhsgJghQgPg5gNgdQgSgngfgeQgsgthAg5QBkgKCLgLQEWgVDGgEQDEgDF/AlQBAAHCLgDQCEgCAyAGQhOAjhPA2QhWA9gaAoQgmAwgMBEQgKAzgHA6QgMAzgSAjQgKATgvA9QgaAihHBH");
	this.shape_59.setTransform(94.2,37.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFB430").s().p("Am8FbQhwhygQgcQgdg2gXhpQgVhsgJghQgPg5gNgdQgSgngfgeQgsgthAg5QBkgKCLgLQEWgVDGgEQDEgDF/AlQBAAHCLgDQCEgCAyAGQhOAjhPA2QhWA9gaAoQgmAwgMBEQgKAzgHA6QgMAzgSAjQgKATgvA9QgaAihHBHQhGAnhHgCQgxgChhgdQh+A6hrAFIgVAAQhuAAhxg0g");
	this.shape_60.setTransform(94.2,40);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#C16122").ss(3,1,1).p("AnDFxQhlhngRgfQgeg2gXhqQgVhsgJghQgPg4gNgeQgSgngfgfQgtgtg9g4QBjgKCKgKQEUgVDFgEQDEgDGAAlQBAAHCIgDQCCgDAzAHQg2AXhVA3QhdA9gcAmQgsAygLA/QgJAtgIBFQgMA4gQAfQgIAQgsA/QgKAOgkAoQghAmgZAa");
	this.shape_61.setTransform(94.3,37);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFB430").s().p("AnDFQQhlhngRgfQgeg2gXhqQgVhsgJghQgPg4gNgeQgSgngfgfQgtgtg9g4QBjgKCKgKQEUgVDFgEQDEgDGAAlQBAAHCIgDQCCgDAzAHQg2AXhVA3QhdA9gcAmQgsAygLA/QgJAvgIBDQgMA4gQAfQgIAQgsA/QgKAOgkAoQghAmgZAaQgwAcgugEIhigWQiOBFiNACIgIAAQiNAAiThCg");
	this.shape_62.setTransform(94.3,40.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#C16122").ss(3,1,1).p("AnFFxQhdhggVgnQgeg2gXhpQgVhsgJghQgPg5gOgeQgSgogegfQgtgtg7g3QBhgJCKgLQERgUDGgEQDEgEGAAmQA/AGCHgDQCAgDAzAGQgfAMhbA4QhjA+geAjQgxA0gLA8QgIAogIBMQgNA9gOAdQgGAMgpBBQgQAahgBl");
	this.shape_63.setTransform(94.3,37);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFB430").s().p("AnFFMQhdhggVgnQgeg2gWhqQgWhsgJghQgPg5gOgeQgRgogfgeQgtgtg7g3QBigKCJgKQESgVDFgEQDEgDF/AlQBBAHCGgDQCAgEAzAHQgfALhbA5QhiA+gfAiQgxA1gLA7QgHAogJBNQgNA9gOAcQgFANgpBAQgRAahgBmQgaASgVgGQgngKgJAAQioBTisAAQilAAishLg");
	this.shape_64.setTransform(94.3,40.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#C16122").ss(3,1,1).p("Am+F1QgEgEgFgFQhHhLgagoQgHgKgFgJQgWgqgUhPQgFgSgEgUQgThhgJgjQgRhAgNgdQgTgrgegeQgBgBAAAAQgsgtg4g2QBZgJB9gKQEJgUC8gFQARAAAQgBQC/gDFsAkQAMABALABQA8AFB1gCQAJAAAKgBQBugDA1AFQAGAAAEACQgJABheA4QhoA/ggAfQgHAGgFAGQgtAxgKAwQgDAMgDAQQgFAjgHA5QgEASgDAPQgJAngJATQgCAHgNAXQgJAQgQAdQgHALgKAOQgUAcghAmQgYAYgXAZ");
	this.shape_65.setTransform(94.5,37.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFB430").s().p("Am+FNIgJgJQhGhMgbgoQgHgJgFgJQgWgrgUhOIgIgnQgUhggJgkQgRhAgNgdQgTgrgegeIgBgBQgsgsg4g2QBZgJB9gKQEKgVC6gEIAigBQC/gDFsAjIAYACQA7AGB1gDIATAAQBvgDAzAEQAHABAEACQgKABhdA3QhoA/ggAgIgMAMQgtAwgKAwIgGAdIgMBbIgHAhQgKAogHATQgDAHgNAXIgaAtIgQAZQgUAcghAlIgvAxQjCBkjIAAQi1AAi9hRg");
	this.shape_66.setTransform(94.5,41.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#C16122").ss(3,1,1).p("Am+F2QgFgFgFgEQhFhMgbgoQgGgJgFgKQgVgqgUhPQgEgTgFgUQgThggJgjQgRhBgMgcQgUgrgdgeQgBAAAAgBQgtgsg3g2QBZgKB9gKQEIgVC8gEQARgBARAAQC+gDFrAjQALABANABQA8AGB0gDQAJAAAKAAQBugDAzAFQAFAAADACQgNAEhaA1QhnA/ghAfQgGAGgGAGQgsAwgNAwQgDALgCARQgGAhgIA6QgDARgEAQQgJAngHATQgEAJgLAVQgIAOgSAgQgHALgJANQgUAdggAmQgXAYgXAa");
	this.shape_67.setTransform(94.7,37.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFB430").s().p("Am+FNIgKgJQhFhMgagnIgLgTQgWgqgThQIgKgmQgThhgJgjQgRhAgMgcQgTgrgegeIgBgBIhkhiQBagKB8gKQEJgWC7gEIAigBQC+gCFrAjIAXACQA8AFB1gCIATgBQBugDAzAFQAGABABACQgMADhaA2QhnA+ghAgIgMALQgsAwgNAwIgFAcQgHAigHA5IgHAiQgJAngHATQgEAJgLAVIgaAtIgQAZQgUAdghAlIgtAyQjCBkjIAAQi1AAi7hRg");
	this.shape_68.setTransform(94.7,41.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#C16122").ss(3,1,1).p("AnDF0IgFgEQhFhNgZgoQgGgJgFgKQgUgqgUhQQgFgTgEgTQgUhhgJgiQgRhBgMgbQgTgrgdgeQgBAAAAgBQgsgsg3g2QBZgKB8gLQEHgWC8gEQARgBARAAQDAgCFoAjQALABAMABQA9AFBzgCQAKgBAJAAQBvgDAyAFQAEABAAADQgPAFhXA0QhmA+giAfQgGAGgFAGQgtAvgOAvQgDAMgDAQQgHAggIA7QgDARgDAQQgJAngIAUQgDAKgLATQgGAMgTAiQgHALgJAOQgUAdggAmQgVAYgXAa");
	this.shape_69.setTransform(94.9,37.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFB430").s().p("AnDFLIgFgEQhFhMgZgoQgGgJgFgLQgUgpgUhRIgJgmQgUhhgJghQgRhCgMgaQgTgsgdgdIgBgBIhjhjQBZgKB8gKQEHgWC8gFIAiAAQDAgDFoAkIAXACQA9AFBzgDIATAAQBvgDAyAFQABAAABAAQABAAAAABQABAAAAABQAAAAAAABQgPAFhXA0QhmA+giAgIgLALQgtAwgOAvIgGAbQgHAhgIA6IgGAiQgJAmgIAUQgDAKgLAUIgZAtIgQAZQgUAdggAmIgsAzQi3BdjAAEIgPAAQi5AAi+hSg");
	this.shape_70.setTransform(94.9,41.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#C16122").ss(3,1,1).p("AnKFyQhDhMgagpQgFgIgFgMQgTgogUhSQgEgTgFgSQgUhigJggQgRhCgLgaQgTgrgdgeQgBAAAAgBQgsgtg2g1QBYgLB8gLQEGgWC9gFQARAAARAAQDAgCFmAjQALABAMABQA9AFBzgDQAJAAAKAAQBvgDAxAFQADAAgDAEQgRAHhUAyQhlA+gjAgQgGAFgFAGQgtAvgPAuQgEAMgDAPQgHAggJA7QgDARgDAQQgJAmgHAVQgEAMgJARQgGALgUAjQgGALgJAOQgUAegfAmQgUAZgXAa");
	this.shape_71.setTransform(95.2,37.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFB430").s().p("AnKFJQhDhNgagoQgFgJgFgLQgTgpgUhRIgJgmQgUhhgJghQgRhCgLgaQgTgrgdgdIgBgBIhihjQBYgKB8gLQEGgXC9gEIAigBQDAgCFmAjIAXACQA9AFBzgCIATgBQBvgDAxAGQABAAAAAAQABAAAAABQgBAAAAABQAAABgBABQgRAGhUAzQhlA9gjAgIgLALQgtAvgPAvIgHAbQgHAfgJA8IgGAhQgJAmgHAUQgEAMgJASIgaAtIgPAaQgUAdgfAmIgrAzQi2BdjDADIgIAAQi+AAjChTg");
	this.shape_72.setTransform(95.2,41.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#C16122").ss(3,1,1).p("AnMFzQhChNgZgpQgFgIgFgMQgSgogUhTQgEgTgEgSQgWhigIgfQgShDgKgYQgSgsgdgdQgBgBAAAAQgtgtg0g2QBXgLB8gLQEFgXC9gEQARgBARAAQDAgBFlAjQALABAMABQA+AEBxgDQAJAAAKAAQBvgDAxAGQABAAgFAEQgTAJhRAxQhkA9gjAgQgHAFgFAFQgtAvgQAuQgFAMgDAOQgHAfgKA8QgDARgDAQQgIAmgHAVQgFAOgIAPQgEAJgVAlQgHALgJAOQgTAfgeAlQgUAagWAa");
	this.shape_73.setTransform(95.5,37.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFB430").s().p("AnMFKQhChNgZgpQgFgIgFgMQgSgogUhTIgIglQgWhigIgfQgShDgKgYQgSgsgdgdIgBgBIhhhjQBXgLB8gLQEFgXC9gEIAigBQDAgBFlAjIAXACQA+AEBxgDIATAAQBvgDAxAGQABAAgFAEQgTAJhRAxQhkA9gjAgIgMAKQgtAvgQAuQgFAMgDAOQgHAfgKA8IgGAhQgIAmgHAVQgFAOgIAPIgZAuIgQAZQgTAfgeAlIgqA0Qi2BdjCADIgNAAQi7AAjAhSg");
	this.shape_74.setTransform(95.5,41.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#C16122").ss(3,1,1).p("AnOF0QhChOgYgoQgEgIgGgNQgQgngUhVQgFgSgEgSQgWhjgIgeQgShDgJgYQgSgrgdgdQAAgBgBAAQgsgtg0g2QBWgLB9gMQEDgYC9gEQARAAASgBQDBAAFiAiQALABANABQA+AFBwgDQAJAAAKgBQBvgCAwAFQAAABgHAFQgWAKhOAvQhjA9gkAgQgGAFgFAFQgtAugSAtQgFANgDANQgIAfgKA8QgDAQgDASQgIAlgHAVQgFAQgHANQgDAHgWAnQgHALgJAPQgTAfgcAlQgUAagWAb");
	this.shape_75.setTransform(95.8,37.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFB430").s().p("AnOFLQhChNgYgpIgKgVQgQgngUhUIgJglQgWhigIgeQgShEgJgXQgSgsgdgdIgBgBIhghjQBWgLB9gMQEDgXC9gEIAjgBQDBgBFiAjIAYACQA+AEBwgDIATAAQBvgDAwAGIgHAFQgWALhOAvQhjA8gkAgIgLALQgtAugSAtQgFAMgDAOQgIAegKA9IgGAhQgIAlgHAWQgFAPgHAOIgZAuIgQAZQgTAfgcAmIgqA1Qi1BcjCADIgLAAQi8AAjAhRg");
	this.shape_76.setTransform(95.8,41.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#C16122").ss(3,1,1).p("AnRF1QhAhPgXgoQgFgIgFgOQgPgmgUhVQgFgTgEgSQgWhigIgeQgShEgJgWQgSgsgdgdQAAAAgBgBQgsgsgzg2QBWgMB8gMQECgZC+gEQARAAASAAQDBgBFhAjQAKABANABQA+AEBwgDQAJAAAJAAQBwgDAvAGQgBAAgKAGQgYAMhLAuQhhA8glAgQgGAFgFAFQgtAtgUAtQgFAMgEAOQgIAdgLA9QgCAQgDASQgIAkgHAXQgFAQgGAMQgCAFgXApQgHAMgIAOQgTAfgcAmQgTAagWAc");
	this.shape_77.setTransform(96.2,37.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFB430").s().p("AnFFRIgMgGQhAhOgXgpQgFgHgFgOQgPgngUhVIgJgkQgWhjgIgdQgShEgJgWQgSgsgdgdIgBgBQgsgtgzg2QBWgMB8gMQECgYC+gEIAjgBQDBAAFhAjIAXACQA+AEBwgDIASgBQBwgCAvAGIgLAFQgYANhLAtQhhA8glAgIgLAKQgtAugUAtQgFAMgEANQgIAdgLA+IgFAhQgIAlgHAWQgFARgGAMIgZAuIgPAZQgTAggcAmIgpA1QjBBjjHAAQiyAAi3hNg");
	this.shape_78.setTransform(96.2,41.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#C16122").ss(3,1,1).p("AnSF1QgyhBgYgmQgGgJgEgJQgNgYgYhkQgDgLgCgMQgYhpgKgnQgDgMgCgHQgLgqgHgZQgFgPgDgJQgMgcgRgWQgJgMgLgLQgsgsg1g0QBUgMB7gNQD4gYDDgFQDIgDF1AkQBMAHB3gDQAIAAAJAAQBrgDA0AFQAIABAFABQgOAEhiA7QhxBDgjAgQgRAPgMAQQgjAogNApQgGAQgFAZQgHAfgHA0QgFAXgEATQgIAfgGAPQgCAGgQAeQgIAOgMAXQgGAKgHAMQgbAvgqA5");
	this.shape_79.setTransform(96.4,37.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#C16122").ss(3,1,1).p("AnQF1QgyhBgYgnQgFgJgFgKQgMgagXhiQgCgLgDgMQgYhtgIgjQgDgMgCgIQgLgrgIgYQgEgPgEgJQgMgcgSgWQgIgMgMgKQgrgrg5gzIAAAAQBVgMB7gNQD4gYDDgFQDKgDF1AkQBMAHB2gDQAJAAAJAAQBsgDAzAFQAFACADABQgWAIhaA1QhxBAglAgQgSAQgMAOQgiAogOApQgGARgFAYQgHAegIA1QgEAXgEATQgHAfgGAQQgDAIgPAbQgGAOgMAYQgFALgHAMQgZAwgqA5");
	this.shape_80.setTransform(96.3,37.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#C16122").ss(3,1,1).p("AnOF1QgxhCgYgnQgFgJgEgLQgNgcgVhhQgDgLgCgLQgYhygIgfQgDgLgCgJQgLgrgHgYQgFgPgEgKQgMgcgSgVQgJgMgMgKQgrgqg7gxIgBgBQBVgMB8gMQD4gZDEgEQDJgDF2AkQBNAHB2gDQAJAAAJAAQBtgDAyAFQACACABACQgeALhSAvQhwA+goAgQgSAPgMAOQgkAogOApQgHARgEAXQgHAdgHA3QgEAWgEAUQgHAegGARQgDALgMAYQgHAOgLAZQgFAKgGANQgYAxgpA6");
	this.shape_81.setTransform(96.2,37.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFB430").s().p("AnOFfQgxhDgYgnQgFgIgEgLQgNgdgVhgIgFgXIggiRIgFgTQgLgsgHgYIgJgYQgMgcgSgWQgJgLgMgLQgrgpg7gyIgBAAQBVgMB8gNQD4gYDEgFQDJgDF2AkQBNAHB2gDIASAAQBtgDAyAFQAAABABAAQAAABABAAQAAABAAAAQABABAAAAQgeAMhSAvQhwA+goAgQgSAPgMAOQgkAngOApQgHARgEAYQgHAfgHA0IgIArQgHAegGARQgDALgMAYIgSAmIgLAXQgYAxgpA7QiAAjifAUQhtANhdAAQiqAAhqgtg");
	this.shape_82.setTransform(96.2,39.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#C16122").ss(3,1,1).p("AnNF1QgxhCgXgoQgFgIgFgMQgMgfgUhfQgCgLgDgLQgYh2gHgbQgCgMgCgIQgLgtgIgXQgEgPgFgKQgMgcgTgVQgKgLgLgLQgrgog+gwIgBgBQBVgMB8gMQD5gZDEgEQDKgDF2AkQBNAHB3gDQAIAAAJAAQBugDAyAFQgBADgBACQgnAPhJApQhwA7gqAhQgTAPgMAMQgkAogPApQgHASgFAWQgFAfgIA1QgDAWgEAVQgHAdgFASQgEANgKAWQgGANgLAaQgFALgGAMQgWAygnA7");
	this.shape_83.setTransform(96.2,37.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#C16122").ss(3,1,1).p("AnOF2QgvhEgYgoQgFgHgEgNQgMgigUhdQgCgLgCgLQgYh6gGgYQgDgLgCgIQgLgugHgXQgFgOgEgLQgNgcgTgVQgKgLgMgKQgrgnhBgvIAAgBQBVgMB8gMQD6gZDEgEQDLgDF2AkQBOAHB2gDQAJAAAIAAQBvgDAxAFQgDADgEADQguAThBAjQhwA5gtAgQgUAPgKAMQglAngQApQgHASgFAWQgFAegHA2QgEAVgDAWQgGAdgGASQgEARgIATQgGAMgLAbQgFALgFANQgUAzgmA8");
	this.shape_84.setTransform(96.3,37.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFB430").s().p("AnOFfQgwhDgXgpQgFgHgEgNQgMghgUheIgDgWQgZh6gGgXIgEgUQgLgtgIgYQgEgOgFgLQgNgcgTgVIgVgVQgrgnhBgvIgBAAQBVgMB8gNQD6gZDDgEQDMgDF2AlQBOAGB2gDIARAAQBvgDAxAGIgHAGQguAThCAjQhvA4gsAhQgVAOgLAMQgkAngRAqQgGASgFAVQgGAegGA3IgHArQgGAcgGATQgEAQgJATIgPAnIgLAYQgUAzgmA8QiBAlifAUQhxAPhfAAQimAAhpgtg");
	this.shape_85.setTransform(96.3,39.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#C16122").ss(3,1,1).p("AnPF2QgvhEgXgpQgEgHgFgOQgLgkgShcQgCgLgDgKQgYh/gFgTQgCgLgCgJQgLgugIgXQgEgOgGgMQgNgcgTgUQgKgKgMgLQgrglhDguIgBgBQBVgMB8gMQD6gZDFgEQDLgDF3AlQBOAGB2gDQAJAAAIAAQBwgDAwAFQgGAEgGADQg2AXg5AdQhuA2gwAhQgVAOgLALQglAngQApQgIATgEAUQgFAegIA3QgCAVgDAWQgHAdgFATQgFATgGAQQgFAMgKAcQgEALgGANQgSA1gmA8QABAAgDAE");
	this.shape_86.setTransform(96.4,37.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFB430").s().p("AnPFPQgvhEgXgoQgEgHgFgOQgLgkgShcIgFgWQgYh+gFgTIgEgUQgLgvgIgXQgEgOgGgLQgNgcgTgUIgWgVQgrgmhDgtIgBgBQBVgMB8gNQD6gZDFgEQDLgCF3AkQBOAGB2gDIARAAQBwgDAwAGIgMAHQg2AXg5AdQhuA1gwAhQgVAPgLALQglAmgQAqQgIASgEAVIgNBVIgFArIgMAwQgFATgGAQIgPAoIgKAYQgSA0gmA8QAAAAAAAAQAAABAAAAQAAABAAAAQgBABgBABQi5Bfi9AHIgeAAQi0AAi1hNg");
	this.shape_87.setTransform(96.4,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_15},{t:this.shape_79}]},1).to({state:[{t:this.shape_13},{t:this.shape_80}]},1).to({state:[{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_9},{t:this.shape_83}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// Bras gauche
	this.instance = new lib.Interpoler7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150.4,112.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46));

	// Bras droit
	this.instance_1 = new lib.Interpoler10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.2,115.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(46));

	// Ventre
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#C16122").ss(3,1,1).p("AF6oNIAvAOQArAbAhAhQBtBrgXCEQgLBAAIBtQAFA7AKB5QAFBmgVA9QgaBMhHAkQiEBCh2AYQhRAQiCAEQhtADiOgXQiVgZhagnQgjgPgLgMQgLgLABgSQANg4gFhBQgdg0gYhKQgwiRAWhtQAWhuAZhsIAUhXQAugfAmgfIAdgZ");
	this.shape_88.setTransform(88.4,125.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFB430").s().p("AjiI9QiVgZhagnQgjgPgLgMQgLgLABgSQANg4gFhBQgdg0gYhKQgwiTAWhrQAWhuAZhsIAUhXQAugfAmgfIAdgZIgDgCQDAiTDCgDQDAgEDXCKIAvAOQArAbAhAhQBtBrgXCEQgLBAAIBrIAPC2QAFBmgVA9QgaBMhHAkQiEBCh2AYQhRAQiCAEIgZAAQhlAAh9gUg");
	this.shape_89.setTransform(88.4,118.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#C16122").ss(3,1,1).p("ApQgxQAWhsAYhsIAUhWQAtggAkgdIAdgaQC9iUC+gHQAEAAAFAAQC6gDDRCCQAGAEAGAEIAgAKQAHACAHACQAlAXAdAbQAGAFAFAFQBkBjgNB6QgBAJgBAJQgLA8AHBhQABAHAAAHQAFA8AKB0QAFBsgVA9QgaBNhHAjQgBABgCABQiBBAh1AYQhRARh/ADQgCAAgCAAQhqADiJgWQgEAAgEgBQiOgXhYglQgFgCgFgCQgigPgLgMQgJgKgBgOQAAgCAAgDQANg5gFhBQgBgCgBgCQgcgzgXhGQAAgCgBgBQgviSAWhqg");
	this.shape_90.setTransform(88.4,119);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFB430").s().p("AjaI+IgIgBQiOgXhYglIgKgEQgigPgLgMQgJgKgBgOIAAgFQANg5gFhBIgCgEQgcgzgXhGIgBgDQgviSAWhqQAWhsAYhsIAUhWQAtggAkgdIAdgaQC9iUC+gHIAJAAQC6gDDRCCIAMAIIAgAKIAOAEQAlAXAdAbIALAKQBkBjgNB6IgCASQgLA8AHBhIABAOIAPCwQAFBsgVA9QgaBNhHAjIgDACQiBBAh1AYQhRARh/ADIgEAAIgZABQhiAAh4gUg");
	this.shape_91.setTransform(88.4,119);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#C16122").ss(3,1,1).p("ApQgxQAWhsAYhsIAUhWQAtggAlgdIAcgaQC9iUC+gHQAEAAAFAAQC7gDDQCCQAGAEAGAEIAhAKQAHACAHACQAkAXAdAbQAGAFAFAGQBlBjgOB5QgBAJgBAKQgLA8AHBhQABAGAAAIQAFA7AKB1QAFBsgVA9QgaBNhHAjQgBABgCABQiBBAh1AYQhRAQiAAEQgBAAgCAAQhrADiIgWQgEgBgEAAQiOgXhYglQgFgCgFgCQgigPgLgNQgJgJgBgOQAAgDAAgDQANg5gFhAQgBgCgBgCQgcgzgXhHQAAgCgBgBQgviSAWhqg");
	this.shape_92.setTransform(88.4,119);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFB430").s().p("AjaI/IgIgBQiOgXhYglIgKgEQgigPgLgNQgJgJgBgOIAAgGQANg5gFhAIgCgEQgcgzgXhHIgBgDQgviSAWhqQAWhsAYhsIAUhWQAtggAlgdIAcgaQC9iUC+gHIAJAAQC7gDDQCCIAMAIIAhAKIAOAEQAkAXAdAbIALALQBlBjgOB5IgCATQgLA8AHBhIABAOIAPCwQAFBsgVA9QgaBNhHAjIgDACQiBBAh1AYQhRAQiAAEIgDAAIgZAAQhiAAh4gTg");
	this.shape_93.setTransform(88.4,119);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#C16122").ss(3,1,1).p("ApQgxQAWhtAYhrIAUhXQAuggAkgdIAcgaQC9iUC+gGQAFAAAEAAQC7gDDQCCQAHAEAGAEIAgAKQAHACAHACQAkAXAeAbQAFAFAFAFQBlBkgOB6QgBAJgCAJQgKA8AHBhQABAHAAAHQAFA8AKB0QAEBsgUA9QgaBNhHAjQgBABgCABQiBBBh2AYQhQAQiAADQgCAAgCAAQhqADiJgWQgEAAgDgBQiOgXhYglQgFgCgFgCQgigPgMgNQgIgKgBgOQAAgCAAgDQANg5gFhBQgBgCgBgCQgcgzgXhGQAAgCgBgBQgviSAWhqg");
	this.shape_94.setTransform(88.4,119);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFB430").s().p("AjbI/IgHgBQiOgXhYglIgKgEQgigPgMgNQgIgKgBgOIAAgFQANg5gFhBIgCgEQgcgzgXhGIgBgDQgviSAWhqQAWhtAYhrIAUhXQAuggAkgdIAcgaQC9iUC+gGIAJAAQC7gDDQCCIANAIIAgAKIAOAEQAkAXAeAbIAKAKQBlBkgOB6IgDASQgKA8AHBhIABAOIAPCwQAEBsgUA9QgaBNhHAjIgDACQiBBBh2AYQhQAQiAADIgEAAIgYAAQhiAAh5gTg");
	this.shape_95.setTransform(88.4,119);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#C16122").ss(3,1,1).p("ApQgyQAWhsAYhsIAUhWQAuggAkgeIAcgZQC+iUC9gHQAFAAAFAAQC6gDDRCDQAGAEAGADIAhAKQAHADAGACQAlAWAdAcQAGAFAFAFQBkBkgOB6QgBAJgCAJQgKA8AHBhQABAHAAAHQAFA8AKB1QAEBrgUA9QgaBNhHAkQgBABgCABQiBBAh2AYQhQAQiAAEQgCAAgCAAQhqADiJgXQgEAAgEgBQiOgXhYglQgFgCgFgCQghgPgMgNQgIgKgBgOQAAgCAAgDQANg6gFhAQgBgCgBgCQgcgzgXhHQAAgBgBgCQgviSAWhqg");
	this.shape_96.setTransform(88.4,119.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFB430").s().p("AjbI/IgIgBQiOgXhYglIgKgEQghgPgMgNQgIgKgBgOIAAgFQANg6gFhAIgCgEQgcgzgXhHIgBgDQgviSAWhqQAWhsAYhsIAUhWQAuggAkgeIAcgZQC+iUC9gHIAKAAQC6gDDRCDIAMAHIAhAKIANAFQAlAWAdAcIALAKQBkBkgOB6IgDASQgKA8AHBhIABAOIAPCxQAEBrgUA9QgaBNhHAkIgDACQiBBAh2AYQhQAQiAAEIgEAAIgYAAQhiAAh5gUg");
	this.shape_97.setTransform(88.4,119.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#C16122").ss(3,1,1).p("ApQgyQAWhtAYhsIAUhWQAuggAkgdIAcgaQC+iUC+gGQAEAAAFAAQC7gDDQCDQAGADAHAEIAgAKQAHACAHADQAkAWAeAcQAFAFAFAFQBkBkgOB6QgBAJgCAJQgKA8AHBhQABAHAAAHQAFA8AKB1QAEBrgUA+QgaBNhHAjQgBABgCABQiBBBh2AXQhQAQiAAEQgCAAgCAAQhqADiJgWQgEgBgEAAQiOgYhYglQgFgCgFgCQghgPgMgNQgIgKgBgOQAAgDAAgDQANg5gFhAQgBgCgBgDQgbgzgYhGQAAgCgBgBQgviSAWhqg");
	this.shape_98.setTransform(88.4,119.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFB430").s().p("AjbJAIgIgBQiOgYhYglIgKgEQghgPgMgNQgIgKgBgOIAAgGQANg5gFhAIgCgFQgbgzgYhGIgBgDQgviSAWhqQAWhtAYhsIAUhWQAuggAkgdIAcgaQC+iUC+gGIAJAAQC7gDDQCDIANAHIAgAKIAOAFQAkAWAeAcIAKAKQBkBkgOB6IgDASQgKA8AHBhIABAOIAPCxQAEBrgUA+QgaBNhHAjIgDACQiBBBh2AXQhQAQiAAEIgEAAIgWAAQhiAAh7gTg");
	this.shape_99.setTransform(88.4,119.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#C16122").ss(3,1,1).p("ApQgzQAWhsAYhsIAUhWQAuggAkgeIAdgZQC9iUC+gHQAFAAAEAAQC7gDDRCDQAGAEAGAEIAhAKQAHACAGACQAlAXAdAcQAFAFAGAFQBkBkgPB6QgBAJgCAJQgKA8AHBhQABAHAAAHQAFA8AKB1QAEBrgUA+QgaBNhHAkQgBABgCABQiBBAh2AYQhQAQiAADQgCAAgCAAQhqADiJgWQgEAAgEgBQiOgYhYglQgFgCgFgCQgigPgLgOQgIgJgBgPQAAgCAAgDQANg6gFhAQgBgCgBgCQgbgzgYhHQAAgBgBgCQgviRAWhrg");
	this.shape_100.setTransform(88.4,119.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFB430").s().p("AjbJAIgIgBQiOgYhYglIgKgEQgigPgLgOQgIgJgBgPIAAgFQANg6gFhAIgCgEQgbgzgYhHIgBgDQgviRAWhrQAWhsAYhsIAUhWQAuggAkgeIAdgZQC9iUC+gHIAJAAQC7gDDRCDIAMAIIAhAKIANAEQAlAXAdAcIALAKQBkBkgPB6IgDASQgKA8AHBhIABAOIAPCxQAEBrgUA+QgaBNhHAkIgDACQiBBAh2AYQhQAQiAADIgEAAIgYABQhjAAh4gUg");
	this.shape_101.setTransform(88.4,119.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#C16122").ss(3,1,1).p("ApQgzQAWhtAYhsIAUhWQAuggAkgdIAdgaQC9iUC+gGQAFAAAFAAQC6gDDRCDQAGAEAHADIAgAKQAHADAHACQAkAXAdAcQAGAFAFAFQBkBkgPB6QgBAJgCAJQgKA8AHBiQABAGAAAHQAFA9AKB0QAEBsgUA9QgaBOhHAjQgBABgCABQiBBBh2AXQhQAQiAAEQgCAAgCAAQhqADiKgXQgEAAgDgBQiPgXhYgmQgFgCgFgCQghgPgLgOQgIgKgBgOQAAgCAAgDQANg6gFhAQgBgCgBgCQgbgzgYhHQAAgCgBgBQgviSAWhqg");
	this.shape_102.setTransform(88.4,119.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFB430").s().p("AjcJAIgHgBQiPgXhYgmIgKgEQghgPgLgOQgIgKgBgOIAAgFQANg6gFhAIgCgEQgbgzgYhHIgBgDQgviSAWhqQAWhtAYhsIAUhWQAuggAkgdIAdgaQC9iUC+gGIAKAAQC6gDDRCDIANAHIAgAKIAOAFQAkAXAdAcIALAKQBkBkgPB6IgDASQgKA8AHBiIABANIAPCxQAEBsgUA9QgaBOhHAjIgDACQiBBBh2AXQhQAQiAAEIgEAAIgYAAQhiAAh6gUg");
	this.shape_103.setTransform(88.4,119.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#C16122").ss(3,1,1).p("ApQg0QAWhtAYhrIAVhXQAtgfAkgeIAdgaQC+iUC+gGQAEAAAFAAQC7gCDRCDQAGADAGAEIAhAKQAGACAHADQAkAXAeAcQAFAFAFAFQBkBkgPB6QgCAJgBAJQgKA9AHBhQABAGAAAHQAFA9AKB0QAEBsgUA9QgaBOhHAkQgBABgCABQiCBAh1AYQhPAQiBADQgCAAgCAAQhqADiKgWQgEgBgEAAQiOgYhYgmQgFgCgFgCQghgPgLgOQgJgKAAgOQAAgDABgCQAMg7gFg/QgBgCgBgDQgbgzgXhGQgBgCAAgBQgwiSAWhqg");
	this.shape_104.setTransform(88.4,119.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFB430").s().p("AjcJBIgIgBQiOgYhYgmIgKgEQghgPgLgOQgJgKAAgOIABgFQAMg7gFg/IgCgFQgbgzgXhGIgBgDQgwiSAWhqIAAgBQAWhtAYhrIAVhXQAtgfAkgeIAdgaQC+iUC+gGIAJAAQC7gCDRCDIAMAHIAhAKIANAFQAkAXAeAcIAKAKQBkBkgPB6IgDASQgKA9AHBhIABANIAPCxQAEBsgUA9QgaBOhHAkIgDACQiCBAh1AYQhPAQiBADIgEAAIgYABQhiAAh6gUg");
	this.shape_105.setTransform(88.4,119.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#C16122").ss(3,1,1).p("ApQg0QAWhtAYhsIAVhWQAtggAkgeIAdgZQC+iUC+gGQAFAAAEAAQC7gDDRCEQAGADAGADIAhAKQAHADAHADQAkAXAdAbQAGAGAFAFQBjBkgQB6QgBAJgBAKQgKA8AHBhQABAGAAAHQAFA9AKB1QAEBrgUA+QgbBNhGAkQgBABgCABQiCBAh1AYQhPAQiBAEQgCAAgCAAQhqACiKgWQgEgBgEAAQiOgYhYgmQgFgCgFgCQghgPgLgOQgJgKAAgOQAAgDABgDQAMg6gFg/QgBgDgBgCQgbgzgXhHQgBgBAAgCQgwiSAWhqg");
	this.shape_106.setTransform(88.4,119.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFB430").s().p("AjcJBIgIgBQiOgYhYgmIgKgEQghgPgLgOQgJgKAAgOIABgGQAMg6gFg/IgCgFQgbgzgXhHIgBgDQgwiSAWhqIAAAAQAWhtAYhsIAVhWQAtggAkgeIAdgZQC+iUC+gGIAJAAQC7gDDRCEIAMAGIAhAKIAOAGQAkAXAdAbIALALQBjBkgQB6IgCATQgKA8AHBhIABANIAPCyQAEBrgUA+QgbBNhGAkIgDACQiCBAh1AYQhPAQiBAEIgEAAIgWAAQhiAAh8gUg");
	this.shape_107.setTransform(88.4,119.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#C16122").ss(3,1,1).p("ApQg0QAWhtAYhsIAVhWQAtggAlgeIAcgZQC+iUC+gGQAFAAAFAAQC7gDDQCEQAHADAGAEIAhAKQAGACAHADQAkAXAdAcQAGAFAFAFQBjBkgQB7QgBAJgBAJQgKA8AHBhQABAHAAAHQAFA9AKB0QAEBsgUA9QgbBOhGAkQgBABgCABQiCBAh1AYQhPAQiCADQgBAAgCAAQhrADiKgWQgDgBgEAAQiPgYhYgmQgFgCgFgCQgggPgLgPQgJgKAAgOQAAgDABgDQAMg6gFg/QgBgDgBgCQgbgzgXhHQgBgBAAgCQgwiSAWhqg");
	this.shape_108.setTransform(88.4,119.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFB430").s().p("AjdJCIgHgBQiPgYhYgmIgKgEQgggPgLgPQgJgKAAgOIABgGQAMg6gFg/IgCgFQgbgzgXhHIgBgDQgwiSAWhqIAAAAQAWhtAYhsIAVhWQAtggAlgeIAcgZQC+iUC+gGIAKAAQC7gDDQCEIANAHIAhAKIANAFQAkAXAdAcIALAKQBjBkgQB7IgCASQgKA8AHBhIABAOIAPCxQAEBsgUA9QgbBOhGAkIgDACQiCBAh1AYQhPAQiCADIgDAAIgYAAQhjAAh6gTg");
	this.shape_109.setTransform(88.4,119.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#C16122").ss(3,1,1).p("ApQg1QAWhtAYhsIAVhWQAtggAlgdIAcgaQC+iUC/gGQAEAAAFAAQC7gCDRCEQAGADAGADIAhAKQAHADAGADQAlAXAdAcQAFAFAFAFQBkBkgRB7QgBAJgBAJQgKA9AHBhQABAGAAAHQAFA9AKB1QAEBrgUA+QgbBOhGAjQgBABgCABQiCBBh1AXQhPAQiCAEQgCAAgBAAQhrADiKgXQgEgBgDAAQiPgYhYgmQgFgCgFgCQgggPgLgPQgJgKAAgOQAAgDABgDQAMg7gFg+QgBgDAAgCQgcgzgXhHQgBgCAAgBQgwiSAWhqg");
	this.shape_110.setTransform(88.4,119.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFB430").s().p("AjdJCIgHgBQiPgYhYgmIgKgEQgggPgLgPQgJgKAAgOIABgGQAMg7gFg+IgBgFQgcgzgXhHIgBgDQgwiSAWhqIAAgBQAWhtAYhsIAVhWQAtggAlgdIAcgaQC+iUC/gGIAJAAQC7gCDRCEIAMAGIAhAKIANAGQAlAXAdAcIAKAKQBkBkgRB7IgCASQgKA9AHBhIABANIAPCyQAEBrgUA+QgbBOhGAjIgDACQiCBBh1AXQhPAQiCAEIgDAAIgYAAQhjAAh6gUg");
	this.shape_111.setTransform(88.4,119.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#C16122").ss(3,1,1).p("ApQg1QAWhtAYhsIAVhWQAtggAlgeIAcgZQC+iVC/gFQAFAAAEAAQC7gCDRCEQAHADAGADIAhAKQAGADAHADQAkAWAdAcQAGAGAFAFQBjBkgRB7QgBAJgBAKQgKA8AHBhQABAGAAAHQAFA9AKB1QAEBrgUA+QgbBOhGAkQgBABgCABQiCBAh1AYQhPAPiCAEQgCAAgBAAQhrADiKgXQgEAAgEgBQiOgYhYgmQgFgCgFgCQgggPgLgPQgJgKAAgPQAAgCABgDQAMg7gFg/QgBgCAAgDQgcgzgXhHQgBgBAAgCQgwiSAWhqg");
	this.shape_112.setTransform(88.4,119.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFB430").s().p("AjdJCIgIgBQiOgYhYgmIgKgEQgggPgLgPQgJgKAAgPIABgFQAMg7gFg/IgBgFQgcgzgXhHIgBgDQgwiSAWhqIAAAAQAWhtAYhsIAVhWQAtggAlgeIAcgZQC+iVC/gFIAJAAQC7gCDRCEIANAGIAhAKIANAGQAkAWAdAcIALALQBjBkgRB7IgCATQgKA8AHBhIABANIAPCyQAEBrgUA+QgbBOhGAkIgDACQiCBAh1AYQhPAPiCAEIgDAAIgWAAQhiAAh9gUg");
	this.shape_113.setTransform(88.4,119.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#C16122").ss(3,1,1).p("ApQg2QAWhtAYhsIAVhWQAuggAkgeIAdgZQC+iUC+gGQAFAAAFAAQC7gCDRCEQAGADAGAEIAhAKQAHACAGADQAkAXAdAcQAGAFAFAGQBjBkgRB7QgBAJgBAKQgKA8AHBhQABAGAAAIQAFA9AKB0QAEBrgUA+QgbBPhGAjQgBABgCABQiCBBh1AXQhPAQiCADQgCAAgCAAQhqADiKgWQgEgBgEAAQiPgZhYglQgFgCgFgCQgggPgLgQQgIgLAAgOQAAgDABgCQAMg8gFg+QgBgDAAgCQgcgzgXhHQgBgBAAgCQgwiSAWhqg");
	this.shape_114.setTransform(88.4,119.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFB430").s().p("AjdJDIgIgBQiPgZhYglIgKgEQgggPgLgQQgIgLAAgOIABgFQAMg8gFg+IgBgFQgcgzgXhHIgBgDQgwiSAWhqIAAgBQAWhtAYhsIAVhWQAuggAkgeIAdgZQC+iUC+gGIAKAAQC7gCDRCEIAMAHIAhAKIANAFQAkAXAdAcIALALQBjBkgRB7IgCATQgKA8AHBhIABAOIAPCxQAEBrgUA+QgbBPhGAjIgDACQiCBBh1AXQhPAQiCADIgEAAIgYABQhiAAh6gUg");
	this.shape_115.setTransform(88.4,119.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#C16122").ss(3,1,1).p("ApQg2QAWhtAYhsIAVhXQAugfAkgeIAdgaQC+iUC/gFQAEAAAFAAQC7gCDRCEQAHADAGADIAhAKQAGADAHADQAkAXAdAcQAFAFAGAGQBiBkgRB7QgBAJgBAKQgKA8AHBhQABAGAAAIQAFA9AKB0QAEBsgUA9QgbBPhGAkQgBABgCABQiCBAh1AYQhPAPiCAEQgCAAgCAAQhqADiLgXQgDgBgEAAQiPgYhYgmQgFgCgFgCQgggPgLgQQgIgLAAgOQAAgDABgDQAMg7gFg+QgBgDAAgCQgcgzgXhHQgBgCAAgBQgwiTAWhqg");
	this.shape_116.setTransform(88.4,119.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFB430").s().p("AjeJDIgHgBQiPgYhYgmIgKgEQgggPgLgQQgIgLAAgOIABgGQAMg7gFg+IgBgFQgcgzgXhHIgBgDQgwiTAWhqIAAAAQAWhtAYhsIAVhXQAugfAkgeIAdgaQC+iUC/gFIAJAAQC7gCDRCEIANAGIAhAKIANAGQAkAXAdAcIALALQBiBkgRB7IgCATQgKA8AHBhIABAOIAPCxQAEBsgUA9QgbBPhGAkIgDACQiCBAh1AYQhPAPiCAEIgEAAIgXAAQhjAAh7gUg");
	this.shape_117.setTransform(88.4,119.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#C16122").ss(3,1,1).p("ApPg3QAWhtAYhsIAUhWQAuggAlgeIAcgZQC/iVC+gFQAFAAAFAAQC7gBDRCEQAGADAHADIAgAKQAHADAHADQAkAXAdAcQAFAFAFAFQBjBlgSB8QgBAJgBAJQgJA8AHBhQABAHAAAHQAFA9AJB0QAEBsgUA+QgbBOhFAkQgBABgCABQiCBBh2AXQhPAPiCAEQgCAAgBAAQhrADiKgXQgEAAgEgBQiPgYhYgmQgFgCgFgCQgfgPgLgQQgIgLAAgPQAAgCAAgDQAMg7gFg/QAAgCgBgDQgbgzgYhHQAAgBgBgCQgviSAWhqg");
	this.shape_118.setTransform(88.3,119.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFB430").s().p("AjdJDIgIgBQiPgYhYgmIgKgEQgfgPgLgQQgIgLAAgPIAAgFQAMg7gFg/IgBgFQgbgzgYhHIgBgDQgviSAWhqIAAgBQAWhtAYhsIAUhWQAuggAlgeIAcgZQC/iVC+gFIAKAAQC7gBDRCEIANAGIAgAKIAOAGQAkAXAdAcIAKAKQBjBlgSB8IgCASQgJA8AHBhIABAOIAOCxQAEBsgUA+QgbBOhFAkIgDACQiCBBh2AXQhPAPiCAEIgDAAIgWABQhjAAh8gVg");
	this.shape_119.setTransform(88.3,119.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#C16122").ss(3,1,1).p("ApPg3QAWhtAYhsIAUhXQAuggAlgdIAcgaQC/iUC/gFQAEAAAFAAQC7gCDRCFQAHADAGACIAhAKQAHAEAGADQAkAXAdAcQAGAFAFAFQBiBlgSB8QgBAJgBAJQgJA9AHBgQABAHAAAHQAFA9AJB1QAEBrgUA+QgbBPhFAjQgBABgCABQiCBBh2AYQhPAPiCAEQgCAAgBAAQhrACiLgXQgDAAgEgBQiPgYhYgmQgFgCgFgCQgfgPgLgQQgIgLAAgPQAAgCAAgDQAMg8gFg+QAAgCgBgDQgbgzgYhHQAAgCgBgBQgviSAWhrg");
	this.shape_120.setTransform(88.3,119.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFB430").s().p("AjeJDIgHgBQiPgYhYgmIgKgEQgfgPgLgQQgIgLAAgPIAAgFQAMg8gFg+IgBgFQgbgzgYhHIgBgDQgviSAWhrIAAAAQAWhtAYhsIAUhXQAuggAlgdIAcgaQC/iUC/gFIAJAAQC7gCDRCFIANAFIAhAKIANAHQAkAXAdAcIALAKQBiBlgSB8IgCASQgJA9AHBgIABAOIAOCyQAEBrgUA+QgbBPhFAjIgDACQiCBBh2AYQhPAPiCAEIgDAAIgWAAQhiAAh+gVg");
	this.shape_121.setTransform(88.3,119.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#C16122").ss(3,1,1).p("ApPg3QAWhtAYhsIAUhXQAvggAkgeIAdgZQC+iUC/gFQAFAAAFAAQC7gCDRCFQAGADAHADIAgAKQAHADAHADQAjAXAdAcQAGAFAFAGQBjBlgTB7QgBAJgBAKQgJA8AHBhQABAGAAAIQAFA9AJB0QAEBsgUA+QgbBPhFAjQgBABgCABQiCBBh2AYQhPAPiCADQgCAAgCAAQhqADiLgXQgEAAgDgBQiPgYhZgmQgFgCgEgCQgggPgLgRQgHgLAAgPQAAgCAAgDQAMg8gFg+QAAgCgBgDQgbgzgYhHQAAgBgBgCQgviSAWhrg");
	this.shape_122.setTransform(88.3,119.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFB430").s().p("AjeJEIgHgBQiPgYhZgmIgJgEQgggPgLgRQgHgLAAgPIAAgFQAMg8gFg+IgBgFQgbgzgYhHIgBgDQgviSAWhrIAAAAQAWhtAYhsIAUhXQAvggAkgeIAdgZQC+iUC/gFIAKAAQC7gCDRCFIANAGIAgAKIAOAGQAjAXAdAcIALALQBjBlgTB7IgCATQgJA8AHBhIABAOIAOCxQAEBsgUA+QgbBPhFAjIgDACQiCBBh2AYQhPAPiCADIgEAAIgXAAQhjAAh7gUg");
	this.shape_123.setTransform(88.3,119.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#C16122").ss(3,1,1).p("ApPg4QAWhtAYhsIAUhXQAvgfAkgeIAdgaQC+iUC/gFQAFAAAFAAQC7gBDRCFQAHACAGADIAhAKQAHADAGAEQAkAXAdAcQAFAFAGAGQBiBlgTB7QgBAJgBAKQgJA8AHBhQABAGAAAIQAFA9AJB0QAEBsgUA+QgbBPhFAkQgBABgCABQiCBBh2AXQhPAPiCAEQgCAAgCAAQhqACiLgWQgEgBgEAAQiPgZhYgmQgFgCgFgCQgfgPgLgRQgHgLAAgPQAAgDAAgCQAMg8gFg+QAAgDgBgCQgbgzgYhHQAAgCgBgBQgviTAWhqg");
	this.shape_124.setTransform(88.3,119.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFB430").s().p("AjeJFIgIgBQiPgZhYgmIgKgEQgfgPgLgRQgHgLAAgPIAAgFQAMg8gFg+IgBgFQgbgzgYhHIgBgDQgviTAWhqIAAgBQAWhtAYhsIAUhXQAvgfAkgeIAdgaQC+iUC/gFIAKAAQC7gBDRCFIANAFIAhAKIANAHQAkAXAdAcIALALQBiBlgTB7IgCATQgJA8AHBhIABAOIAOCxQAEBsgUA+QgbBPhFAkIgDACQiCBBh2AXQhPAPiCAEIgEAAIgWAAQhiAAh9gUg");
	this.shape_125.setTransform(88.3,119.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#C16122").ss(3,1,1).p("ApPg4QAWhtAYhtIAUhWQAvggAkgeIAdgZQC/iVC/gEQAEAAAFAAQC7gBDSCEQAGADAHADIAgAKQAHADAGADQAkAYAdAcQAGAFAFAFQBiBmgTB8QgBAJgBAJQgJA9AHBgQABAHAAAHQAFA+AJB0QAEBrgUA+QgbBQhFAjQgBABgCABQiCBBh2AXQhPAPiCAEQgCAAgCAAQhqADiLgXQgEgBgEAAQiPgZhYgmQgFgCgFgCQgfgPgLgRQgHgMAAgOQAAgDAAgCQAMg9gFg9QAAgDAAgDQgcgzgYhHQAAgBgBgCQgviSAWhrg");
	this.shape_126.setTransform(88.3,119.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFB430").s().p("AjeJFIgIgBQiPgZhYgmIgKgEQgfgPgLgRQgHgMAAgOIAAgFQAMg9gFg9IAAgGQgcgzgYhHIgBgDQgviSAWhrIAAAAQAWhtAYhtIAUhWQAvggAkgeIAdgZQC/iVC/gEIAJAAQC7gBDSCEIANAGIAgAKIANAGQAkAYAdAcIALAKQBiBmgTB8IgCASQgJA9AHBgIABAOIAOCyQAEBrgUA+QgbBQhFAjIgDACQiCBBh2AXQhPAPiCAEIgEAAIgVAAQhjAAh9gUg");
	this.shape_127.setTransform(88.3,119.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#C16122").ss(3,1,1).p("ApPg5QAWhtAYhsIAUhXQAvgfAlgeIAcgaQC/iUC/gFQAFAAAFAAQC7gBDRCFQAHADAGADIAhAKQAHADAGADQAkAXAcAdQAGAFAFAFQBiBmgTB8QgBAJgBAJQgJA9AHBgQABAHAAAHQAFA+AJB0QAEBrgUA+QgbBQhFAkQgBABgCABQiCBBh2AXQhPAPiDADQgBAAgCAAQhrADiLgXQgDAAgEgBQiPgZhZgmQgFgCgEgCQgfgPgLgSQgHgLAAgPQAAgCAAgDQAMg8gFg+QAAgCAAgDQgcgzgYhHQAAgCgBgBQgviTAWhqg");
	this.shape_128.setTransform(88.3,119.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFB430").s().p("AjfJFIgHgBQiPgZhZgmIgJgEQgfgPgLgSQgHgLAAgPIAAgFQAMg8gFg+IAAgFQgcgzgYhHIgBgDQgviTAWhqIAAgBQAWhtAYhsIAUhXQAvgfAlgeIAcgaQC/iUC/gFIAKAAQC7gBDRCFIANAGIAhAKIANAGQAkAXAcAdIALAKQBiBmgTB8IgCASQgJA9AHBgIABAOIAOCyQAEBrgUA+QgbBQhFAkIgDACQiCBBh2AXQhPAPiDADIgDAAIgXABQhkAAh7gVg");
	this.shape_129.setTransform(88.3,119.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#C16122").ss(3,1,1).p("ApPg5QAWhtAYhtIAUhWQAvggAlgeIAcgZQC/iVC/gEQAFAAAFAAQC7gBDRCFQAHADAHACIAgAKQAHAEAGADQAkAXAdAcQAFAGAGAFQBhBmgTB8QgBAJgCAKQgIA8AHBgQABAHAAAHQAFA+AJB0QADBsgTA+QgbBPhFAkQgBABgCABQiCBBh3AXQhOAPiDAEQgBAAgCAAQhrACiLgXQgEAAgDgBQiQgYhYgnQgFgCgFgCQgegPgLgSQgHgLAAgPQAAgCAAgDQAMg9gFg9QAAgDAAgCQgcgzgYhIQAAgBgBgCQgviSAWhrg");
	this.shape_130.setTransform(88.3,119.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFB430").s().p("AjfJFIgHgBQiQgYhYgnIgKgEQgegPgLgSQgHgLAAgPIAAgFQAMg9gFg9IAAgFQgcgzgYhIIgBgDQgviSAWhrIAAAAQAWhtAYhtIAUhWQAvggAlgeIAcgZQC/iVC/gEIAKAAQC7gBDRCFIAOAFIAgAKIANAHQAkAXAdAcIALALQBhBmgTB8IgDATQgIA8AHBgIABAOIAOCyQADBsgTA+QgbBPhFAkIgDACQiCBBh3AXQhOAPiDAEIgDAAIgVAAQhjAAh+gVg");
	this.shape_131.setTransform(88.3,119.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#C16122").ss(3,1,1).p("ApPg6QAWhtAYhsIAVhXQAuggAlgeIAcgZQC/iUDAgFQAEAAAFAAQC8gBDRCGQAHACAGADIAhAKQAGADAHAEQAjAXAdAcQAGAGAFAFQBiBmgUB8QgCAJgBAKQgIA8AHBgQABAHAAAHQAFA+AJB0QADBsgTA+QgbBQhFAjQgBABgCABQiDBBh2AYQhNAOiEAEQgBAAgCAAQhrADiLgXQgEgBgEAAQiPgZhYgnQgFgCgFgCQgegPgLgSQgIgLABgPQAAgDABgCQALg9gFg9QAAgDAAgDQgcgzgXhHQgBgBAAgCQgwiTAWhqg");
	this.shape_132.setTransform(88.3,119.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFB430").s().p("AjfJGIgIgBQiPgZhYgnIgKgEQgegPgLgSQgIgLABgPIABgFQALg9gFg9IAAgGQgcgzgXhHIgBgDQgwiTAWhqIAAgBQAWhtAYhsIAVhXQAuggAlgeIAcgZQC/iUDAgFIAJAAQC8gBDRCGIANAFIAhAKIANAHQAjAXAdAcIALALQBiBmgUB8IgDATQgIA8AHBgIABAOIAOCyQADBsgTA+QgbBQhFAjIgDACQiDBBh2AYQhNAOiEAEIgDAAIgWABQhiAAh+gVg");
	this.shape_133.setTransform(88.3,119.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#C16122").ss(3,1,1).p("ApPg6QAWhuAYhsIAVhXQAugfAlgeIAcgaQC/iUDAgEQAFAAAFAAQC7gBDRCGQAHACAGACIAhAKQAHAEAGAEQAkAXAdAcQAFAGAFAFQBiBmgUB8QgCAJgBAKQgIA8AHBhQABAGAAAHQAFA/AJB0QADBrgTA+QgbBQhFAkQgBABgCABQiDBBh2AXQhNAPiEAEQgCAAgBAAQhrACiMgXQgDgBgEAAQiPgZhZgnQgFgCgEgCQgegPgLgSQgIgMABgOQAAgDABgDQALg9gFg8QAAgDAAgDQgcgzgXhHQgBgCAAgBQgwiTAWhqg");
	this.shape_134.setTransform(88.3,119.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFB430").s().p("AjgJGIgHgBQiPgZhZgnIgJgEQgegPgLgSQgIgMABgOIABgGQALg9gFg8IAAgGQgcgzgXhHIgBgDQgwiTAWhqIAAgBQAWhuAYhsIAVhXQAugfAlgeIAcgaQC/iUDAgEIAKAAQC7gBDRCGIANAEIAhAKIANAIQAkAXAdAcIAKALQBiBmgUB8IgDATQgIA8AHBhIABANIAOCzQADBrgTA+QgbBQhFAkIgDACQiDBBh2AXQhNAPiEAEIgDAAIgVAAQhjAAh/gVg");
	this.shape_135.setTransform(88.3,119.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#C16122").ss(3,1,1).p("ApPg6QAWhuAYhsIAVhXQAugfAlgeIAdgaQC/iUC/gEQAFAAAFAAQC7gBDSCGQAHACAGADIAhAKQAGADAHAEQAjAXAdAdQAFAFAGAFQBhBmgUB9QgCAJgBAJQgIA9AHBgQABAHAAAHQAFA+AJB0QADBsgTA+QgbBQhFAkQgBABgCABQiDBBh2AXQhNAPiEADQgCAAgBAAQhrADiMgXQgDgBgEAAQiQgZhYgnQgFgCgFgCQgegPgKgTQgIgLABgPQAAgDABgCQALg+gFg8QAAgDAAgDQgcgzgXhHQgBgCAAgBQgwiTAWhqg");
	this.shape_136.setTransform(88.3,119.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFB430").s().p("AjgJHIgHgBQiQgZhYgnIgKgEQgegPgKgTQgIgLABgPIABgFQALg+gFg8IAAgGQgcgzgXhHIgBgDQgwiTAWhqIAAgBQAWhuAYhsIAVhXQAugfAlgeIAdgaQC/iUC/gEIAKAAQC7gBDSCGIANAFIAhAKIANAHQAjAXAdAdIALAKQBhBmgUB9IgDASQgIA9AHBgIABAOIAOCyQADBsgTA+QgbBQhFAkIgDACQiDBBh2AXQhNAPiEADIgDAAIgXAAQhkAAh8gUg");
	this.shape_137.setTransform(88.3,119.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#C16122").ss(3,1,1).p("ApPg7QAWhtAYhsIAVhXQAuggAlgeIAdgZQC/iVDAgEQAEAAAFAAQC8AADRCGQAHACAGACIAhAKQAHAEAGAEQAkAXAcAcQAGAGAFAFQBhBmgUB9QgCAJgBAKQgIA8AHBgQABAHAAAHQAFA/AJBzQADBsgUA+QgaBRhFAjQgBABgCABQiDBBh2AYQhNAOiEAEQgCAAgBAAQhrACiMgXQgEAAgDgBQiQgZhYgnQgFgCgFgCQgegPgKgTQgIgMABgPQAAgCABgDQALg9gFg9QAAgCAAgDQgcgzgXhIQgBgBAAgCQgwiSAWhrg");
	this.shape_138.setTransform(88.3,120);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFB430").s().p("AjgJHIgHgBQiQgZhYgnIgKgEQgegPgKgTQgIgMABgPIABgFQALg9gFg9IAAgFQgcgzgXhIIgBgDQgwiSAWhrIAAgBQAWhtAYhsIAVhXQAuggAlgeIAdgZQC/iVDAgEIAJAAQC8AADRCGIANAEIAhAKIANAIQAkAXAcAcIALALQBhBmgUB9IgDATQgIA8AHBgIABAOIAOCyQADBsgUA+QgaBRhFAjIgDACQiDBBh2AYQhNAOiEAEIgDAAIgWAAQhjAAh+gVg");
	this.shape_139.setTransform(88.3,120);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#C16122").ss(3,1,1).p("ApPg7QAWhuAYhsIAVhXQAugfAlgeIAdgaQC/iUDAgEQAFAAAFAAQC7gBDSCGQAGADAHACIAhAKQAGAEAGADQAkAYAdAcQAFAGAGAFQBhBmgVB9QgCAJgBAKQgIA8AHBgQABAHAAAHQAFA/AJB0QADBrgUA+QgaBRhFAkQgBABgCABQiDBBh2AXQhNAOiEAEQgCAAgBAAQhrADiMgYQgEAAgEgBQiPgZhZgnQgFgCgEgCQgegPgKgTQgIgMABgPQAAgCABgDQALg+gFg8QAAgDAAgDQgcgzgXhHQgBgCAAgBQgwiTAWhqg");
	this.shape_140.setTransform(88.3,120);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFB430").s().p("AjgJHIgIgBQiPgZhZgnIgJgEQgegPgKgTQgIgMABgPIABgFQALg+gFg8IAAgGQgcgzgXhHIgBgDQgwiTAWhqIAAgBQAWhuAYhsIAVhXQAugfAlgeIAdgaQC/iUDAgEIAKAAQC7gBDSCGIANAFIAhAKIAMAHQAkAYAdAcIALALQBhBmgVB9IgDATQgIA8AHBgIABAOIAOCzQADBrgUA+QgaBRhFAkIgDACQiDBBh2AXQhNAOiEAEIgDAAIgWAAQhjAAh+gVg");
	this.shape_141.setTransform(88.3,120);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#C16122").ss(3,1,1).p("ApPg8QAWhtAYhtIAVhXQAvgfAkgeIAdgaQC/iUDAgEQAFAAAFAAQC7AADSCGQAHACAGACIAhAKQAHAEAGAEQAjAYAdAcQAGAGAFAFQBhBmgWB9QgBAJgBAKQgIA8AHBhQABAGAAAHQAFA/AJB0QADBrgUA/QgbBQhEAkQgBABgCABQiDBBh2AXQhNAPiEAEQgCAAgCAAQhqACiNgXQgDgBgEAAQiQgahYgnQgFgCgFgCQgdgPgLgTQgHgMABgPQAAgDABgCQALg+gFg8QAAgDAAgDQgcgzgXhHQgBgCAAgBQgwiTAWhrg");
	this.shape_142.setTransform(88.3,120.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFB430").s().p("AjhJIIgHgBQiQgahYgnIgKgEQgdgPgLgTQgHgMABgPIABgFQALg+gFg8IAAgGQgcgzgXhHIgBgDQgwiTAWhrIAAgBQAWhtAYhtIAVhXQAvgfAkgeIAdgaQC/iUDAgEIAKAAQC7AADSCGIANAEIAhAKIANAIQAjAYAdAcIALALQBhBmgWB9IgCATQgIA8AHBhIABANIAOCzQADBrgUA/QgbBQhEAkIgDACQiDBBh2AXQhNAPiEAEIgEAAIgVAAQhjAAh/gVg");
	this.shape_143.setTransform(88.3,120.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#C16122").ss(3,1,1).p("ApPg8QAWhuAYhsIAVhXQAvggAlgeIAcgZQDAiVC/gDQAFAAAFAAQC8AADRCGQAHACAHACIAhAKQAGAEAGAEQAkAXAcAdQAGAFAFAGQBhBmgWB9QgBAJgBAKQgIA9AHBgQABAGAAAIQAFA+AJB0QADBsgUA+QgbBRhEAjQgBABgCABQiDBCh2AXQhNAOiFAEQgBAAgCAAQhrACiMgXQgDgBgEAAQiQgZhYgnQgFgCgFgCQgdgPgLgUQgHgMABgPQAAgDABgCQALg/gFg7QAAgDAAgDQgcgzgXhIQgBgBAAgCQgwiTAWhqg");
	this.shape_144.setTransform(88.3,120.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFB430").s().p("AjhJIIgHgBQiQgZhYgnIgKgEQgdgPgLgUQgHgMABgPIABgFQALg/gFg7IAAgGQgcgzgXhIIgBgDQgwiTAWhqIAAgBQAWhuAYhsIAVhXQAvggAlgeIAcgZQDAiVC/gDIAKAAQC8AADRCGIAOAEIAhAKIAMAIQAkAXAcAdIALALQBhBmgWB9IgCATQgIA9AHBgIABAOIAOCyQADBsgUA+QgbBRhEAjIgDACQiDBCh2AXQhNAOiFAEIgDAAIgVAAQhjAAh/gVg");
	this.shape_145.setTransform(88.3,120.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#C16122").ss(3,1,1).p("AF7oZIAuAOQArAaAiAiQBsBqgXCEQgLBAAIByQAFA9AKCBQADBsgVBAQgaBRhHAkQiDBBh2AXQhLAOiHAEQhsADiOgYQiVgZhbgoQg5gZACgqQAMhEgFhBQgcg0gYhJQgwiSAWhtQAWhtAYhtIAVhXQAugeAmgfIAcga");
	this.shape_146.setTransform(88.3,126.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFB430").s().p("AjhJIQiVgZhbgoQg5gZACgqQAMhEgFhBQgcg0gYhJQgwiUAWhrQAWhtAYhtIAVhXQAugeAmgfIAcgaIgDgCQDBiSDCgEQDAgDDXCKIAuAOQArAaAiAiQBsBqgXCEQgLBAAIBwIAPDAQADBsgVBAQgaBRhHAkQiDBBh2AXQhLAOiHAEIgZABQhjAAh+gWg");
	this.shape_147.setTransform(88.3,120.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#C16122").ss(3,1,1).p("ApPg8QAWhtAYhtIAVhXQAvgfAlgeIAcgaQC/iUDAgEQAFAAAFAAQC8AADRCGQAHACAGADIAhAKQAHADAGAEQAkAYAcAcQAGAGAFAFQBhBmgWB9QgBAJgBAKQgIA9AHBgQABAGAAAIQAFA+AJB0QADBrgUA/QgbBRhEAjQgBABgCABQiDBCh2AXQhNAOiEAEQgCAAgCAAQhqACiNgXQgDgBgEAAQiQgahYgmQgFgCgFgCQgdgPgLgUQgHgMABgPQAAgDABgCQALg+gFg8QAAgDAAgDQgcgzgXhHQgBgCAAgBQgwiTAWhrg");
	this.shape_148.setTransform(88.3,120.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFB430").s().p("AjhJIIgHgBQiQgahYgmIgKgEQgdgPgLgUQgHgMABgPIABgFQALg+gFg8IAAgGQgcgzgXhHIgBgDQgwiTAWhrIAAgBQAWhtAYhtIAVhXQAvgfAlgeIAcgaQC/iUDAgEIAKAAQC8AADRCGIANAFIAhAKIANAHQAkAYAcAcIALALQBhBmgWB9IgCATQgIA9AHBgIABAOIAOCyQADBrgUA/QgbBRhEAjIgDACQiDBCh2AXQhNAOiEAEIgEAAIgVAAQhjAAh/gVg");
	this.shape_149.setTransform(88.3,120.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#C16122").ss(3,1,1).p("ApPg7QAWhuAYhsIAVhXQAugfAlgeIAdgaQC/iUDAgEQAFAAAFAAQC7gBDRCGQAHADAHACIAhAKQAGAEAGADQAkAYAcAcQAGAFAFAGQBhBmgUB9QgCAJgBAJQgIA9AHBgQABAHAAAHQAFA/AJBzQADBsgUA+QgaBQhFAkQgBABgCABQiDBBh2AXQhNAPiEAEQgCAAgBAAQhrACiMgXQgEgBgDAAQiQgZhYgnQgFgCgFgCQgegPgKgTQgIgMABgPQAAgCABgDQALg+gFg8QAAgDAAgDQgcgzgXhHQgBgCAAgBQgwiTAWhqg");
	this.shape_150.setTransform(88.3,120);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFB430").s().p("AjgJHIgHgBQiQgZhYgnIgKgEQgegPgKgTQgIgMABgPIABgFQALg+gFg8IAAgGQgcgzgXhHIgBgDQgwiTAWhqIAAgBQAWhuAYhsIAVhXQAugfAlgeIAdgaQC/iUDAgEIAKAAQC7gBDRCGIAOAFIAhAKIAMAHQAkAYAcAcIALALQBhBmgUB9IgDASQgIA9AHBgIABAOIAOCyQADBsgUA+QgaBQhFAkIgDACQiDBBh2AXQhNAPiEAEIgDAAIgWAAQhjAAh+gVg");
	this.shape_151.setTransform(88.3,120);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#C16122").ss(3,1,1).p("ApPg6QAWhuAYhsIAVhXQAugfAlgeIAdgaQC/iUC/gEQAFAAAFAAQC7gBDSCGQAGACAHADIAhAKQAGADAGAEQAkAXAdAcQAFAGAGAFQBhBmgUB8QgCAJgBAKQgIA9AHBgQABAGAAAIQAFA+AJB0QADBrgTA/QgbBQhFAjQgBABgCABQiDBCh2AXQhNAOiEAEQgCAAgBAAQhrADiMgYQgDAAgEgBQiPgZhZgmQgFgCgEgCQgegPgLgTQgIgMABgOQAAgDABgCQALg+gFg8QAAgDAAgDQgcgzgXhHQgBgCAAgBQgwiTAWhqg");
	this.shape_152.setTransform(88.3,119.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFB430").s().p("AjgJGIgHgBQiPgZhZgmIgJgEQgegPgLgTQgIgMABgOIABgFQALg+gFg8IAAgGQgcgzgXhHIgBgDQgwiTAWhqIAAgBQAWhuAYhsIAVhXQAugfAlgeIAdgaQC/iUC/gEIAKAAQC7gBDSCGIANAFIAhAKIAMAHQAkAXAdAcIALALQBhBmgUB8IgDATQgIA9AHBgIABAOIAOCyQADBrgTA/QgbBQhFAjIgDACQiDBCh2AXQhNAOiEAEIgDAAIgWAAQhiAAh/gVg");
	this.shape_153.setTransform(88.3,119.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#C16122").ss(3,1,1).p("ApPg6QAWhtAYhsIAVhXQAuggAlgdIAcgaQC/iUDAgFQAEAAAFAAQC8gBDRCGQAHACAGADIAhAKQAGADAHAEQAjAXAdAcQAGAGAFAFQBiBmgUB8QgBAJgCAKQgIA8AHBgQABAHAAAHQAFA+AJB0QADBsgTA+QgbBQhFAjQgBABgCABQiCBBh3AYQhNAOiEAEQgBAAgCAAQhrADiLgXQgEgBgDAAQiQgZhYgnQgFgCgFgCQgegPgLgSQgHgLAAgPQAAgDABgCQALg9gFg9QAAgDAAgDQgcgzgXhHQgBgBAAgCQgwiTAWhqg");
	this.shape_154.setTransform(88.3,119.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFB430").s().p("AjfJGIgHgBQiQgZhYgnIgKgEQgegPgLgSQgHgLAAgPIABgFQALg9gFg9IAAgGQgcgzgXhHIgBgDQgwiTAWhqIAAgBQAWhtAYhsIAVhXQAuggAlgdIAcgaQC/iUDAgFIAJAAQC8gBDRCGIANAFIAhAKIANAHQAjAXAdAcIALALQBiBmgUB8IgDATQgIA8AHBgIABAOIAOCyQADBsgTA+QgbBQhFAjIgDACQiCBBh3AYQhNAOiEAEIgDAAIgVABQhjAAh+gVg");
	this.shape_155.setTransform(88.3,119.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#C16122").ss(3,1,1).p("ApPg5QAWhtAYhsIAUhXQAvgfAlgeIAcgaQC/iUC/gFQAFAAAFAAQC7gBDRCFQAHADAGADIAhAKQAHADAGADQAkAXAcAdQAGAFAFAFQBiBmgTB8QgBAJgBAJQgJA9AHBgQABAHAAAHQAFA+AJB0QAEBrgUA+QgbBQhFAjQgBABgCABQiCBCh2AXQhPAPiCADQgCAAgCAAQhqADiMgXQgDAAgEgBQiPgZhZgmQgFgCgEgCQgfgPgLgSQgHgLAAgPQAAgCAAgDQAMg8gFg+QAAgCAAgDQgcgzgYhHQAAgCgBgBQgviTAWhqg");
	this.shape_156.setTransform(88.3,119.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFB430").s().p("AjfJFIgHgBQiPgZhZgmIgJgEQgfgPgLgSQgHgLAAgPIAAgFQAMg8gFg+IAAgFQgcgzgYhHIgBgDQgviTAWhqIAAgBQAWhtAYhsIAUhXQAvgfAlgeIAcgaQC/iUC/gFIAKAAQC7gBDRCFIANAGIAhAKIANAGQAkAXAcAdIALAKQBiBmgTB8IgCASQgJA9AHBgIABAOIAOCyQAEBrgUA+QgbBQhFAjIgDACQiCBCh2AXQhPAPiCADIgEAAIgXABQhjAAh8gVg");
	this.shape_157.setTransform(88.3,119.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#C16122").ss(3,1,1).p("ApPg4QAWhtAYhsIAUhXQAvgfAkgeIAdgaQC+iUC/gFQAFAAAFAAQC7gBDRCFQAHADAGACIAhAKQAHAEAGADQAkAXAdAcQAFAFAGAGQBiBlgTB8QgBAJgBAJQgJA8AHBhQABAHAAAHQAFA+AJB0QAEBrgUA+QgbBPhFAkQgBABgCABQiCBBh2AXQhPAPiCAEQgCAAgCAAQhqADiLgXQgEgBgEAAQiPgZhYgmQgFgCgFgCQgfgPgLgRQgHgLAAgPQAAgCAAgDQAMg8gFg+QAAgDAAgCQgcgzgYhHQAAgCgBgBQgviTAWhqg");
	this.shape_158.setTransform(88.3,119.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFB430").s().p("AjeJFIgIgBQiPgZhYgmIgKgEQgfgPgLgRQgHgLAAgPIAAgFQAMg8gFg+IAAgFQgcgzgYhHIgBgDQgviTAWhqIAAgBQAWhtAYhsIAUhXQAvgfAkgeIAdgaQC+iUC/gFIAKAAQC7gBDRCFIANAFIAhAKIANAHQAkAXAdAcIALALQBiBlgTB8IgCASQgJA8AHBhIABAOIAOCyQAEBrgUA+QgbBPhFAkIgDACQiCBBh2AXQhPAPiCAEIgEAAIgXAAQhjAAh7gUg");
	this.shape_159.setTransform(88.3,119.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#C16122").ss(3,1,1).p("ApPg3QAWhtAYhsIAUhXQAuggAlgdIAdgaQC+iUC/gFQAFAAAEAAQC7gCDSCFQAGADAGADIAhAKQAHADAGADQAkAXAdAcQAGAFAFAFQBiBlgSB8QgBAJgBAJQgJA9AHBgQABAHAAAHQAFA+AJB0QAEBrgUA+QgbBPhFAkQgBABgCABQiCBBh2AXQhPAPiCAEQgCAAgBAAQhrADiLgXQgDgBgEAAQiPgZhYgmQgFgCgFgCQgfgPgLgQQgIgLAAgPQAAgCAAgDQAMg8gFg+QAAgCgBgDQgbgzgYhHQAAgCgBgBQgviSAWhrg");
	this.shape_160.setTransform(88.3,119.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFB430").s().p("AjeJEIgHgBQiPgZhYgmIgKgEQgfgPgLgQQgIgLAAgPIAAgFQAMg8gFg+IgBgFQgbgzgYhHIgBgDQgviSAWhrIAAAAQAWhtAYhsIAUhXQAuggAlgdIAdgaQC+iUC/gFIAJAAQC7gCDSCFIAMAGIAhAKIANAGQAkAXAdAcIALAKQBiBlgSB8IgCASQgJA9AHBgIABAOIAOCyQAEBrgUA+QgbBPhFAkIgDACQiCBBh2AXQhPAPiCAEIgDAAIgYAAQhjAAh7gUg");
	this.shape_161.setTransform(88.3,119.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#C16122").ss(3,1,1).p("ApQg2QAWhtAYhsIAVhXQAugfAkgeIAdgaQC+iUC/gFQAFAAAEAAQC7gCDRCEQAHADAGADIAhAKQAHADAGADQAkAXAdAcQAGAGAFAFQBjBlgSB7QgBAJgBAJQgJA9AHBgQAAAHABAHQAEA9AKB1QAEBrgUA+QgbBPhFAjQgCABgBABQiDBBh1AXQhPAQiCADQgCAAgCAAQhqADiLgXQgDAAgEgBQiPgYhYgmQgFgCgFgCQgggPgLgQQgIgLAAgOQABgDAAgCQAMg8gFg+QgBgDAAgCQgcgzgXhHQgBgCAAgBQgwiSAWhrg");
	this.shape_162.setTransform(88.4,119.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFB430").s().p("AjeJDIgHgBQiPgYhYgmIgKgEQgggPgLgQQgIgLAAgOIABgFQAMg8gFg+IgBgFQgcgzgXhHIgBgDQgwiSAWhrIAAAAQAWhtAYhsIAVhXQAugfAkgeIAdgaQC+iUC/gFIAJAAQC7gCDRCEIANAGIAhAKIANAGQAkAXAdAcIALALQBjBlgSB7IgCASQgJA9AHBgIABAOIAOCyQAEBrgUA+QgbBPhFAjIgDACQiDBBh1AXQhPAQiCADIgEAAIgXAAQhjAAh7gUg");
	this.shape_163.setTransform(88.4,119.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#C16122").ss(3,1,1).p("ApQg2QAWhtAYhsIAVhWQAuggAkgeIAdgZQC+iUC+gGQAFAAAFAAQC7gCDRCEQAGADAGAEIAhAKQAHACAGADQAkAXAdAcQAGAFAFAGQBjBkgRB7QgBAJgBAKQgKA8AHBhQABAGAAAHQAFA9AKB1QAEBrgUA+QgbBOhGAkQgBABgCABQiCBBh1AXQhPAPiCAEQgCAAgCAAQhqADiKgXQgEAAgEgBQiOgYhZgmQgFgCgEgCQgggPgMgPQgIgLAAgOQAAgDABgCQAMg8gFg+QgBgDAAgCQgcgzgXhHQgBgBAAgCQgwiSAWhqg");
	this.shape_164.setTransform(88.4,119.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFB430").s().p("AjdJCIgIgBQiOgYhZgmIgJgEQgggPgMgPQgIgLAAgOIABgFQAMg8gFg+IgBgFQgcgzgXhHIgBgDQgwiSAWhqIAAgBQAWhtAYhsIAVhWQAuggAkgeIAdgZQC+iUC+gGIAKAAQC7gCDRCEIAMAHIAhAKIANAFQAkAXAdAcIALALQBjBkgRB7IgCATQgKA8AHBhIABANIAPCyQAEBrgUA+QgbBOhGAkIgDACQiCBBh1AXQhPAPiCAEIgEAAIgVABQhiAAh9gVg");
	this.shape_165.setTransform(88.4,119.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#C16122").ss(3,1,1).p("ApQg1QAWhtAYhrIAVhXQAtggAlgdIAcgaQC+iUC/gGQAEAAAFAAQC7gCDRCEQAGADAGADIAhAKQAHADAGADQAlAXAdAcQAFAFAFAFQBkBkgRB7QgBAJgBAJQgKA9AHBhQABAGAAAHQAFA9AKB0QAEBsgUA+QgbBOhGAjQgBABgCABQiCBBh1AXQhPAQiCAEQgCAAgBAAQhrACiKgWQgEgBgDAAQiPgYhYgmQgFgCgFgCQgggPgLgPQgJgKAAgOQAAgDABgDQAMg7gFg+QgBgDAAgCQgcgzgXhHQgBgCAAgBQgwiSAWhqg");
	this.shape_166.setTransform(88.4,119.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFB430").s().p("AjdJCIgHgBQiPgYhYgmIgKgEQgggPgLgPQgJgKAAgOIABgGQAMg7gFg+IgBgFQgcgzgXhHIgBgDQgwiSAWhqIAAgBQAWhtAYhrIAVhXQAtggAlgdIAcgaQC+iUC/gGIAJAAQC7gCDRCEIAMAGIAhAKIANAGQAlAXAdAcIAKAKQBkBkgRB7IgCASQgKA9AHBhIABANIAPCxQAEBsgUA+QgbBOhGAjIgDACQiCBBh1AXQhPAQiCAEIgDAAIgWAAQhiAAh9gUg");
	this.shape_167.setTransform(88.4,119.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#C16122").ss(3,1,1).p("ApQg0QAWhtAYhsIAVhWQAtggAlgeIAcgZQC+iUC+gGQAFAAAEAAQC7gDDRCEQAGADAGAEIAhAKQAHACAHADQAkAXAdAbQAGAGAFAFQBjBkgQB6QgBAJgBAKQgKA8AHBhQABAGAAAIQAFA8AKB1QAEBrgUA+QgbBOhGAjQgBABgCABQiCBBh1AXQhPAQiBAEQgCAAgCAAQhqACiKgWQgEgBgEAAQiOgYhYglQgFgCgFgCQghgPgLgPQgJgKAAgOQAAgDABgDQAMg6gFg/QgBgDgBgCQgbgzgXhHQgBgBAAgCQgwiSAWhqg");
	this.shape_168.setTransform(88.4,119.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFB430").s().p("AjcJBIgIgBQiOgYhYglIgKgEQghgPgLgPQgJgKAAgOIABgGQAMg6gFg/IgCgFQgbgzgXhHIgBgDQgwiSAWhqIAAAAQAWhtAYhsIAVhWQAtggAlgeIAcgZQC+iUC+gGIAJAAQC7gDDRCEIAMAHIAhAKIAOAFQAkAXAdAbIALALQBjBkgQB6IgCATQgKA8AHBhIABAOIAPCxQAEBrgUA+QgbBOhGAjIgDACQiCBBh1AXQhPAQiBAEIgEAAIgWAAQhiAAh8gUg");
	this.shape_169.setTransform(88.4,119.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#C16122").ss(3,1,1).p("ApQgzQAWhtAYhsIAVhWQAtggAkgdIAdgaQC9iUC/gGQAEAAAFAAQC7gDDQCDQAHAEAGADIAgAKQAHADAHACQAkAXAdAcQAGAFAFAFQBkBkgPB6QgBAJgCAKQgKA8AHBhQABAGAAAHQAFA9AKB0QAEBsgUA9QgaBOhHAjQgBABgCABQiBBBh2AYQhPAPiBAEQgCAAgCAAQhqADiKgWQgEgBgDAAQiPgYhYgmQgFgCgFgCQghgPgLgOQgIgJgBgPQAAgCABgDQAMg6gFhAQgBgCgBgCQgbgzgXhHQgBgBAAgCQgwiSAWhqg");
	this.shape_170.setTransform(88.4,119.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFB430").s().p("AjcJBIgHgBQiPgYhYgmIgKgEQghgPgLgOQgIgJgBgPIABgFQAMg6gFhAIgCgEQgbgzgXhHIgBgDQgwiSAWhqIAAAAQAWhtAYhsIAVhWQAtggAkgdIAdgaQC9iUC/gGIAJAAQC7gDDQCDIANAHIAgAKIAOAFQAkAXAdAcIALAKQBkBkgPB6IgDATQgKA8AHBhIABANIAPCxQAEBsgUA9QgaBOhHAjIgDACQiBBBh2AYQhPAPiBAEIgEAAIgWAAQhiAAh8gTg");
	this.shape_171.setTransform(88.4,119.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#C16122").ss(3,1,1).p("ApQgyQAWhtAYhsIAUhWQAuggAkgdIAdgaQC9iUC+gGQAFAAAEAAQC7gDDRCDQAGADAGAEIAgAKQAHACAHADQAkAWAeAcQAFAFAFAFQBkBkgOB6QgBAJgCAJQgKA8AHBiQABAGAAAHQAFA8AKB1QAEBsgUA9QgaBNhHAkQgBABgCABQiBBAh2AYQhQAQiAADQgCAAgCAAQhqADiJgWQgEAAgEgBQiOgXhYgmQgFgCgFgCQghgPgMgNQgIgKgBgOQAAgDAAgDQANg5gFhAQgBgCgBgCQgbgzgYhHQAAgCgBgBQgviSAWhqg");
	this.shape_172.setTransform(88.4,119.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFB430").s().p("AjbJAIgIgBQiOgXhYgmIgKgEQghgPgMgNQgIgKgBgOIAAgGQANg5gFhAIgCgEQgbgzgYhHIgBgDQgviSAWhqQAWhtAYhsIAUhWQAuggAkgdIAdgaQC9iUC+gGIAJAAQC7gDDRCDIAMAHIAgAKIAOAFQAkAWAeAcIAKAKQBkBkgOB6IgDASQgKA8AHBiIABANIAPCxQAEBsgUA9QgaBNhHAkIgDACQiBBAh2AYQhQAQiAADIgEAAIgYAAQhiAAh5gTg");
	this.shape_173.setTransform(88.4,119.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#C16122").ss(3,1,1).p("ApQgyQAWhsAYhsIAUhWQAuggAkgeIAcgZQC+iUC9gHQAFAAAFAAQC6gDDRCDQAGAEAGADIAhAKQAGADAHACQAlAWAdAcQAGAFAFAFQBkBkgOB6QgBAJgCAJQgKA8AHBhQABAHAAAHQAFA8AKB0QAEBsgUA9QgaBNhHAkQgBABgCABQiBBAh2AYQhQAQiAADQgCAAgCAAQhqADiJgWQgEAAgEgBQiNgXhYglQgFgCgFgCQgigPgMgNQgIgKgBgOQAAgCAAgDQANg6gFhAQgBgCgBgCQgcgzgXhHQAAgBgBgCQgviSAWhqg");
	this.shape_174.setTransform(88.4,119.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFB430").s().p("AjbI/IgIgBQiNgXhYglIgKgEQgigPgMgNQgIgKgBgOIAAgFQANg6gFhAIgCgEQgcgzgXhHIgBgDQgviSAWhqQAWhsAYhsIAUhWQAuggAkgeIAcgZQC+iUC9gHIAKAAQC6gDDRCDIAMAHIAhAKIANAFQAlAWAdAcIALAKQBkBkgOB6IgDASQgKA8AHBhIABAOIAPCwQAEBsgUA9QgaBNhHAkIgDACQiBBAh2AYQhQAQiAADIgEAAIgYABQhiAAh5gUg");
	this.shape_175.setTransform(88.4,119.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#C16122").ss(3,1,1).p("ApQgxQAWhsAYhsIAUhWQAtggAlgdIAcgaQC9iUC+gHQAEAAAFAAQC6gDDRCCQAGAEAGAEIAhAKQAHACAHACQAkAXAdAbQAGAFAFAFQBlBkgOB5QgBAJgBAJQgLA8AHBiQABAGAAAHQAFA8AKB1QAFBsgVA9QgaBMhHAkQgBABgCABQiBBAh1AYQhRAQh/AEQgCAAgCAAQhqADiJgWQgEgBgEAAQiOgXhYgmQgFgCgFgCQgigPgLgMQgJgJgBgOQAAgDAAgDQANg5gFhAQgBgCgBgCQgcgzgXhHQAAgCgBgBQgviSAWhqg");
	this.shape_176.setTransform(88.4,119);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFB430").s().p("AjaI/IgIgBQiOgXhYgmIgKgEQgigPgLgMQgJgJgBgOIAAgGQANg5gFhAIgCgEQgcgzgXhHIgBgDQgviSAWhqQAWhsAYhsIAUhWQAtggAlgdIAcgaQC9iUC+gHIAJAAQC6gDDRCCIAMAIIAhAKIAOAEQAkAXAdAbIALAKQBlBkgOB5IgCASQgLA8AHBiIABANIAPCxQAFBsgVA9QgaBMhHAkIgDACQiBBAh1AYQhRAQh/AEIgEAAIgZAAQhiAAh4gTg");
	this.shape_177.setTransform(88.4,119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89},{t:this.shape_88}]}).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-2.1,179.9,208.1);


(lib.BrasSaute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Interpoler7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150.2,109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-26.8,regY:-39.4,rotation:-15,x:123.6,y:73.4},0).wait(1).to({regX:-26.7,rotation:-32.7,x:123.7,y:73.3},0).wait(1).to({regX:-26.8,regY:-39.3,rotation:-53.4,y:73.4},0).wait(1).to({regX:-24.1,regY:-39.8,rotation:-60,x:126.3,y:72.9},0).wait(1).to({regY:-39.7,rotation:-64.2,y:73},0).wait(1).to({regX:-24.2,rotation:-67.7,y:73.1},0).to({rotation:-73.4},5).to({regX:-24.1,rotation:-64.2,y:73},4).to({regY:-39.8,rotation:-60,y:72.9},1).wait(1).to({regX:-26.8,regY:-39.3,rotation:-53.4,x:123.7,y:73.4},0).wait(1).to({regX:-26.7,regY:-39.4,rotation:-32.7,y:73.3},0).wait(1).to({regX:-26.8,rotation:-15,x:123.6,y:73.4},0).wait(1).to({regX:0,regY:0,rotation:0,x:150.4,y:112.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(123.5,16.1,53.3,186.5);


(lib.BasSaute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#186800").ss(3,1,1).p("AjLjpQCggECGCmQA5BFAfBKQAeBNgHA5QgCAPgGAN");
	this.shape.setTransform(189.6,84.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2BA005").s().p("AiYEYIgqgCIAAgHQgBgHgCgCQgEgFgFACQgEACAAAIIABAJIgJgBIAAgUIACgoIAOjwIAPkBQCfgDCHClQA5BFAeBLQAfBNgHA5QgCAPgHANIgEgDIgHgDIAAgEIAAgDQADgGgDgEQgCgDgEABQgEAAgDADIgDAGIgFAAQgHABgBACQgCADAEAFIACACIgHAJIgJASIgGAUIgDAIQg4AahiAKIgEAAQgxAFg3AAIgmgBgACrDCIAHgJIgEAVIgGAEIADgQg");
	this.shape_1.setTransform(188.1,89.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#186800").ss(3,1,1).p("AC/D8QAYhxgpiaQgqihhJg2QhIg4hAA9QhAA9gVCSQgNBdgOB1QgJBBgBAA");
	this.shape_2.setTransform(178.8,101.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2BA005").s().p("Ai9DAIAbjSQAViSBAg9QBAg9BIA4QBJA2AqChQApCagYBxImGAFQABAAAJhBg");
	this.shape_3.setTransform(178.8,101.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#186800").ss(3,1,1).p("ABYkQIg9gMIgyAJQgcAIgcARQgyAfghAzQgiAzgEA0QgGBYgJBKQgCARAAANACKjzIgBgBACMEdQALg1AWhMQAehsAIgqQAeiihehPQgFgFgFgEIgXgPQgMgHgMgF");
	this.shape_4.setTransform(172.5,107.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2BA005").s().p("AgpDmQi1hOABgBIABgCIAogQIARgGIATgEIAVgFQAIgBgCgFQgBgCgEAAQgMgCgKAEIgHACIgEgCQgJgDgPADIgYAGIgLABIADgeQAKhKAGhYQAEg0AhgzQAhgzAygfQAcgRAagIIAzgJIA8AMIACABQAMAFAMAHIAYAPIAJAJQBIA8AABsQAAAjgIAoQgIAogeBsQgWBNgKA0IgLgBIAAAAQAAgEgDgCIgCgBIgBgBQgEgDgEACQgEABgBAFQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAIgDAHIgEAIIgCAEIiNg/gACPEVQAKg0AWhNQAehsAIgoQAIgoAAgjQAAhshIg8IgJgJIAAABIAKAIQBeBPgeCkQgIAogeBsQgWBNgKA0g");
	this.shape_5.setTransform(172.2,108.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#186800").ss(3,1,1).p("AA6kPIg7gGIg0ANQgaALgbAUQgvAjgcA2QgcA2ABA0QACBYgCBLQAAARABANABuj4IgZgNQgMgGgNgEABvj4IgBAAACkEWQAFg1APhPQAThuAEgpQAPilhmhHQgEgDgEgDQgBgBgBAA");
	this.shape_6.setTransform(175.7,106.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2BA005").s().p("AgXDvQi8g9ABgBIABgBIAmgUIARgHIATgHIAUgGQAHgCgCgFQgBgCgEAAQgNAAgIAFIgHACIgEgBQgKgDgPAEIgXAJIgLACIAAgfQADhJgDhZQgBgzAdg3QAcg1AvglQAZgSAagLIAzgOIA7AGIADABQAMAEANAFIAZANIAAABIABAAIAKAGQBlBHgOCmQgEAogTBvQgPBOgGA1IgBAAQAGg1APhOQAThvAEgoQACgVAAgTQAAiHhZg+IgJgGIAJAGQBZA+AACHQAAATgCAVQgEAogTBvQgPBOgGA1IgKAAIAAAAQgBgDgDgCIgCgCIgBAAQgFgCgEABQgDACgBAFQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAIgDAGIgDAJIgCAEIiSgxg");
	this.shape_7.setTransform(175.6,107.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#186800").ss(3,1,1).p("AgxkDIg9AFIgwAXACeEEQgEg1gBhQQgChwgEgpQgBgLgCgLQgBgHgBgGQAAgBAAAAQgZiHhkgsQgFgDgFgCIgBAAQAAAAgBAAIgZgIQgNgEgNgB");
	this.shape_8.setTransform(186.1,103);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2BA005").s().p("AAXEJQjCgYABgBIABgCIAhgbIAPgKIARgJIATgLQAHgDgDgFQgCgBgEAAQgMADgIAGIgGAEIgFgBQgJgBgOAIIgWANIgKADIgFgdIgDgRIgKg4IgIgoIgFgYIgFgZIgDgNQgGgrAQg0QARg5AngsQAVgYAXgQIAwgXIA7gFIADAAQANABANAEIAbAHIABABIABAAIAKAFQBkAsAZCGIAAACIACANIADAWQAEApACBwQABBPAEA2IgKACIAAgBIgEgEIgDgBIgBAAQgFgCgEADQgDADAAAEQgBABAAAAQgBAAAAAAQAAABAAAAQgBAAAAABIgBAHIgBAIIgBAFIibgUgAA4kcIABAAIAAABIgBgBg");
	this.shape_9.setTransform(180.5,103.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#186800").ss(3,1,1).p("ACvD8QAAgkgDgfQgDgngCgaQgEgvgIgvQgJgsgCgOQgCgLgCgLQgCgHgCgGQAAgBAAAAQAAgCgBgCQgCgIgCgIQglh0hegiQgEgCgGgCIAAAAQgBgBAAAAIgbgFQgOgDgMAAAhDj7Ig9AKIguAa");
	this.shape_10.setTransform(194,89.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2BA005").s().p("AAhEdQjCgLAAgBIABgCIAfgdIAOgMIARgKIARgMQAHgEgDgEQgCgBgEAAQgMAEgHAHIgGAEIgFgBQgJAAgOAJIgUAOIgKAEIgHgdIgEgQIgOg4IgLgnIgGgYIgIgYIgDgNQgJgrAMg0QANg6AkgvQATgaAWgRIAugaIA9gKIADAAQANABALACIAbAGIABAAIABAAIAKAFQBgAiAkB0IAFAPIABAEIAAABIADANIAEAWIALA6QAIAvAFAvIAFBBQACAgABAkIgLACIAAAAIgEgEIgCgBIgCAAQgFgBgDADQgDADAAAEQgBABAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIAAAHQAAADgBAFIgBAFIicgIgAA/kkIABAAIAAABIgBgBg");
	this.shape_11.setTransform(189.1,88.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#186800").ss(3,1,1).p("AhujkIg6AUIgqAhADTDmQgHgjgHgfQgJglgHgaQgMgugPgtQgQgqgEgNQgEgLgEgLQgDgGgCgGQgBAAAAgBQAAgBgBgCQgEgIgDgHQg3hthhgSQgGgCgGgBIAAAAQgBAAAAAAIgcgBQgNgBgNAC");
	this.shape_12.setTransform(196.9,69.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2BA005").s().p("AiGEKIAAgCIAagiIAMgOIAPgMIAPgPQAHgFgFgEIgGABQgLAFgGAIIgFAFIgEABQgKABgMAKIgRASIgKAGIgMgcIgFgQIgXg0IgSglIgKgXIgLgWIgFgMQgRgrAEg0QADg7Adg1QAOgcATgUIAqghIA6gUIADgBQANgBANAAIAcABIABABIAAAAIAMACQBhATA3BsIAHAPIABAEIABABIAFAMIAIAVIAUA5QAPAsAMAtIAQBAQAHAeAHAkIgKAEIgBgBIgEgDIgCgBIgCABQgGAAgCADQgDADABAFQAAAAgBABQAAAAAAABQgBAAAAAAQAAABAAAAIABAHQABADgBAGIAAAEIibARQi1AUgLAAIgBAAg");
	this.shape_13.setTransform(193.6,73.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#186800").ss(3,1,1).p("AhEjRQgBA6gCBSQgCCLgBCMQgBAAAjgaQAqgiAighQAWgVARgT");
	this.shape_14.setTransform(185.9,89.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2BA005").s().p("AhpEYIAAAAIAAAAgAhmAAIADiLIAAAAIAPAWIAFAIQAEAEAFgBQADgBABgEQAGAIAEgBQAFAAABgGQAAgEgCgFQgEgJgKgIIgRgPQgGgGgKgMQAChuADAAQADAAAcAbQAhAfAeAlQBcBuANBMQAIAzguBAIgEgJQgFgKgEgEQgEABgDAEIgBABQgDgCgDABQgGACABAFQAAADADAHIABABIAAAHIAFAXQgRATgWAWQggAhgsAhIgiAaIADkYg");
	this.shape_15.setTransform(189,82.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#186800").ss(3,1,1).p("Ah1lfQgEBlgGDHQgHDJgGDJQBPiABMiPQBcimAihg");
	this.shape_16.setTransform(192.5,75.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2BA005").s().p("Ah/gzIAKkrIABAAQATALAQADIAdANQAHAEAOAMIAkAeIAcAXQARAMAkAUIALAGIABACQACADAHACIACABQAGACAJAHIANALIABABIADAFQgiBghcCmQhMCQhPB/IANmSg");
	this.shape_17.setTransform(192.5,75.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#186800").ss(3,1,1).p("AhumJQgEBFgLE8QgGDIgGDKQBJihBGiwQBzkVARhr");
	this.shape_18.setTransform(192.2,71.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2BA005").s().p("Ah9gIQALk8AEhFIAeACIAkACQASACASAEIAwAJQAXAGAUAIIAeANIAZAVQgRBqhzEVQhGCwhJChIAMmSg");
	this.shape_19.setTransform(192.2,71.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#186800").ss(3,1,1).p("Ai+muQgCAgAFGOQAEDXADDYQBiivBfi/QCbktAYhv");
	this.shape_20.setTransform(196.5,67.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2BA005").s().p("Ai7AAQgFmOACggIF+BTQgYBvibEtQhfC/hiCvIgHmvg");
	this.shape_21.setTransform(196.5,67.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#186800").ss(3,1,1).p("AiSm4QgrARgBAAQgEABAGGuQAEDZADDYQBkjFBijVQCLkmAlh/");
	this.shape_22.setTransform(196.6,66.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2BA005").s().p("Ai8AJQgGmvAEgBIAsgRIFTAyQglB/iLEmQhiDVhkDFIgHmwg");
	this.shape_23.setTransform(196.6,66.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#186800").ss(3,1,1).p("Ahnm6QgMADgNADQg7APgBAAQgEABAGGuQAEDZADDYQBji2BgjGQCOkcAhh4");
	this.shape_24.setTransform(196.4,66.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2BA005").s().p("Ai6AKQgGmuAEgBIA8gPIAZgGIEmBlQghB4iOEcQhgDGhjC2IgHmxg");
	this.shape_25.setTransform(196.4,66.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#186800").ss(3,1,1).p("AiAnQQAAAAgBABQgyBBgCAAQgDAAAGGvQADDYAEDYQBcifBciuQCNkIAdhs");
	this.shape_26.setTransform(195.6,64.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2BA005").s().p("AiyAhQgGmvADAAQACAAAyhBIABgBIE3DgQgdBsiNEIQhcCuhcCfIgHmwg");
	this.shape_27.setTransform(195.6,64.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#186800").ss(3,1,1).p("AhlnZQgMALgNAMQg0A8gCAAQgDABAGGuQADDZAEDYQBYh6BYiJQCnj9AJhV");
	this.shape_28.setTransform(195.5,63.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2BA005").s().p("AixApQgGmuADgBQACAAA0g8IAZgXIEbFeQgJBVinD9QhYCJhYB6IgHmxg");
	this.shape_29.setTransform(195.5,63.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#186800").ss(3,1,1).p("ADXoeQg/gLhWAMQg1AIg5AQQgnALgqAPQhXAigBAAQgEABAPH1QAHD7AID8QCVjGCSjWQA4hRAuhCQABgBAAgC");
	this.shape_30.setTransform(197.2,56);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2BA005").s().p("AjKAtQgPn1AEgBIBYgiQAqgPAngLQA5gQA1gIQBWgMA/ALIhME7IBIDVIgBADQguBCg4BRQiSDWiVDGIgPn3g");
	this.shape_31.setTransform(197.2,56);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#186800").ss(3,1,1).p("ADXoeQg/gLhWAMQg1AIg4AQQgoALgqAPQhXAigBAAQgEABAPH1QAHD7AID8QCVjGCSjWQA5hRAthCQABgCABgB");
	this.shape_32.setTransform(197.2,57.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2BA005").s().p("AjKAtQgPn1AEgBIBYgiQAqgPAogLQA4gQA1gIQBWgMA/ALIhME7IBJDVIgCADQgtBCg5BRQiSDWiVDGIgPn3g");
	this.shape_33.setTransform(197.2,57.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33,p:{y:57.3}},{t:this.shape_32,p:{y:57.3}}]},1).to({state:[{t:this.shape_33,p:{y:57.8}},{t:this.shape_32,p:{y:57.8}}]},1).wait(1));

	// Calque 1
	this.instance = new lib.Jambegauche();
	this.instance.parent = this;
	this.instance.setTransform(225.9,63.2,1,1,0,0,0,25.9,57.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:26,rotation:5.2,x:200.2,y:78.1},0).wait(1).to({regX:26.1,rotation:10.7,x:188.3,y:110.3},0).wait(1).to({x:177.8,y:135.1},0).wait(1).to({regX:26,regY:57.7,rotation:6.7,x:168.8,y:154.8},0).wait(1).to({regX:26.1,rotation:0.5,x:161.1,y:165.3},0).wait(1).to({regX:25.7,regY:14.6,x:166.1,y:124.4},0).wait(1).to({rotation:-2.2,x:175.5,y:122.2},0).wait(1).to({regX:25.8,rotation:-4.7,x:184.9,y:109},0).wait(1).to({regY:14.7,rotation:-17.4,x:189.5,y:87.3},0).wait(1).to({regX:25.7,rotation:-35.6,x:185,y:60.9},0).wait(1).to({regY:14.8,rotation:-65.6,x:181.3,y:30},0).wait(1).to({rotation:-80.6,x:186.6,y:23.6},0).wait(1).to({regX:25.6,rotation:-86.4,x:188.8,y:18.6},0).wait(1).to({regY:14.9,rotation:-89.1,x:189.8,y:14.9},0).wait(1).to({regY:15,rotation:-79.4,x:191.8,y:14.8},0).wait(1).to({rotation:-64.4,x:194.8,y:16.9},0).wait(1).to({regY:15.1,rotation:-49.4,x:198.1,y:20.8},0).wait(1).to({rotation:-34.4,x:211.1,y:20.3},0).wait(1).to({regY:15.2,rotation:-19.4,x:216.9,y:19.6},0).wait(1).to({regY:15.3,rotation:-5.1,x:219.1,y:18.2},0).wait(1));

	// Calque 2
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#C16122").ss(2,1,1).p("AiUAGQgCAAACgCQAOgCA9gCQA/gBAggEQBSgIAPgEQAfgKgBADQAAADgHALQABAKAHAZg");
	this.shape_34.setTransform(259.8,118.5,1,1,4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E0711A").s().p("AiUAGQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABgBIBLgEQA/gBAggEQBSgIAPgEQAfgKgBADIgHAOQABAKAHAZg");
	this.shape_35.setTransform(259.8,118.5,1,1,4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#C16122").ss(2,1,1).p("ACSgQIkigfQgBAAAAABQgBACACAAIELBcQgDgIgBgXQAAgOANgKg");
	this.shape_36.setTransform(257.3,130.6,1,1,4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E0711A").s().p("AiQgsQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIEiAfIgOAJQgNAKAAAOQABAXADAIg");
	this.shape_37.setTransform(257.3,130.6,1,1,4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#C16122").ss(3,1,1).p("Agmi2IAfALQAlAMAlAEQA5AFAKABQAaACAdgCQAcgCAigOQARgHAMgGIARgJQATgHANAIQATAMAFAHQAIAKgEAPQgEALgOAMQgLAKAAAIQAAAaAMAEQAAABAPgMQATgKAYAHQAUAHALAPQAMARgGARQgOAngWAGQgQAEg8gCQgHAAgHACQgOAEgBAOQgBAWAAAEQABAJAJAEQAIAEAdAHQAbAHAGANQAGANgIAaQgHAXgHAGQgaAVgjgJQgggPgEgBQi2gmihgjQlDhGgageQgNgTAWg2QAWg1AYgLQAQgHAcAAQARAAAtACQBoABCBgog");
	this.shape_38.setTransform(240.6,126.4,1,1,4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFB430").s().p("AEoC8IgkgQIlXhJQlDhGgageQgNgTAWg2QAWg1AYgLQAQgHAcAAIA+ACQBoABCBgoIAfALQAlAMAlAEIBDAGQAaACAdgCQAcgCAigOQARgHAMgGIARgJQATgHANAIQATAMAFAHQAIAKgEAPQgEALgOAMQgLAKAAAIQAAAaAMAEIAPgLQATgKAYAHQAUAHALAPQAMARgGARQgOAngWAGQgQAEg8gCQgHAAgHACQgOAEgBAOIgBAaQABAJAJAEQAIAEAdAHQAbAHAGANQAGANgIAaQgHAXgHAGQgSAPgWAAQgKAAgLgDg");
	this.shape_39.setTransform(240.6,126.4,1,1,4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#C16122").ss(3,1,1).p("Ag5i2IAfALQAlAMAlAEQA5AFAKABQAaACAdgCQAcgCAigOQARgHAMgGIARgJQATgHANAIQATAMAFAHQAIAKgEAPQgEALgOAMQgLAKAAAIQAAAaAMAEQAAABAPgMQATgKAYAHQAUAHALAPQAMARgGARQgOAngWAGQgQAEg8gCQgHAAgHACQgOAEgBAOQgBAWAAAEQABAJAJAEQAIAEAdAHQAbAHAGANQAGANgIAaQgHAXgHAGQgaAVgjgJQgggPgEgBQipgwiWgtQkqhYgaggQgPgXAAgTQAAgWAWgKQAQgHBZgKQBqgLB/gng");
	this.shape_40.setTransform(209.4,144.1,1,1,14.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFB430").s().p("AEVC8IgkgQQipgwiWgtQkqhYgaggQgPgXAAgTQAAgWAWgKQAQgHBZgKQBqgLB/gnIAfALQAlAMAlAEIBDAGQAaACAdgCQAcgCAigOQARgHAMgGIARgJQATgHANAIQATAMAFAHQAIAKgEAPQgEALgOAMQgLAKAAAIQAAAaAMAEIAPgLQATgKAYAHQAUAHALAPQAMARgGARQgOAngWAGQgQAEg8gCQgHAAgHACQgOAEgBAOIgBAaQABAJAJAEQAIAEAdAHQAbAHAGANQAGANgIAaQgHAXgHAGQgSAPgXAAQgKAAgKgDg");
	this.shape_41.setTransform(209.4,144.1,1,1,14.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#C16122").ss(3,1,1).p("AAAkoIAwBmQA2BrAYAdQAkArAHAIQARASAWASQAVASAiAPQASAHAMAEIASAGQATAIAEAPQAFAWgBAIQgCANgOAHQgKAGgSgCQgPgBgGAGQgTATAGALQAAABATABQAVAHALAWQAKATgCATQgEAUgQAIQgnAUgUgMQgPgJgpgrQgEgFgGgEQgOgGgKAJQgRAPgCADQgGAHAEAJQADAJAQAZQANAYgEAMQgFAPgYAMQgWAMgJgBQghgDgSggQgMgggCgEQhlibhbiMQi1kSAEgpQAFgWAcgXQAbgWAbgGQBjgXCXBlg");
	this.shape_42.setTransform(190.2,182.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFB430").s().p("ABhF8QghgDgSggIgOgkIjAknQi1kSAEgpQAFgWAcgXQAbgWAbgGQBjgXCXBlIAwBmQA2BrAYAdIArAzQARASAWASQAVASAiAPIAeALIASAGQATAIAEAPQAFAWgBAIQgCANgOAHQgKAGgSgCQgPgBgGAGQgTATAGALIATACQAVAHALAWQAKATgCATQgEAUgQAIQgnAUgUgMQgPgJgpgrQgEgFgGgEQgOgGgKAJQgRAPgCADQgGAHAEAJQADAJAQAZQANAYgEAMQgFAPgYAMQgUALgJAAIgCAAg");
	this.shape_43.setTransform(190.2,182.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#C16122").ss(3,1,1).p("AA3k4IAbCFQAfCMARAhQAZAvAFAKQAMAWASAXQARAWAfAWQAQAKAMAHIARAKQARANAAAOQgBAWgEAHQgFAMgQADQgMADgSgGQgQgFgHAEQgZANADAMQAAABATAGQATALAGAXQAFAUgIARQgJASgTADQguAJgRgQQgNgLgegzQgDgGgGgFQgMgJgNAGQgWAKgDACQgHAFABAJQAAAJAKAbQAHAagIALQgJAMgcAFQgYAGgJgDQgigMgKghQgDgigBgEQgBgGh4kbQhzkOAFgnQAFghAvgmQAugkAeABQAQAAAigBQAeABAWAEQBAAOA8A/g");
	this.shape_44.setTransform(167.8,230.6,1,1,4.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFB430").s().p("AgUGKQgigMgKghQgDgigBgEQgBgGh4kbQhzkOAFgnQAFghAvgmQAugkAeABIAygBQAeABAWAEQBAAOA8A/IAbCFQAfCMARAhIAeA5QAMAWASAXQARAWAfAWIAcARIARAKQARANAAAOQgBAWgEAHQgFAMgQADQgMADgSgGQgQgFgHAEQgZANADAMIATAHQATALAGAXQAFAUgIARQgJASgTADQguAJgRgQQgNgLgegzQgDgGgGgFQgMgJgNAGIgZAMQgHAFABAJQAAAJAKAbQAHAagIALQgJAMgcAFQgPAEgJAAIgJgBg");
	this.shape_45.setTransform(167.8,230.6,1,1,4.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#C16122").ss(3,1,1).p("AAxk4IAbCFQAfCMARAhQAZAvAFAKQAMAWASAXQARAWAfAWQAQAKAMAHIARAKQARANAAAOQgBAWgEAHQgFAMgQADQgMADgSgGQgQgFgHAEQgZANADAMQAAABATAGQATALAGAXQAFAUgIARQgJASgTADQguAJgRgQQgNgLgegzQgDgGgGgFQgMgJgNAGQgWAKgDACQgHAFABAJQAAAJAKAbQAHAagIALQgJAMgcAFQgYAGgJgDQgigMgKghQgDgigBgEQgBgFhykTQhtkFAFgnQAFgjApgtQAqgtAcABQAQAAAigBQAeABAWAEQBAAOA8A/g");
	this.shape_46.setTransform(161.7,240.8,1,1,11.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFB430").s().p("AgaGKQgigMgKghQgDgigBgEQgBgFhykTQhtkFAFgnQAFgjApgtQAqgtAcABIAygBQAeABAWAEQBAAOA8A/IAbCFQAfCMARAhIAeA5QAMAWASAXQARAWAfAWIAcARIARAKQARANAAAOQgBAWgEAHQgFAMgQADQgMADgSgGQgQgFgHAEQgZANADAMIATAHQATALAGAXQAFAUgIARQgJASgTADQguAJgRgQQgNgLgegzQgDgGgGgFQgMgJgNAGIgZAMQgHAFABAJQAAAJAKAbQAHAagIALQgJAMgcAFQgPAEgJAAIgJgBg");
	this.shape_47.setTransform(161.7,240.8,1,1,11.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#C16122").ss(3,1,1).p("AAik4IAbCFQAfCMARAhQAZAvAFAKQAMAWASAXQARAWAfAWQAQAKAMAHIARAKQARANAAAOQgBAWgEAHQgFAMgQADQgMADgSgGQgQgFgHAEQgZANADAMQAAABATAGQATALAGAXQAFAUgIARQgJASgTADQguAJgRgQQgNgLgegzQgDgGgGgFQgMgJgNAGQgWAKgDACQgHAFABAJQAAAJAKAbQAHAagIALQgJAMgaAFQgaAGgJgDQgigMgKghQgDgigBgEQgBgChjkWQhekFAFgnQAFgmAagqQAdgtAaABQAQAAAigBQAeABAWAEQBAAOA8A/g");
	this.shape_48.setTransform(287.1,70.7,1,1,-107.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFB430").s().p("AgpGKQgigMgKghQgDgigBgEIhkkYQhekFAFgnQAFgmAagqQAdgtAaABIAygBQAeABAWAEQBAAOA8A/IAbCFQAfCMARAhIAeA5QAMAWASAXQARAWAfAWIAcARIARAKQARANAAAOQgBAWgEAHQgFAMgQADQgMADgSgGQgQgFgHAEQgZANADAMIATAHQATALAGAXQAFAUgIARQgJASgTADQguAJgRgQQgNgLgegzQgDgGgGgFQgMgJgNAGIgZAMQgHAFABAJQAAAJAKAbQAHAagIALQgJAMgaAFQgRAEgJAAIgJgBg");
	this.shape_49.setTransform(287.1,70.7,1,1,-107.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#C16122").ss(3,1,1).p("AATk4IAbCFQAfCMARAhQAZAvAFAKQAMAWASAXQARAWAfAWQAQAKAMAHIARAKQARANAAAOQgBAWgEAHQgFAMgQADQgMADgSgGQgQgFgHAEQgZANADAMQAAABATAGQATALAGAXQAFAUgIARQgJASgTADQguAJgRgQQgNgLgegzQgDgGgGgFQgMgJgNAGQgWAKgDACQgHAFABAJQAAAJAKAbQAHAagIALQgJAMgaAFQgaAGgJgDQgigMgKghQgDgigBgEQgtibgoiMQhPkTAFgoQAGgrAKgWQAOgeAaABQAQAAAigBQAeABAWAEQBAAOA8A/g");
	this.shape_50.setTransform(281.3,91.6,1,1,-92.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFB430").s().p("Ag4GKQgigMgKghQgDgigBgEIhVknQhPkTAFgoQAGgrAKgWQAOgeAaABIAygBQAeABAWAEQBAAOA8A/IAbCFQAfCMARAhIAeA5QAMAWASAXQARAWAfAWIAcARIARAKQARANAAAOQgBAWgEAHQgFAMgQADQgMADgSgGQgQgFgHAEQgZANADAMIATAHQATALAGAXQAFAUgIARQgJASgTADQguAJgRgQQgNgLgegzQgDgGgGgFQgMgJgNAGIgZAMQgHAFABAJQAAAJAKAbQAHAagIALQgJAMgaAFQgRAEgJAAIgJgBg");
	this.shape_51.setTransform(281.3,91.6,1,1,-92.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{rotation:4,x:257.3,y:130.6,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.shape_36,p:{rotation:4,x:257.3,y:130.6,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.shape_35,p:{rotation:4,x:259.8,y:118.5,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.shape_34,p:{rotation:4,x:259.8,y:118.5,scaleX:1,scaleY:1,skewX:0,skewY:0}}]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_37,p:{rotation:14.7,x:223.2,y:150.9,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.shape_36,p:{rotation:14.7,x:223.2,y:150.9,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.shape_35,p:{rotation:14.7,x:227.8,y:139.5,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.shape_34,p:{rotation:14.7,x:227.8,y:139.5,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.shape_43,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:190.2,y:182.7}},{t:this.shape_42,p:{scaleX:1,scaleY:1,skewX:0,skewY:0,x:190.2,y:182.7}},{t:this.shape_37,p:{rotation:44.7,x:196.9,y:197.2,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.shape_36,p:{rotation:44.7,x:196.9,y:197.2,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.shape_35,p:{rotation:44.7,x:206.6,y:189.6,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.shape_34,p:{rotation:44.7,x:206.6,y:189.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.shape_43,p:{scaleX:1.064,scaleY:0.969,skewX:16.6,skewY:13.5,x:173.6,y:210.8}},{t:this.shape_42,p:{scaleX:1.064,scaleY:0.969,skewX:16.6,skewY:13.5,x:173.6,y:210.8}},{t:this.shape_37,p:{rotation:0,x:176.5,y:225.7,scaleX:0.99,scaleY:1.044,skewX:62.3,skewY:56.9}},{t:this.shape_36,p:{rotation:0,x:176.5,y:225.7,scaleX:0.99,scaleY:1.044,skewX:62.3,skewY:56.9}},{t:this.shape_35,p:{rotation:0,x:188.7,y:221.1,scaleX:0.99,scaleY:1.044,skewX:62.3,skewY:56.9}},{t:this.shape_34,p:{rotation:0,x:188.7,y:221.1,scaleX:0.99,scaleY:1.044,skewX:62.3,skewY:56.9}}]},1).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_37,p:{rotation:0,x:167.8,y:247.3,scaleX:0.99,scaleY:1.044,skewX:66.5,skewY:61.2}},{t:this.shape_36,p:{rotation:0,x:167.8,y:247.3,scaleX:0.99,scaleY:1.044,skewX:66.5,skewY:61.2}},{t:this.shape_35,p:{rotation:0,x:180.3,y:243.6,scaleX:0.99,scaleY:1.044,skewX:66.5,skewY:61.2}},{t:this.shape_34,p:{rotation:0,x:180.3,y:243.6,scaleX:0.99,scaleY:1.044,skewX:66.5,skewY:61.2}}]},1).to({state:[{t:this.shape_47,p:{rotation:11.9,x:161.7,y:240.8}},{t:this.shape_46,p:{rotation:11.9,x:161.7,y:240.8}},{t:this.shape_37,p:{rotation:0,x:158.8,y:257.2,scaleX:0.99,scaleY:1.044,skewX:74.2,skewY:68.9}},{t:this.shape_36,p:{rotation:0,x:158.8,y:257.2,scaleX:0.99,scaleY:1.044,skewX:74.2,skewY:68.9}},{t:this.shape_35,p:{rotation:0,x:171.7,y:255.2,scaleX:0.99,scaleY:1.044,skewX:74.2,skewY:68.9}},{t:this.shape_34,p:{rotation:0,x:171.7,y:255.2,scaleX:0.99,scaleY:1.044,skewX:74.2,skewY:68.9}}]},1).to({state:[{t:this.shape_47,p:{rotation:8.5,x:168.4,y:244.1}},{t:this.shape_46,p:{rotation:8.5,x:168.4,y:244.1}},{t:this.shape_37,p:{rotation:0,x:166.5,y:260.7,scaleX:0.99,scaleY:1.044,skewX:70.8,skewY:65.4}},{t:this.shape_36,p:{rotation:0,x:166.5,y:260.7,scaleX:0.99,scaleY:1.044,skewX:70.8,skewY:65.4}},{t:this.shape_35,p:{rotation:0,x:179.2,y:257.9,scaleX:0.99,scaleY:1.044,skewX:70.8,skewY:65.4}},{t:this.shape_34,p:{rotation:0,x:179.2,y:257.9,scaleX:0.99,scaleY:1.044,skewX:70.8,skewY:65.4}}]},1).to({state:[{t:this.shape_47,p:{rotation:3.5,x:184.5,y:241.4}},{t:this.shape_46,p:{rotation:3.5,x:184.5,y:241.4}},{t:this.shape_37,p:{rotation:0,x:184,y:258.1,scaleX:0.99,scaleY:1.044,skewX:65.8,skewY:60.4}},{t:this.shape_36,p:{rotation:0,x:184,y:258.1,scaleX:0.99,scaleY:1.044,skewX:65.8,skewY:60.4}},{t:this.shape_35,p:{rotation:0,x:196.4,y:254.3,scaleX:0.99,scaleY:1.044,skewX:65.8,skewY:60.4}},{t:this.shape_34,p:{rotation:0,x:196.4,y:254.3,scaleX:0.99,scaleY:1.044,skewX:65.8,skewY:60.4}}]},1).to({state:[{t:this.shape_47,p:{rotation:-2,x:200.8,y:227.3}},{t:this.shape_46,p:{rotation:-2,x:200.8,y:227.3}},{t:this.shape_37,p:{rotation:0,x:201.8,y:244.2,scaleX:0.99,scaleY:1.044,skewX:60.3,skewY:54.9}},{t:this.shape_36,p:{rotation:0,x:201.8,y:244.2,scaleX:0.99,scaleY:1.044,skewX:60.3,skewY:54.9}},{t:this.shape_35,p:{rotation:0,x:213.8,y:239.1,scaleX:0.99,scaleY:1.044,skewX:60.3,skewY:54.9}},{t:this.shape_34,p:{rotation:0,x:213.8,y:239.1,scaleX:0.99,scaleY:1.044,skewX:60.3,skewY:54.9}}]},1).to({state:[{t:this.shape_47,p:{rotation:-6.6,x:227,y:199.2}},{t:this.shape_46,p:{rotation:-6.6,x:227,y:199.2}},{t:this.shape_37,p:{rotation:0,x:229.3,y:216,scaleX:0.99,scaleY:1.044,skewX:55.7,skewY:50.3}},{t:this.shape_36,p:{rotation:0,x:229.3,y:216,scaleX:0.99,scaleY:1.044,skewX:55.7,skewY:50.3}},{t:this.shape_35,p:{rotation:0,x:240.8,y:210,scaleX:0.99,scaleY:1.044,skewX:55.7,skewY:50.3}},{t:this.shape_34,p:{rotation:0,x:240.8,y:210,scaleX:0.99,scaleY:1.044,skewX:55.7,skewY:50.3}}]},1).to({state:[{t:this.shape_47,p:{rotation:-22.7,x:254,y:155.3}},{t:this.shape_46,p:{rotation:-22.7,x:254,y:155.3}},{t:this.shape_37,p:{rotation:0,x:260.9,y:170.7,scaleX:0.99,scaleY:1.044,skewX:39.6,skewY:34.2}},{t:this.shape_36,p:{rotation:0,x:260.9,y:170.7,scaleX:0.99,scaleY:1.044,skewX:39.6,skewY:34.2}},{t:this.shape_35,p:{rotation:0,x:270.3,y:161.8,scaleX:0.99,scaleY:1.044,skewX:39.6,skewY:34.2}},{t:this.shape_34,p:{rotation:0,x:270.3,y:161.8,scaleX:0.99,scaleY:1.044,skewX:39.6,skewY:34.2}}]},1).to({state:[{t:this.shape_47,p:{rotation:-62.7,x:292.7,y:73.3}},{t:this.shape_46,p:{rotation:-62.7,x:292.7,y:73.3}},{t:this.shape_37,p:{rotation:0,x:308,y:80.8,scaleX:0.99,scaleY:1.044,skewX:-0.4,skewY:-5.8}},{t:this.shape_36,p:{rotation:0,x:308,y:80.8,scaleX:0.99,scaleY:1.044,skewX:-0.4,skewY:-5.8}},{t:this.shape_35,p:{rotation:0,x:309.4,y:67.9,scaleX:0.99,scaleY:1.044,skewX:-0.4,skewY:-5.8}},{t:this.shape_34,p:{rotation:0,x:309.4,y:67.9,scaleX:0.99,scaleY:1.044,skewX:-0.4,skewY:-5.8}}]},1).to({state:[{t:this.shape_47,p:{rotation:-87.2,x:307,y:31.5}},{t:this.shape_46,p:{rotation:-87.2,x:307,y:31.5}},{t:this.shape_37,p:{rotation:0,x:324.1,y:32.1,scaleX:0.99,scaleY:1.044,skewX:-24.9,skewY:-30.3}},{t:this.shape_36,p:{rotation:0,x:324.1,y:32.1,scaleX:0.99,scaleY:1.044,skewX:-24.9,skewY:-30.3}},{t:this.shape_35,p:{rotation:0,x:320,y:19.8,scaleX:0.99,scaleY:1.044,skewX:-24.9,skewY:-30.3}},{t:this.shape_34,p:{rotation:0,x:320,y:19.8,scaleX:0.99,scaleY:1.044,skewX:-24.9,skewY:-30.3}}]},1).to({state:[{t:this.shape_47,p:{rotation:-109.4,x:301.4,y:9.4}},{t:this.shape_46,p:{rotation:-109.4,x:301.4,y:9.4}},{t:this.shape_37,p:{rotation:0,x:317.6,y:3.7,scaleX:0.99,scaleY:1.044,skewX:-47,skewY:-52.4}},{t:this.shape_36,p:{rotation:0,x:317.6,y:3.7,scaleX:0.99,scaleY:1.044,skewX:-47,skewY:-52.4}},{t:this.shape_35,p:{rotation:0,x:309.2,y:-6.2,scaleX:0.99,scaleY:1.044,skewX:-47,skewY:-52.4}},{t:this.shape_34,p:{rotation:0,x:309.2,y:-6.2,scaleX:0.99,scaleY:1.044,skewX:-47,skewY:-52.4}}]},1).to({state:[{t:this.shape_47,p:{rotation:-118,x:301.2,y:-2.4}},{t:this.shape_46,p:{rotation:-118,x:301.2,y:-2.4}},{t:this.shape_37,p:{rotation:0,x:316.5,y:-10.3,scaleX:0.99,scaleY:1.044,skewX:-55.7,skewY:-61.1}},{t:this.shape_36,p:{rotation:0,x:316.5,y:-10.3,scaleX:0.99,scaleY:1.044,skewX:-55.7,skewY:-61.1}},{t:this.shape_35,p:{rotation:0,x:306.7,y:-18.9,scaleX:0.99,scaleY:1.044,skewX:-55.7,skewY:-61.1}},{t:this.shape_34,p:{rotation:0,x:306.7,y:-18.9,scaleX:0.99,scaleY:1.044,skewX:-55.7,skewY:-61.1}}]},1).to({state:[{t:this.shape_47,p:{rotation:-113.6,x:304.2,y:14.3}},{t:this.shape_46,p:{rotation:-113.6,x:304.2,y:14.3}},{t:this.shape_37,p:{rotation:0,x:320.1,y:7.6,scaleX:0.99,scaleY:1.044,skewX:-51.3,skewY:-56.6}},{t:this.shape_36,p:{rotation:0,x:320.1,y:7.6,scaleX:0.99,scaleY:1.044,skewX:-51.3,skewY:-56.6}},{t:this.shape_35,p:{rotation:0,x:311,y:-1.7,scaleX:0.99,scaleY:1.044,skewX:-51.3,skewY:-56.6}},{t:this.shape_34,p:{rotation:0,x:311,y:-1.7,scaleX:0.99,scaleY:1.044,skewX:-51.3,skewY:-56.6}}]},1).to({state:[{t:this.shape_47,p:{rotation:-116.3,x:299.3,y:42.1}},{t:this.shape_46,p:{rotation:-116.3,x:299.3,y:42.1}},{t:this.shape_37,p:{rotation:0,x:315,y:34.8,scaleX:0.99,scaleY:1.043,skewX:-54,skewY:-59.3}},{t:this.shape_36,p:{rotation:0,x:315,y:34.8,scaleX:0.99,scaleY:1.043,skewX:-54,skewY:-59.3}},{t:this.shape_35,p:{rotation:0,x:305.5,y:26,scaleX:0.99,scaleY:1.043,skewX:-54,skewY:-59.3}},{t:this.shape_34,p:{rotation:0,x:305.5,y:26,scaleX:0.99,scaleY:1.043,skewX:-54,skewY:-59.3}}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_37,p:{rotation:0,x:304.2,y:67.3,scaleX:0.99,scaleY:1.043,skewX:-45.2,skewY:-50.5}},{t:this.shape_36,p:{rotation:0,x:304.2,y:67.3,scaleX:0.99,scaleY:1.043,skewX:-45.2,skewY:-50.5}},{t:this.shape_35,p:{rotation:0,x:296.2,y:57.1,scaleX:0.99,scaleY:1.043,skewX:-45.2,skewY:-50.5}},{t:this.shape_34,p:{rotation:0,x:296.2,y:57.1,scaleX:0.99,scaleY:1.043,skewX:-45.2,skewY:-50.5}}]},1).to({state:[{t:this.shape_51,p:{rotation:-92.5,x:281.3,y:91.6}},{t:this.shape_50,p:{rotation:-92.5,x:281.3,y:91.6}},{t:this.shape_37,p:{rotation:0,x:298.8,y:94.3,scaleX:0.99,scaleY:1.043,skewX:-30.2,skewY:-35.5}},{t:this.shape_36,p:{rotation:0,x:298.8,y:94.3,scaleX:0.99,scaleY:1.043,skewX:-30.2,skewY:-35.5}},{t:this.shape_35,p:{rotation:0,x:293.6,y:82.4,scaleX:0.99,scaleY:1.043,skewX:-30.2,skewY:-35.5}},{t:this.shape_34,p:{rotation:0,x:293.6,y:82.4,scaleX:0.99,scaleY:1.043,skewX:-30.2,skewY:-35.5}}]},1).to({state:[{t:this.shape_51,p:{rotation:-77.5,x:266.2,y:106.6}},{t:this.shape_50,p:{rotation:-77.5,x:266.2,y:106.6}},{t:this.shape_37,p:{rotation:0,x:282.4,y:113.8,scaleX:0.99,scaleY:1.043,skewX:-15.2,skewY:-20.5}},{t:this.shape_36,p:{rotation:0,x:282.4,y:113.8,scaleX:0.99,scaleY:1.043,skewX:-15.2,skewY:-20.5}},{t:this.shape_35,p:{rotation:0,x:280.5,y:100.9,scaleX:0.99,scaleY:1.043,skewX:-15.2,skewY:-20.5}},{t:this.shape_34,p:{rotation:0,x:280.5,y:100.9,scaleX:0.99,scaleY:1.043,skewX:-15.2,skewY:-20.5}}]},1).to({state:[{t:this.shape_51,p:{rotation:-63.2,x:245.6,y:114.5}},{t:this.shape_50,p:{rotation:-63.2,x:245.6,y:114.5}},{t:this.shape_37,p:{rotation:0,x:259.6,y:125.7,scaleX:0.99,scaleY:1.043,skewX:-0.9,skewY:-6.3}},{t:this.shape_36,p:{rotation:0,x:259.6,y:125.7,scaleX:0.99,scaleY:1.043,skewX:-0.9,skewY:-6.3}},{t:this.shape_35,p:{rotation:0,x:260.9,y:112.8,scaleX:0.99,scaleY:1.043,skewX:-0.9,skewY:-6.3}},{t:this.shape_34,p:{rotation:0,x:260.9,y:112.8,scaleX:0.99,scaleY:1.043,skewX:-0.9,skewY:-6.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(195.6,4.1,90.6,145.1);


(lib.Bas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Jambegauche();
	this.instance.parent = this;
	this.instance.setTransform(220.7,61.7,1,1,0,0,0,25.9,57.6);

	this.instance_1 = new lib.Jambedroite();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.3,102.9,1,1,0,0,0,18,102.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(46));

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C16122").ss(2,1,1).p("AieARIATAVQAMASgDAHIEgh6QABAAgBgCQAAgBgBABg");
	this.shape.setTransform(25,127.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0711A").s().p("AiLAmIgTgVIE7hOQAAgBAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIkgB6QADgHgMgSg");
	this.shape_1.setTransform(25,127.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C16122").ss(2,1,1).p("AiDgZICLAAQAPAAApABQAoABAcAAIkAAxQAKgZgBgEQgBgCgHgKg");
	this.shape_2.setTransform(19.1,116.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0711A").s().p("AhzgDQAAgCgIgKIgHgKICLAAIA3ABQAnABAcAAIj+AyQAJgZgBgFg");
	this.shape_3.setTransform(19.1,116.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#C16122").ss(2,1,1).p("AiUAGQgCAAACgCQAOgCA9gCQA/gBAggEQBSgIAPgEQAfgKgBADQAAADgHALQABAKAHAZg");
	this.shape_4.setTransform(255.9,115.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0711A").s().p("AiUAGQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABgBIBLgEQA/gBAggEQBSgIAPgEQAfgKgBADIgHAOQABAKAHAZg");
	this.shape_5.setTransform(255.9,115.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#C16122").ss(2,1,1).p("ACSgQIkigfQgBAAAAABQgBACACAAIELBcQgDgIgBgXQAAgOANgKg");
	this.shape_6.setTransform(254.4,127.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0711A").s().p("AiQgsQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIEiAfIgOAJQgNAKAAAOQABAXADAIg");
	this.shape_7.setTransform(254.4,127.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C16122").ss(3,1,1).p("ABJjNQgSAIgiAJQhCAShPADQhOAEhQgKQhDgLgIAAQgxAAgCAdQgCAlAUAMQAEADAZAFQAVAFACAGQARAqgkgCQgagDgLAGQgMAGAAARQAAAaABALQADAXAMAJQALAJAeAEQAQACAVACQAKADAKALQALALgDAGQgCAFgJAKQgKAMgCAEQgFAIAAAKQgBAMAHAJQARAVAFAFQASAQAXgDQAWgDAXgUIATgTQBxg2BDgRQCmgrAxgPQCogwAQghQAPgggLg0IgOgvg");
	this.shape_8.setTransform(40.9,123.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFB430").s().p("AkcDAQgFgFgRgVQgHgJABgMQAAgKAFgIIAMgQQAJgKACgFQADgGgLgLQgKgLgKgDIglgEQgegEgLgJQgMgJgDgXQgBgLAAgaQAAgRAMgGQALgGAaADQAkACgRgqQgCgGgVgFQgZgFgEgDQgUgMACglQACgdAxAAQAIAABDALQBQAKBOgEQBPgDBCgSQAigJASgIIE9AbIAOAvQALA0gPAgQgQAhioAwQgxAPimArQhDARhxA2IgTATQgXAUgWADIgGABQgTAAgQgOg");
	this.shape_9.setTransform(40.9,123.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#C16122").ss(3,1,1).p("Agki2IAfALQAlAMAlAEQA5AFAKABQAaACAdgCQAcgCAigOQARgHAMgGIARgJQATgHANAIQATAMAFAHQAIAKgEAPQgEALgOAMQgLAKAAAIQAAAaAMAEQAAABAPgMQATgKAYAHQAUAHALAPQAMARgGARQgOAngWAGQgQAEg8gCQgHAAgHACQgOAEgBAOQgBAWAAAEQABAJAJAEQAIAEAdAHQAbAHAGANQAGANgIAaQgHAXgHAGQgaAVgjgJQgggPgEgBQi2gmihgjQlDhGgageQgOgUAJgjQAKgkAXgKQASgIBlgPQB5gSB+gng");
	this.shape_10.setTransform(237.2,124.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFB430").s().p("AEqC8IgkgQIlXhJQlDhGgageQgOgUAJgjQAKgkAXgKQASgIBlgPQB5gSB+gnIAfALQAlAMAlAEIBDAGQAaACAdgCQAcgCAigOQARgHAMgGIARgJQATgHANAIQATAMAFAHQAIAKgEAPQgEALgOAMQgLAKAAAIQAAAaAMAEIAPgLQATgKAYAHQAUAHALAPQAMARgGARQgOAngWAGQgQAEg8gCQgHAAgHACQgOAEgBAOIgBAaQABAJAJAEQAIAEAdAHQAbAHAGANQAGANgIAaQgHAXgHAGQgSAPgXAAQgKAAgKgDg");
	this.shape_11.setTransform(237.2,124.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,284.2,147.1);


(lib.HautSaute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C16122").ss(3,1,1).p("AGEgOQgHAJgHABQgJADgHAAAmDACQAHAJAHABQAJADAHAA");
	this.shape.setTransform(87.8,73.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},20).wait(1));

	// Cou
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C16122").ss(3,1,1).p("AD+lXQkNB1gxAxQg3A3gMA/QgHAmgKBbQgMA6gJAZQgFAQgSAxQgSA7grBD");
	this.shape_1.setTransform(151.7,38.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C16122").ss(3,1).p("AnGF1QgqhDgXgpQgNgYgYh+QgciXgEgRQgOg+gJgcQgPgtgdgcQgsgthcg5QBWgMB8gNQD6gZDFgEQDEgDGAAlQBAAHCEgEQB/gDAyAG");
	this.shape_2.setTransform(95.2,37.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFB430").s().p("AnTFMQgqhDgYgpQgNgYgYh+QgbiXgFgRQgOg+gJgcQgPgtgdgcQgsgthcg5QBWgMB9gNQD5gZDFgEQDFgDF/AlQBAAHCFgEQB+gDAyAGQkPB2gwAwQg3A3gNBAQgGAmgLBaQgMA6gJAZIgWBBQgTA7gqBEQjBBjjHAAQi3AAi9hSg");
	this.shape_3.setTransform(96.6,41.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},20).wait(1));

	// Bras gauche
	this.instance = new lib.BrasSaute("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(26.2,92.1,1,1,0,0,0,25.2,91.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},20).wait(1));

	// Bras droit
	this.instance_1 = new lib.BrasSaute("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(155.7,91.8,1.049,1,0,0,180,25.2,91.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},20).wait(1));

	// Ventre
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#C16122").ss(3).p("AgPo4QiPAAhUAQQhsAThEA0QibB1gEFZQgBB8AfBKQAIAUARAlQAPAjAIAkIACAsQAJA2AjArQA2BCBvAcQBkAZCuACQDIACBbgRQBngUBAg9QAiggAKhBQAIhTALgyQATglAThAQAkiAgEiCQgHjShkh2QhDhPiAgaQhcgSjGgBg");
	this.shape_4.setTransform(87.7,121.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFB430").s().p("AgOI5QiugChkgZQhvgcg2hCQgjgrgJg2IgCgsQgIgkgPgjQgRglgIgUQgfhKABh8QAElZCbh1QBEg0BsgTQBUgQCPAAQDGABBcASQCAAaBDBPQBkB2AHDSQAECCgkCAQgTBAgTAlQgLAygIBTQgKBBgiAgQhAA9hnAUQhRAPirAAIgnAAg");
	this.shape_5.setTransform(87.7,121.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#C16122").ss(3).p("AougTQAElZCWh1QBCg0BogTQBRgQCKAAQDAABBZASQB9AaBABPQBhB2AHDSQAECCgjCAQgSBAgTAlQgKAygIBTQgKBBghAgQg+A9hkAUQhYARjCgCQiogChggZQhsgcg0hCQgigrgJg2IgCgsQgHgkgPgjQgRglgIgUQgehKACh8g");
	this.shape_6.setTransform(87.7,121.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFB430").s().p("AgOI5QiogChggZQhsgcg0hCQgigrgJg2IgCgsQgHgkgPgjIgZg5QgehKACh8QAElZCWh1QBCg0BogTQBRgQCKAAQDAABBZASQB9AaBABPQBhB2AHDSQAECCgjCAQgSBAgTAlQgKAygIBTQgKBBghAgQg+A9hkAUQhOAPimAAIgmAAg");
	this.shape_7.setTransform(87.7,121.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#C16122").ss(3).p("AocgTQAElZCRh1QBAg0BlgTQBOgQCGAAQC6ABBWASQB4AaA+BPQBeB2AHDSQAECCgjCAQgRBAgSAlQgKAygHBTQgKBBggAgQg8A9hhAUQhUARi8gCQijgChdgZQhogcgyhCQghgrgJg2IgCgsQgHgkgOgjQgQglgIgUQgdhKABh8g");
	this.shape_8.setTransform(87.7,121.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFB430").s().p("AgNI5QijgChdgZQhogcgyhCQghgrgJg2IgCgsQgHgkgOgjIgYg5QgdhKABh8QAElZCRh1QBAg0BlgTQBOgQCGAAQC6ABBWASQB4AaA+BPQBeB2AHDSQAECCgjCAQgRBAgSAlQgKAygHBTQgKBBggAgQg8A9hhAUQhMAPifAAIglAAg");
	this.shape_9.setTransform(87.7,121.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#C16122").ss(3).p("AoJgTQADlZCMh1QA+g0BigTQBLgQCBAAQC0ABBTASQB0AaA8BPQBbB2AGDSQAECCghCAQgRBAgRAlQgKAygHBTQgJBBgfAgQg6A9heAUQhRARi2gCQidgChagZQhlgcgwhCQgggrgIg2IgCgsQgHgkgNgjQgQglgIgUQgchKACh8g");
	this.shape_10.setTransform(87.8,121.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFB430").s().p("AgNI5QidgChagZQhlgcgwhCQgggrgIg2IgCgsQgHgkgNgjIgYg5QgchKACh8QADlZCMh1QA+g0BigTQBLgQCBAAQC0ABBTASQB0AaA8BPQBbB2AGDSQAECCghCAQgRBAgRAlQgKAygHBTQgJBBgfAgQg6A9heAUQhJAPiaAAIgkAAg");
	this.shape_11.setTransform(87.8,121.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#C16122").ss(3).p("An3gTQADlZCIh1QA7g0BegTQBJgQB9AAQCtABBQASQBwAaA6BPQBYB2AGDSQAECCggCAQgRBAgQAlQgKAygHBTQgJBBgdAgQg4A9haAUQhPARivgCQiYgChXgZQhhgcgvhCQgegrgIg2IgCgsQgHgkgNgjQgPglgHgUQgbhKABh8g");
	this.shape_12.setTransform(87.8,121.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFB430").s().p("AgMI5QiYgChXgZQhhgcgvhCQgegrgIg2IgCgsQgHgkgNgjQgPglgHgUQgbhKABh8QADlZCIh1QA7g0BegTQBJgQB9AAQCtABBQASQBwAaA6BPQBYB2AGDSQAECCggCAQgRBAgQAlQgKAygHBTQgJBBgdAgQg4A9haAUQhHAPiVAAIgiAAg");
	this.shape_13.setTransform(87.8,121.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#C16122").ss(3).p("AnlgTQADlZCDh1QA5g0BbgTQBGgQB4AAQCnABBNASQBsAaA4BPQBUB2AGDSQAECCgfCAQgQBAgQAlQgJAygGBTQgJBBgdAgQg1A9hYAUQhLARipgCQiSgChUgZQhegcgshCQgegrgIg2IgBgsQgHgkgMgjQgPglgHgUQgahKABh8g");
	this.shape_14.setTransform(87.8,121.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFB430").s().p("AgMI5QiSgChUgZQhegcgshCQgegrgIg2IgBgsQgHgkgMgjIgWg5QgahKABh8QADlZCDh1QA5g0BbgTQBGgQB4AAQCnABBNASQBsAaA4BPQBUB2AGDSQAECCgfCAQgQBAgQAlQgJAygGBTQgJBBgdAgQg1A9hYAUQhDAPiQAAIghAAg");
	this.shape_15.setTransform(87.8,121.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C16122").ss(3).p("AgMo4Qh0AAhDAQQhXATg4A0Qh9B1gDFZQgBB8AYBKQAHAUAPAlQAMAjAGAkIABAsQAIA2AcArQArBCBbAcQBQAZCNACQCiACBJgRQBUgUAzg9QAcggAIhBQAGhTAJgyQAQglAPhAQAeiAgEiCQgGjShRh2Qg2hPhogaQhKgSiggBg");
	this.shape_16.setTransform(87.8,121.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFB430").s().p("AgLI5QiNgChQgZQhbgcgrhCQgcgrgIg2IgBgsQgGgkgMgjIgWg5QgYhKABh8QADlZB9h1QA4g0BXgTQBDgQB0AAQCgABBKASQBoAaA2BPQBRB2AGDSQAECCgeCAQgPBAgQAlQgJAygGBTQgIBBgcAgQgzA9hUAUQhCAPiKAAIgfAAg");
	this.shape_17.setTransform(87.8,121.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#C16122").ss(3).p("AncgTQAElZCAh1QA4g0BZgTQBFgQB2AAQCjABBMASQBqAaA3BPQBTB2AFDSQAECCgeCAQgQBAgQAlQgJAygGBTQgIBBgdAgQg0A9hWAUQhKARilgCQiQgChSgZQhcgcgshCQgdgrgIg2IgBgsQgGgkgNgjQgOglgIgUQgZhKABh8g");
	this.shape_18.setTransform(87.8,121.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFB430").s().p("AgLI5QiQgChSgZQhcgcgshCQgdgrgIg2IgBgsQgGgkgNgjIgWg5QgZhKABh8QAElZCAh1QA4g0BZgTQBFgQB2AAQCjABBMASQBqAaA3BPQBTB2AFDSQAECCgeCAQgQBAgQAlQgJAygGBTQgIBBgdAgQg0A9hWAUQhCAPiNAAIggAAg");
	this.shape_19.setTransform(87.8,121.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#C16122").ss(3).p("AnlgTQADlZCDh1QA5g0BbgTQBGgQB4AAQCnABBNASQBsAaA5BPQBUB2AFDSQAFCCggCAQgPBAgQAlQgKAygGBTQgJBBgcAgQg2A9hXAUQhMARipgCQiSgChUgZQhegcgshCQgdgrgJg2IgBgsQgHgkgMgjQgPglgHgUQgahKABh8g");
	this.shape_20.setTransform(87.8,121.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFB430").s().p("AgMI5QiSgChUgZQhegcgshCQgdgrgJg2IgBgsQgHgkgMgjIgWg5QgahKABh8QADlZCDh1QA5g0BbgTQBGgQB4AAQCnABBNASQBsAaA5BPQBUB2AFDSQAFCCggCAQgPBAgQAlQgKAygGBTQgJBBgcAgQg2A9hXAUQhEAPiQAAIghAAg");
	this.shape_21.setTransform(87.8,121.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#C16122").ss(3).p("AnugTQADlZCFh1QA7g0BcgTQBIgQB6AAQCqABBPASQBuAaA5BPQBWB2AGDSQAECCggCAQgQBAgQAlQgKAygGBTQgJBBgdAgQg3A9hZAUQhNARisgCQiVgChVgZQhggcguhCQgdgrgJg2IgBgsQgHgkgNgjQgPglgHgUQgahKABh8g");
	this.shape_22.setTransform(87.8,121.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFB430").s().p("AgMI5QiVgChVgZQhggcguhCQgdgrgJg2IgBgsQgHgkgNgjIgWg5QgahKABh8QADlZCFh1QA7g0BcgTQBIgQB6AAQCqABBPASQBuAaA5BPQBWB2AGDSQAECCggCAQgQBAgQAlQgKAygGBTQgJBBgdAgQg3A9hZAUQhFAPiSAAIgiAAg");
	this.shape_23.setTransform(87.8,121.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#C16122").ss(3).p("An3gTQADlZCHh1QA8g0BegTQBJgQB9AAQCtABBQASQBxAaA6BPQBXB2AGDSQAECCggCAQgQBAgRAlQgJAygHBTQgJBBgeAgQg3A9hbAUQhPARivgCQiYgChXgZQhhgcgvhCQgegrgJg2IgCgsQgGgkgNgjQgQglgHgUQgbhKACh8g");
	this.shape_24.setTransform(87.8,121.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFB430").s().p("AgMI5QiYgChXgZQhhgcgvhCQgegrgJg2IgCgsQgGgkgNgjIgXg5QgbhKACh8QADlZCHh1QA8g0BegTQBJgQB9AAQCtABBQASQBxAaA6BPQBXB2AGDSQAECCggCAQgQBAgRAlQgJAygHBTQgJBBgeAgQg3A9hbAUQhHAPiVAAIgiAAg");
	this.shape_25.setTransform(87.8,121.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#C16122").ss(3).p("AoBgTQAElZCKh1QA9g0BfgTQBKgQCAAAQCwABBSASQByAaA7BPQBaB2AGDSQAECCghCAQgQBAgSAlQgJAygHBTQgJBBgfAgQg4A9hdAUQhQARiygCQibgChYgZQhkgcgvhCQgfgrgJg2IgCgsQgGgkgNgjQgQglgIgUQgbhKABh8g");
	this.shape_26.setTransform(87.8,121.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFB430").s().p("AgMI5QibgChYgZQhkgcgvhCQgfgrgJg2IgCgsQgGgkgNgjIgYg5QgbhKABh8QAElZCKh1QA9g0BfgTQBKgQCAAAQCwABBSASQByAaA7BPQBaB2AGDSQAECCghCAQgQBAgSAlQgJAygHBTQgJBBgfAgQg4A9hdAUQhIAPiYAAIgiAAg");
	this.shape_27.setTransform(87.8,121.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#C16122").ss(3).p("AoKgTQADlZCNh1QA+g0BhgTQBMgQCBAAQC0ABBTASQB1AaA8BPQBbB2AGDSQAECCghCAQgRBAgRAlQgKAygHBTQgKBBgeAgQg6A9heAUQhSARi2gCQidgChagZQhlgcgwhCQgggrgJg2IgCgsQgGgkgOgjQgQglgIgUQgbhKABh8g");
	this.shape_28.setTransform(87.8,121.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFB430").s().p("AgNI5QidgChagZQhlgcgwhCQgggrgJg2IgCgsQgGgkgOgjQgQglgIgUQgbhKABh8QADlZCNh1QA+g0BhgTQBMgQCBAAQC0ABBTASQB1AaA8BPQBbB2AGDSQAECCghCAQgRBAgRAlQgKAygHBTQgKBBgeAgQg6A9heAUQhJAPibAAIgkAAg");
	this.shape_29.setTransform(87.8,121.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#C16122").ss(3).p("AgOo4QiEAAhNAQQhjATg/A0QiPB1gDFZQgCB8AcBKQAIAUARAlQAOAjAGAkIACAsQAJA2AgArQAxBCBnAcQBcAZCgACQC5ACBTgRQBggUA7g9QAfggAKhBQAHhTAKgyQASglARhAQAiiAgFiCQgGjShch2Qg+hPh2gaQhVgSi3gBg");
	this.shape_30.setTransform(87.8,121.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFB430").s().p("AgNI5QiggChcgZQhngcgxhCQgggrgJg2IgCgsQgGgkgOgjIgZg5QgchKACh8QADlZCPh1QA/g0BjgTQBNgQCEAAQC3ABBVASQB2AaA+BPQBcB2AGDSQAFCCgiCAQgRBAgSAlQgKAygHBTQgKBBgfAgQg7A9hgAUQhKAPieAAIgkAAg");
	this.shape_31.setTransform(87.8,121.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#C16122").ss(3).p("AoigTQADlZCTh1QBBg0BmgTQBPgQCIAAQC7ABBYASQB6AaA/BPQBfB2AGDSQAFCCgjCAQgSBAgSAlQgKAygIBTQgJBBghAgQg8A9hjAUQhVARi+gCQilgChegZQhqgcgyhCQghgrgKg2IgCgsQgGgkgPgjQgRglgIgUQgdhKACh8g");
	this.shape_32.setTransform(87.8,121.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFB430").s().p("AgNI5QilgChegZQhqgcgyhCQghgrgKg2IgCgsQgGgkgPgjIgZg5QgdhKACh8QADlZCTh1QBBg0BmgTQBPgQCIAAQC7ABBYASQB6AaA/BPQBfB2AGDSQAFCCgjCAQgSBAgSAlQgKAygIBTQgJBBghAgQg8A9hjAUQhMAPiiAAIglAAg");
	this.shape_33.setTransform(87.8,121.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#C16122").ss(3).p("AoxgTQAElZCXh1QBCg0BpgTQBRgQCLAAQDBABBaASQB9AaBBBPQBiB2AGDSQAFCCgkCAQgSBAgTAlQgLAygHBTQgKBBghAgQg+A9hlAUQhYARjEgCQipgChhgZQhsgcg0hCQgigrgJg2IgCgsQgHgkgPgjQgSglgIgUQgehKACh8g");
	this.shape_34.setTransform(87.8,121.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFB430").s().p("AgOI5QipgChhgZQhsgcg0hCQgigrgJg2IgCgsQgHgkgPgjIgag5QgehKACh8QAElZCXh1QBCg0BpgTQBRgQCLAAQDBABBaASQB9AaBBBPQBiB2AGDSQAFCCgkCAQgSBAgTAlQgLAygHBTQgKBBghAgQg+A9hlAUQhPAPinAAIgmAAg");
	this.shape_35.setTransform(87.8,121.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#C16122").ss(3).p("ApAgTQAElZCbh1QBEg0BrgTQBUgQCPAAQDGABBcASQCBAaBCBPQBkB2AHDSQAFCCglCAQgTBAgTAlQgLAygIBTQgKBBgiAgQg/A9hoAUQhaARjJgCQiugChjgZQhwgcg1hCQgigrgKg2IgCgsQgHgkgQgjQgSglgIgUQgfhKACh8g");
	this.shape_36.setTransform(87.8,121.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFB430").s().p("AgOI5QiugChjgZQhwgcg1hCQgigrgKg2IgCgsQgHgkgQgjIgag5QgfhKACh8QAElZCbh1QBEg0BrgTQBUgQCPAAQDGABBcASQCBAaBCBPQBkB2AHDSQAFCCglCAQgTBAgTAlQgLAygIBTQgKBBgiAgQg/A9hoAUQhRAPirAAIgnAAg");
	this.shape_37.setTransform(87.8,121.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#C16122").ss(3).p("ApPgTQAElZCfh1QBGg0BugTQBVgQCTAAQDLABBfASQCDAaBFBPQBnB2AGDSQAFCCgmCAQgSBAgUAlQgMAygHBTQgLBBgjAgQhBA9hrAUQhcARjOgCQiygChmgZQhygcg3hCQgkgrgJg2IgDgsQgHgkgPgjQgTglgJgUQgfhKACh8g");
	this.shape_38.setTransform(87.9,121.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFB430").s().p("AgPI5QiygChmgZQhygcg3hCQgkgrgJg2IgDgsQgHgkgPgjIgcg5QgfhKACh8QAElZCfh1QBGg0BugTQBVgQCTAAQDLABBfASQCDAaBFBPQBnB2AGDSQAFCCgmCAQgSBAgUAlQgMAygHBTQgLBBgjAgQhBA9hrAUQhSAPivAAIgpAAg");
	this.shape_39.setTransform(87.9,121.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#C16122").ss(3).p("ApegTQAElZCjh1QBIg0BwgTQBYgQCXAAQDQABBhASQCHAaBGBPQBpB2AHDSQAFCCgnCAQgTBAgUAlQgMAygIBTQgLBBgkAgQhCA9huAUQheARjTgCQi3gChogZQh2gcg3hCQglgrgKg2IgDgsQgHgkgQgjQgTglgJgUQgghKACh8g");
	this.shape_40.setTransform(87.9,121.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFB430").s().p("AgPI5Qi3gChogZQh2gcg3hCQglgrgKg2IgCgsQgIgkgQgjIgcg5QgfhKABh8QAElZCjh1QBIg0BxgTQBYgQCWAAQDQABBhASQCHAaBGBPQBpB2AIDSQAFCCgnCAQgUBAgUAlQgLAygJBTQgLBBgkAgQhCA9huAUQhUAPizAAIgqAAg");
	this.shape_41.setTransform(87.9,121.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#C16122").ss(3).p("AptgTQAElZCnh1QBKg0BzgTQBagQCaAAQDWABBjASQCKAaBIBPQBsB2AHDSQAFCCgoCAQgTBAgVAlQgMAygIBTQgMBBgkAgQhFA9hvAUQhiARjYgCQi7gChrgZQh4gcg5hCQgmgrgKg2IgCgsQgIgkgQgjQgUglgJgUQghhKACh8g");
	this.shape_42.setTransform(87.9,121.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFB430").s().p("AgQI5Qi7gChrgZQh4gcg5hCQgmgrgKg2IgCgsQgIgkgQgjIgdg5QghhKACh8QAElZCnh1QBKg0BzgTQBagQCaAAQDWABBjASQCKAaBIBPQBsB2AHDSQAFCCgoCAQgTBAgVAlQgMAygIBTQgMBBgkAgQhFA9hvAUQhXAPi4AAIgrAAg");
	this.shape_43.setTransform(87.9,121.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[]},1).wait(1));

	// Jambes
	this.instance_2 = new lib.BasSaute("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6.9,125.9,1.018,1,0,0,180,235.5,75.1);

	this.instance_3 = new lib.BasSaute("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(85.4,122.1,1,1,0,0,0,139.3,72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).to({state:[]},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-2.1,290.7,205);


(lib.GrenouilleSaute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bouche saute
	this.instance = new lib.BoucheSaute("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(277.3,164.2,1,1,0,0,0,115.9,40.7);

	this.instance_1 = new lib.Bouche("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(277.6,163.8,1,1,0,0,0,115.9,40.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:277.6,y:163.8},14).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},14).to({startPosition:2},2).wait(5));

	// Tete
	this.instance_2 = new lib.Tete("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(278.3,135.4,1,1,0,0,0,116.3,78.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:32},1).to({startPosition:33},1).to({startPosition:32},13).to({startPosition:0},3).to({_off:true},2).wait(1));

	// Corps
	this.instance_3 = new lib.HautSaute("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(284.5,259.6,1,1,0,0,0,90.3,101.3);

	this.instance_4 = new lib.Tete("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(278.3,135.4,1,1,0,0,0,116.3,78.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3},{t:this.instance_4}]},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(135.7,51.9,290.7,309.3);


(lib.Grenouille = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bouche
	this.bouche = new lib.Bouche();
	this.bouche.parent = this;
	this.bouche.setTransform(277.3,165.1,1,1,0,0,0,115.9,41.6);

	this.timeline.addTween(cjs.Tween.get(this.bouche).to({y:166.3,mode:"synched",startPosition:22},22).to({y:165.1,startPosition:45},24).to({y:167.1,startPosition:68},22).to({y:164.5,startPosition:46},23).wait(1));

	// Tete
	this.instance = new lib.Tete("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(278.3,135.4,1,1,0,0,0,116.3,78.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:137.8,startPosition:22},22).to({y:135.4,startPosition:0},24).to({y:138.1,startPosition:22},22).to({y:134.8,startPosition:11},23).wait(1));

	// Haut
	this.instance_1 = new lib.Haut("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(281.6,261.9,1,1,0,0,0,87.4,103.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(92));

	// Bas
	this.instance_2 = new lib.Bas("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(283.3,282.3,1,1,0,0,0,140.6,72);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(141.2,51.9,284.2,312.3);


(lib.BtnGre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.nouille = new lib.Grenouille();
	this.nouille.parent = this;
	this.nouille.setTransform(102.2,112.5,0.727,0.727,0,0,0,283,208.1);

	this.timeline.addTween(cjs.Tween.get(this.nouille).wait(2).to({regY:362.6,scaleX:0.73,scaleY:0.72,x:102.3,y:224.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1.1,206.6,227);


// stage content:



(lib.MmeGrenouilleV3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.gre.addEventListener("click", jouer.bind(this));
		function jouer(){
			this.play();
		}
		var canvas = document.getElementById("canvas");
		var context = canvas.getContext("2d");
		
		function getpos(e) {
		    var pos = getMousePos(canvas, e);
		    posx = pos.x;
		    posy = pos.y;
		}
		window.addEventListener('mousemove', getpos, false);
		
		function getMousePos(canvas, evt) {
		    var rect = canvas.getBoundingClientRect();
		    return {
		      x: evt.clientX - rect.left,
		      y: evt.clientY - rect.top
		    };
		}
		eyeR = this.eyeR;
		eyeL = this.eyeL;
		langue = this.langue;
		stage.canvas.addEventListener("mousemove",arjun);
		function arjun(MouseEvent)
		{
			var var1 = posy - eyeR.y;
			var var2 = posx - eyeR.x;
			var radiusR = Math.atan2(var1,var2);
			var degreeR = radiusR / (Math.PI / 180);
			eyeR.rotation = degreeR;
			
			var var3 = posy - eyeL.y;
			var var4 = posx - eyeL.x;
			var radiusR1 = Math.atan2(var3,var4);
			var degreeR1 = radiusR1 / (Math.PI / 180);
			eyeL.rotation = degreeR1;
			
			var var5 = posy - langue.y;
			var var6 = posx - langue.x;
			var radiusR2 = Math.atan2(var5,var6);
			var degreeR2 = radiusR2 / (Math.PI / 180) + 90;
			langue.rotation = degreeR2;
		}
		stage.canvas.style.cursor = "none";
		this.mouche.mouseEnabled = false;
		this.stage.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
			this.mouche.x = posx;
			this.mouche.y = posy;
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(26));

	// Mouche
	this.mouche = new lib.mouche();
	this.mouche.parent = this;
	this.mouche.setTransform(16.6,49.4,0.874,0.874,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.mouche).wait(26));

	// Langue
	this.langue = new lib.langue();
	this.langue.parent = this;
	this.langue.setTransform(145.1,124.6,0.5,0.5,0,0,0,9.2,139.1);

	this.timeline.addTween(cjs.Tween.get(this.langue).wait(1).to({y:127.3},0).wait(1).to({y:122.8},0).wait(1).to({y:104.8},0).wait(1).to({y:86.8},0).wait(1).to({y:68.8},0).wait(1).to({y:49},0).wait(1).to({y:47.7},0).wait(1).to({y:46.3},0).wait(1).to({y:45},0).wait(1).to({y:43.2},0).wait(1).to({y:41.4},0).wait(1).to({y:44.1},0).wait(1).to({y:47.7},0).wait(1).to({y:50.4},0).wait(1).to({y:55.8},0).wait(1).to({y:66.1},0).wait(1).to({y:76.9},0).wait(1).to({y:88.2},0).wait(1).to({y:104.4},0).wait(1).to({y:121},0).wait(1).to({y:132.4},0).wait(1).to({y:136.4},0).wait(1).to({y:131.3},0).wait(1).to({y:125.8},0).wait(1).to({y:125.1},0).wait(1));

	// Grenouille
	this.gre = new lib.BtnGre();
	this.gre.parent = this;
	this.gre.setTransform(145.1,135.2,0.5,0.5,0,0,0,102.2,112.5);
	new cjs.ButtonHelper(this.gre, 0, 1, 2);

	this.instance = new lib.GrenouilleSaute("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(145.1,139.4,0.363,0.327,0,0,0,283.2,208);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gre).to({_off:true},1).wait(19).to({_off:false,scaleY:0.44,y:141.2},1).to({regX:102.3,regY:112.8,scaleY:0.43,y:145.2},1).to({scaleY:0.46,y:140.9},1).to({regX:102.2,regY:112.5,scaleY:0.5,y:136},1).to({regY:112.4,y:134.8},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:283.1,regY:208.1,scaleY:0.35,y:135.3,startPosition:1},0).to({regY:208,y:60.3,startPosition:5},4).to({regX:283.2,regY:207.8,x:145.2,y:52.8,startPosition:10},5).to({y:59,startPosition:12},2).to({regX:283.1,regY:208,x:145.1,y:65.3,startPosition:14},2).to({regX:283.2,x:145.2,y:97.8,startPosition:17},3).to({regX:283.1,scaleY:0.32,x:145.1,y:129.7,mode:"single",startPosition:19},2).to({_off:true,regX:102.2,regY:112.5,scaleX:0.5,scaleY:0.44,y:141.2,mode:"independent"},1).wait(5));

	// Yeux
	this.eyeR = new lib.eyeR();
	this.eyeR.parent = this;
	this.eyeR.setTransform(128.4,93.5,0.469,0.47,-101.9,0,0,23.3,23.4);

	this.eyeL = new lib.eyeL();
	this.eyeL.parent = this;
	this.eyeL.setTransform(159.4,93.5,0.454,0.454,-78.8,0,0,1.4,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyeL,p:{y:93.5}},{t:this.eyeR,p:{y:93.5,regX:23.3}}]}).to({state:[{t:this.eyeL,p:{y:102.3}},{t:this.eyeR,p:{y:102.2,regX:23.3}}]},1).to({state:[{t:this.eyeL,p:{y:97.3}},{t:this.eyeR,p:{y:97.2,regX:23.3}}]},1).to({state:[]},1).to({state:[{t:this.eyeL,p:{y:36}},{t:this.eyeR,p:{y:36,regX:23.3}}]},13).to({state:[{t:this.eyeL,p:{y:46}},{t:this.eyeR,p:{y:46,regX:23.3}}]},1).to({state:[{t:this.eyeL,p:{y:57.3}},{t:this.eyeR,p:{y:57.2,regX:23.3}}]},1).to({state:[{t:this.eyeL,p:{y:74.8}},{t:this.eyeR,p:{y:74.7,regX:23.3}}]},1).to({state:[{t:this.eyeL,p:{y:93.2}},{t:this.eyeR,p:{y:93.1,regX:23.3}}]},1).to({state:[{t:this.eyeL,p:{y:105.1}},{t:this.eyeR,p:{y:105.1,regX:23.4}}]},1).to({state:[{t:this.eyeL,p:{y:111.2}},{t:this.eyeR,p:{y:111.1,regX:23.4}}]},1).to({state:[{t:this.eyeL,p:{y:103.7}},{t:this.eyeR,p:{y:103.7,regX:23.4}}]},1).to({state:[{t:this.eyeL,p:{y:95.5}},{t:this.eyeR,p:{y:95.5,regX:23.3}}]},1).to({state:[{t:this.eyeL,p:{y:94.3}},{t:this.eyeR,p:{y:94.2,regX:23.3}}]},1).wait(1));

	// Blanc des yeux
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABMBMQgkgfAAgrQAAgqAkgfQAkgfAzAAQAzAAAjAfQAkAfAAApQAAAsgkAfQgjAegzAAQgzAAgkgegAj4BIQgkgfAAgpQAAgsAkgfQAkgeAzAAQAyAAAkAeQAkAfAAAsQAAApgkAfQgkAfgyAAQgzAAgkgfg");
	this.shape.setTransform(144.2,92.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABMBLQgkgeAAgrQAAgqAkgfQAkgfAzAAQAyAAAkAfQAkAfAAApQAAAsgkAeQgkAggyAAQgzAAgkgggAj4BIQgkgfAAgpQAAgsAkgfQAkgeAyAAQAzAAAkAeQAkAfAAAsQAAApgkAfQgkAfgzgBQgyABgkgfg");
	this.shape_1.setTransform(144.2,34.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABMBMQgkgfAAgrQAAgqAkgfQAkgeAzAAQAyAAAkAeQAkAfAAAqQAAArgkAfQgkAegyAAQgzAAgkgegAj4BIQgkgfAAgpQAAgsAkgfQAkgeAyAAQAzAAAkAeQAkAfAAArQAAAqgkAfQgkAegzABQgygBgkgeg");
	this.shape_2.setTransform(144.2,46.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABMBMQgkggAAgqQAAgqAkgfQAkgfAzABQAygBAkAfQAkAfAAApQAAAsgkAfQgkAfgygBQgzABgkgfgAj4BIQgkgfAAgpQAAgrAkgfQAkggAyAAQAzAAAkAgQAkAeAAAsQAAApgkAfQgkAfgzAAQgyAAgkgfg");
	this.shape_3.setTransform(144.2,57.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABMBMQgkgfAAgrQAAgqAkgfQAkgeAzgBQAyABAkAeQAkAfAAAqQAAArgkAfQgkAegyAAQgzAAgkgegAj4BIQgkgfAAgpQAAgsAkgeQAkgfAyAAQAzAAAkAfQAkAeAAArQAAAqgkAfQgkAegzABQgygBgkgeg");
	this.shape_4.setTransform(144.2,91.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABMBMQgkggAAgqQAAgqAkgfQAkgfAzABQAygBAkAfQAkAfAAApQAAAsgkAfQgkAegyAAQgzAAgkgegAj4BIQgkgfAAgpQAAgrAkgfQAkggAyAAQAzAAAkAgQAkAeAAAsQAAApgkAfQgkAfgzAAQgyAAgkgfg");
	this.shape_5.setTransform(144.2,109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:92.7}}]}).to({state:[{t:this.shape,p:{y:101}}]},1).to({state:[{t:this.shape,p:{y:94.2}}]},1).to({state:[]},1).to({state:[{t:this.shape_1,p:{y:34.9}}]},13).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:57.3}}]},1).to({state:[{t:this.shape_1,p:{y:74.5}}]},1).to({state:[{t:this.shape_4,p:{y:91.8}}]},1).to({state:[{t:this.shape_1,p:{y:103.8}}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4,p:{y:100.8}}]},1).to({state:[{t:this.shape_3,p:{y:93.3}}]},1).to({state:[{t:this.shape_1,p:{y:92.5}}]},1).wait(1));

	// Fond
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.298)").s().p("AlZAsQiQgTAAgZQAAgYCQgTQCPgSDKAAQDLAACQASQCPATAAAYQAAAZiPATQiQASjLAAQjKAAiPgSg");
	this.shape_6.setTransform(143.2,183.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.298)").s().p("AlkAtQiVgSAAgbQAAgZCVgTQCUgTDQAAQDRAACVATQCUATAAAZQAAAbiUASQiVATjRAAQjQAAiUgTg");
	this.shape_7.setTransform(143.2,183.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.298)").s().p("AlvAvQiZgUAAgbQAAgaCZgUQCYgTDXAAQDYAACZATQCYAUAAAaQAAAbiYAUQiZATjYAAQjXAAiYgTg");
	this.shape_8.setTransform(143.2,183.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.298)").s().p("Al6AwQiegUAAgcQAAgbCegUQCdgUDdAAQDeAACdAUQCeAUAAAbQAAAcieAUQidAUjeAAQjdAAidgUg");
	this.shape_9.setTransform(143.2,183.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.298)").s().p("AmFAxQiigUAAgdQAAgcCigVQCigUDjAAQDlAACiAUQCiAVAAAcQAAAdiiAUQiiAVjlAAQjjAAiigVg");
	this.shape_10.setTransform(143.2,183.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.298)").s().p("AmRAyQimgUAAgeQAAgdCmgVQCngVDqAAQDrAACnAVQCmAVAAAdQAAAeimAUQinAWjrAAQjqAAingWg");
	this.shape_11.setTransform(143.2,183.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.298)").s().p("AmcA0QiqgWgBgeQABgeCqgVQCsgWDwAAQDxAACsAWQCrAVgBAeQABAeirAWQisAWjxAAQjwAAisgWg");
	this.shape_12.setTransform(143.2,183.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.298)").s().p("AmnA2QivgXAAgfQAAgfCvgVQCwgXD3AAQD4AACvAXQCwAVAAAfQAAAfiwAXQivAWj4AAQj3AAiwgWg");
	this.shape_13.setTransform(143.2,183.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.298)").s().p("AmyA3Qi0gXAAggQAAgfC0gXQC1gXD9AAQD+AAC0AXQC1AXAAAfQAAAgi1AXQi0AXj+AAQj9AAi1gXg");
	this.shape_14.setTransform(143.2,183.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.298)").s().p("Am9A4Qi4gXAAghQAAggC4gYQC5gXEEAAQEFAAC4AXQC5AYAAAgQAAAhi5AXQi4AYkFAAQkEAAi5gYg");
	this.shape_15.setTransform(143.2,183.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.298)").s().p("AmzA4Qi2gYAAggQAAggC2gXQC0gWD/AAQD/AAC2AWQC0AXABAgQgBAgi0AYQi2AXj/gBQj/ABi0gXg");
	this.shape_16.setTransform(143.2,183.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.298)").s().p("AmrA2QixgWAAggQAAgfCxgWQCygXD5AAQD6AACxAXQCyAWAAAfQAAAgiyAWQixAXj6gBQj5ABiygXg");
	this.shape_17.setTransform(143.2,183.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.298)").s().p("AmhA1QiugWAAgfQAAgeCugWQCtgWD0AAQD1AACuAWQCtAWAAAeQAAAfitAWQiuAWj1AAQj0AAitgWg");
	this.shape_18.setTransform(143.2,183.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.298)").s().p("AmYA0QiqgWAAgeQAAgeCqgVQCpgVDvgBQDvABCrAVQCpAVABAeQgBAeipAWQirAWjvAAQjvAAipgWg");
	this.shape_19.setTransform(143.2,183.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.298)").s().p("AmPAyQingUAAgeQAAgdCngVQCmgVDpAAQDrAACmAVQClAVAAAdQAAAeilAUQimAWjrAAQjpAAimgWg");
	this.shape_20.setTransform(143.2,183.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.298)").s().p("AmGAxQijgUAAgdQAAgcCjgVQCigUDkAAQDlAACjAUQCiAVAAAcQAAAdiiAUQijAVjlAAQjkAAiigVg");
	this.shape_21.setTransform(143.2,183.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.298)").s().p("Al9AwQifgUAAgcQAAgbCfgVQCegTDfgBQDgABCfATQCeAVAAAbQAAAcieAUQifAUjgAAQjfAAiegUg");
	this.shape_22.setTransform(143.2,183.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.298)").s().p("Al0AvQicgTAAgcQAAgaCcgVQCagTDaAAQDaAACcATQCaAVABAaQgBAciaATQicAUjaAAQjaAAiagUg");
	this.shape_23.setTransform(143.2,183.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.298)").s().p("AlrAuQiYgTAAgbQAAgaCYgUQCXgTDUAAQDVAACYATQCXAUAAAaQAAAbiXATQiYAUjVgBQjUABiXgUg");
	this.shape_24.setTransform(143.2,183.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.298)").s().p("AliAtQiUgTAAgaQAAgZCUgTQCTgSDPAAQDQAACUASQCTATAAAZQAAAaiTATQiUASjQABQjPgBiTgSg");
	this.shape_25.setTransform(143.2,183.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.298)").s().p("AlZArQiQgRAAgaQAAgZCQgSQCPgSDKAAQDLAACQASQCPASAAAZQAAAaiPARQiQATjLAAQjKAAiPgTg");
	this.shape_26.setTransform(143.2,184.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.298)").s().p("AlZAsQiQgSAAgaQAAgYCQgSQCPgTDKAAQDLAACQATQCPASAAAYQAAAaiPASQiQASjLAAQjKAAiPgSg");
	this.shape_27.setTransform(143.2,186.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.298)").s().p("AlZArQiQgSAAgZQAAgYCQgTQCPgSDKAAQDLAACQASQCPATAAAYQAAAZiPASQiQATjLAAQjKAAiPgTg");
	this.shape_28.setTransform(143.2,184.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6,p:{y:183.8}}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_6,p:{y:183.8}}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_6,p:{y:186.5}}]},1).to({state:[{t:this.shape_28,p:{y:184.9}}]},1).to({state:[{t:this.shape_28,p:{y:183.6}}]},1).wait(1));

	// Calque 5
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#006600").s().p("AoxCcQiVgqg1g1IDdg6Ij5ANQgCgIAAgIQAAhaDohBQDqhBFHAAQFIAADpBBQDpBBAABaQAABbjpBBQjpBBlIAAQlHAAjqhBg");
	this.shape_29.setTransform(139.3,186.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#006600").s().p("AoxCcQiVgqg1g0IDdg8Ij5APQgCgJAAgIQAAhbDohAQDqhBFHAAQFIAADpBBQDpBAAABbQAABbjpBBQjpBBlIAAQlHAAjqhBg");
	this.shape_30.setTransform(139.3,186.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#006600").s().p("AoxCcQiVgqg1g1IDdg7Ij5AOQgCgIAAgIQAAhaDohCQDqhAFHAAQFIAADpBAQDpBCAABaQAABbjpBBQjpBBlIAAQlHAAjqhBg");
	this.shape_31.setTransform(139.3,188.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#006600").s().p("AoxCcQiVgqg1g0IDdg8Ij5APQgCgJAAgIQAAhbDohBQDqhAFHAAQFIAADpBAQDpBBAABbQAABbjpBBQjpBBlIAAQlHAAjqhBg");
	this.shape_32.setTransform(139.3,188.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#006600").s().p("AoxCcQiVgqg1g0IDdg8Ij5APQgCgJAAgIQAAhaDohBQDqhBFHAAQFIAADpBBQDpBBAABaQAABbjpBBQjpBBlIAAQlHAAjqhBg");
	this.shape_33.setTransform(139.3,187.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#006600").s().p("AoxCcQiVgqg1g1IDdg6Ij5ANQgCgIAAgIQAAhaDohBQDqhBFHAAQFIAADpBBQDpBBAABaQAABcjpBAQjpBBlIAAQlHAAjqhBg");
	this.shape_34.setTransform(139.3,187.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#006600").s().p("AoxCgQiVgrg1g2IDdg8Ij5AOQgCgJAAgIQAAhdDohDQDphCFIAAQFIAADpBCQDpBDAABdQAABejpBCQjpBClIAAQlHAAjqhCg");
	this.shape_35.setTransform(139.3,188.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#006600").s().p("AoxCgQiVgrg1g2IDdg9Ij5APQgCgJAAgIQAAhdDohCQDphCFIAAQFIAADpBCQDpBCAABdQAABejpBCQjpBClIAAQlHAAjqhCg");
	this.shape_36.setTransform(139.3,189.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#006600").s().p("AoxCdQiVgpg1g2IDdg7Ij5ANQgCgJAAgHQAAhcDohBQDphBFIAAQFIAADpBBQDpBBAABcQAABcjpBBQjpBClIAAQlHAAjqhCg");
	this.shape_37.setTransform(139.3,188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29}]}).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_35,p:{y:188.3}}]},14).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35,p:{y:189.7}}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_29}]},1).wait(1));

	// Calque 3
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0.2)").ss(3,1,1).p("AMqgUQAgBhjlBLQjzBPlyAAQlwAAj0hPQjlhLAghhQAehcDzg8QDmg6EyAAQEzAADmA6QDzA8AeBcg");
	this.shape_38.setTransform(138.8,189.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(0,0,0,0.2)").ss(2.5,1,1).p("ANVgVQAiBmjxBPQkBBTmFAAQmEAAkAhTQjyhPAihmQAghhD/g/QDzg9FCAAQFDAADzA9QEAA/AfBhg");
	this.shape_39.setTransform(138.8,189.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0.2)").ss(2,1,1).p("AOLgXQAkBtkBBUQkQBZmeAAQmcAAkRhZQkBhUAlhtQAhhmEQhEQEChBFWAAQFXAAECBBQEQBEAiBmg");
	this.shape_40.setTransform(138.9,189.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(0,0,0,0.2)").ss(1.5,1,1).p("AO+gYQAmBzkPBZQkgBdm1AAQm0AAkghdQkPhZAmhzQAkhsEehIQERhEFqAAQFrAAEQBEQEfBIAkBsg");
	this.shape_41.setTransform(138.9,189.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AP7gaQApB7khBeQkyBjnRAAQnQAAkyhjQkhheAph7QAmhzExhMQEihJGBAAQGCAAEiBJQExBMAmBzg");
	this.shape_42.setTransform(138.9,189.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(0,0,0,0.2)").ss(0.5,1,1).p("ARHgcQAsCFk2BkQlJBrn0AAQnzAAlJhrQk2hkAsiFQAoh7FIhSQE4hPGeAAQGfAAE3BPQFJBSAoB7g");
	this.shape_43.setTransform(138.9,189.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,0,0,0.2)").ss(0.2,1,1).p("ASZgeQAvCOlNBsQliB0oZAAQoYAAlhh0QlOhsAviOQAsiFFghYQFPhUG9AAQG+AAFPBUQFgBYAsCFg");
	this.shape_44.setTransform(138.9,189.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AO+gYQAmBzkPBZQkgBdm1AAQm0AAkghdQkPhZAmhzQAkhsEehIQERhEFqAAQFrAAEQBEQEfBIAkBsg");
	this.shape_45.setTransform(138.9,189.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,0,0,0.2)").ss(0.3,1,1).p("AP7gaQApB7khBeQkyBjnRAAQnQAAkyhjQkhheAph7QAmhzExhMQEihJGBAAQGCAAEiBJQExBMAmBzg");
	this.shape_46.setTransform(138.9,189.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38}]},3).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[]},1).to({state:[{t:this.shape_38}]},11).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(137.7,155.7,218.6,165.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;