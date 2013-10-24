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
	previewParserPath:	'/bbcode/preview', // path to your BBCode parser
	markupSet: [
		{name:'Bold', key:'B', openWith:'[b]', closeWith:'[/b]', className:"halflings-icon bold"},
		{name:'Italic', key:'I', openWith:'[i]', closeWith:'[/i]', className:"halflings-icon italic"},
		//{name:'Underline', key:'U', openWith:'[u]', closeWith:'[/u]', className:"halflings-icon text-width"},
		{separator:'---------------' },
		{name:'Picture', key:'P', replaceWith:'[img][![Url]!][/img]', className:"halflings-icon picture"},
		{name:'Link', key:'L', openWith:'[url=[![Url]!]]', closeWith:'[/url]', placeHolder:'Your text to link here...', className:"halflings-icon link"},
		{separator:'---------------' },
		{name:'Size', key:'S', openWith:'[size=[![Text size]!]]', closeWith:'[/size]', className:"halflings-icon text-height",
		dropMenu :[
			{name:'H1', openWith:'[h1]', closeWith:'[/h1]', className:"halflings-icon font" },
			{name:'H2', openWith:'[h2]', closeWith:'[/h2]', className:"halflings-icon font"  },
			{name:'H3', openWith:'[h3]', closeWith:'[/h3]', className:"halflings-icon font"  },
			{name:'H4', openWith:'[h4]', closeWith:'[/h4]', className:"halflings-icon font"  },
			{name:'H5', openWith:'[h5]', closeWith:'[/h5]', className:"halflings-icon font"  },
			{name:'H6', openWith:'[h6]', closeWith:'[/h6]', className:"halflings-icon font"  }
		]},
		{	name:'Colors', 
			className:'halflings-icon tint',
			openWith:'[color=[![Color]!]]', 
			closeWith:'[/color]', 
				dropMenu: [
					{name:'Red', 	openWith:'[color=red]', 	closeWith:'[/color]', className:"halflings-icon tint col1-3" },
					{name:'Orange',	openWith:'[color=orange]', 	closeWith:'[/color]', className:"halflings-icon tint col1-2" },
					{name:'Yellow',	openWith:'[color=yellow]', 	closeWith:'[/color]', className:"halflings-icon tint col1-1" },
					{name:'Green', 	openWith:'[color=green]', 	closeWith:'[/color]', className:"halflings-icon tint col2-3" },
					{name:'Blue', 	openWith:'[color=blue]', 	closeWith:'[/color]', className:"halflings-icon tint col2-1" },
					{name:'Purple', openWith:'[color=purple]', 	closeWith:'[/color]', className:"halflings-icon tint col2-2" },

					{name:'Black',	openWith:'[color=black]', 	closeWith:'[/color]', className:"halflings-icon tint col3-3" },
					{name:'Gray', 	openWith:'[color=gray]', 	closeWith:'[/color]', className:"halflings-icon tint col3-2" },
					{name:'White', 	openWith:'[color=white]', 	closeWith:'[/color]', className:"halflings-icon tint col3-1" }
				]
		},
		{separator:'---------------' },
		{name:'Bulleted list', openWith:'[list]\n', closeWith:'\n[/list]', className:"halflings-icon th-list"},
		{name:'Numeric list', openWith:'[list=[![Starting number]!]]\n', closeWith:'\n[/list]', className:"halflings-icon list-alt"},
		{name:'List item', openWith:'[*] ', className:"halflings-icon list"},
		{separator:'---------------' },
		{name:'Quotes', openWith:'[quote]', closeWith:'[/quote]', className:"halflings-icon comments"},
		{separator:'---------------' },
		{name:'Clean', className:"halflings-icon wrench", replaceWith:function(markitup) { return markitup.selection.replace(/\[(.*?)\]/g, "") } },
		{name:'Preview', className:"halflings-icon check", call:'preview' }
	]
};