function initScenario() {

	$("#items-div2 div").ready(function() {
		$("#items-div2 div").draggable({
			revert : "valid",
			containment : "#items-div2",
			axis : "x"
		});
	});

	$("#items-div2 div").ready(function() {
		$("#items-div2 div").droppable({
			tolerance : 'touch',
			over : function(event, ui) {
				$(this).addClass("drag-overed");
			},
			out : function(event, ui) {
				$(this).removeClass("drag-overed");
			},
			deactivate : function(event, ui) {
				$(this).removeClass("drag-overed");
			}
		});

		$("#items-div2 div").mouseover(function() {
			$(this).addClass("mouseovered");
		});

		$("#items-div2 div").mouseout(function() {
			$(this).removeClass("mouseovered");
		});

		$("#fotoborder1").qtip({
			content : 'Это первая фоторамка',
			position : {
				corner : {
					target : 'topMiddle',
					tooltip : 'bottomLeft'
				}
			},
			show : 'mouseover',
			hide : 'mouseout',
			style : {
				width : 140,
				padding : 10,
				top : '0px',
				background : '#FFFFFF',
				color : 'black',
				textAlign : 'center',
				border : {
					width : 0,
					radius : 5,
					color : '#FFFFFF'
				},
				tip : 'bottomLeft',
				name : 'dark' // Inherit the rest of the attributes from the preset dark style
			}
		});

		$("#fotoborder2").qtip({
			content : 'Это вторая фоторамка',
			position : {
				corner : {
					target : 'topMiddle',
					tooltip : 'bottomLeft'
				}
			},
			show : 'mouseover',
			hide : 'mouseout',
			style : {
				width : 140,
				padding : 10,
				top : '0px',
				background : '#FFFFFF',
				color : 'black',
				textAlign : 'center',
				border : {
					width : 0,
					radius : 5,
					color : '#FFFFFF'
				},
				tip : 'bottomLeft',
				name : 'dark' // Inherit the rest of the attributes from the preset dark style
			}
		});

		$("#fotoborder3").qtip({
			content : 'Это третья фоторамка',
			position : {
				corner : {
					target : 'topMiddle',
					tooltip : 'bottomLeft'
				}
			},
			show : 'mouseover',
			hide : 'mouseout',
			style : {
				width : 150,
				padding : 10,
				top : '0px',
				background : '#FFFFFF',
				color : 'black',
				textAlign : 'center',
				border : {
					width : 0,
					radius : 5,
					color : '#FFFFFF'
				},
				tip : 'bottomLeft',
				name : 'dark' // Inherit the rest of the attributes from the preset dark style
			}
		});

		$("#book1").qtip({
			content : 'Это жёсткий диск',
			position : {
				corner : {
					target : 'topMiddle',
					tooltip : 'bottomLeft'
				}
			},
			show : 'mouseover',
			hide : 'mouseout',
			style : {
				width : 120,
				padding : 10,
				top : '0px',
				background : '#FFFFFF',
				color : 'black',
				textAlign : 'center',
				border : {
					width : 0,
					radius : 5,
					color : '#FFFFFF'
				},
				tip : 'bottomLeft',
				name : 'dark' // Inherit the rest of the attributes from the preset dark style
			}
		});

		$("#book2").qtip({
			content : 'Это книга',
			position : {
				corner : {
					target : 'topMiddle',
					tooltip : 'bottomLeft'
				}
			},
			show : 'mouseover',
			hide : 'mouseout',
			style : {
				width : 120,
				padding : 10,
				top : '0px',
				background : '#FFFFFF',
				color : 'black',
				textAlign : 'center',
				border : {
					width : 0,
					radius : 5,
					color : '#FFFFFF'
				},
				tip : 'bottomLeft',
				name : 'dark' // Inherit the rest of the attributes from the preset dark style
			}
		});

		$('#items-div2 div').contextMenu('myMenu1', {

			bindings : {

				'open' : function(t) {

					//alert('Trigger was '+t.id+'\nAction was Open');

				},
				'email' : function(t) {

					//alert('Trigger was '+t.id+'\nAction was Email');

				},
				'save' : function(t) {

					//alert('Trigger was '+t.id+'\nAction was Save');

				},
				'close' : function(t) {

					//alert('Trigger was '+t.id+'\nAction was Delete');

				}
			}

		});

	});
}