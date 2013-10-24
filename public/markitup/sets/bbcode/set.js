// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// BBCode tags example
// http://en.wikipedia.org/wiki/Bbcode
// ----------------------------------------------------------------------------
// Feel free to add more tags
// ----------------------------------------------------------------------------
mySettings = {
	previewParserPath:	'', // path to your BBCode parser
	markupSet: [
		{name:'Bold', key:'B', openWith:'[b]', closeWith:'[/b]', className:"halflings-icon bold"},
		{name:'Italic', key:'I', openWith:'[i]', closeWith:'[/i]', className:"halflings-icon italic"},
		{name:'Underline', key:'U', openWith:'[u]', closeWith:'[/u]', className:"halflings-icon text-width"},
		{separator:'---------------' },
		{name:'Picture', key:'P', replaceWith:'[img][![Url]!][/img]', className:"halflings-icon picture"},
		{name:'Link', key:'L', openWith:'[url=[![Url]!]]', closeWith:'[/url]', placeHolder:'Your text to link here...', className:"halflings-icon link"},
		{separator:'---------------' },
		{name:'Size', key:'S', openWith:'[size=[![Text size]!]]', closeWith:'[/size]', className:"halflings-icon text-height",
		dropMenu :[
			{name:'Big', openWith:'[size=24]', closeWith:'[/size]', className:"halflings-icon font" },
			{name:'Normal', openWith:'[size=16]', closeWith:'[/size]', className:"halflings-icon font"  },
			{name:'Small', openWith:'[size=12]', closeWith:'[/size]', className:"halflings-icon font"  }
		]},
		{	name:'Colors', 
			className:'tint',
			openWith:'[color=[![Color]!]]', 
			closeWith:'[/color]', 
				dropMenu: [
					{name:'Yellow',	openWith:'[color=yellow]', 	closeWith:'[/color]', className:"col1-1" },
					{name:'Orange',	openWith:'[color=orange]', 	closeWith:'[/color]', className:"col1-2" },
					{name:'Red', 	openWith:'[color=red]', 	closeWith:'[/color]', className:"col1-3" },
					
					{name:'Blue', 	openWith:'[color=blue]', 	closeWith:'[/color]', className:"col2-1" },
					{name:'Purple', openWith:'[color=purple]', 	closeWith:'[/color]', className:"col2-2" },
					{name:'Green', 	openWith:'[color=green]', 	closeWith:'[/color]', className:"col2-3" },
					
					{name:'White', 	openWith:'[color=white]', 	closeWith:'[/color]', className:"col3-1" },
					{name:'Gray', 	openWith:'[color=gray]', 	closeWith:'[/color]', className:"col3-2" },
					{name:'Black',	openWith:'[color=black]', 	closeWith:'[/color]', className:"col3-3" }
				]
		},
		{separator:'---------------' },
		{name:'Bulleted list', openWith:'[list]\n', closeWith:'\n[/list]', className:"halflings-icon th-list"},
		{name:'Numeric list', openWith:'[list=[![Starting number]!]]\n', closeWith:'\n[/list]', className:"halflings-icon list-alt"},
		{name:'List item', openWith:'[*] ', className:"halflings-icon list"},
		{separator:'---------------' },
		{name:'Quotes', openWith:'[quote]', closeWith:'[/quote]', className:"halflings-icon comments"},
		{separator:'---------------' },
		{name:'Clean', className:"clean", replaceWith:function(markitup) { return markitup.selection.replace(/\[(.*?)\]/g, "") } },
		{name:'Preview', className:"halflings-icon check", call:'preview' }
	]
};