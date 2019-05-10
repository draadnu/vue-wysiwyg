module.exports = {
	title: "removeFormat",
	customAction (utils) {
        let sel = utils.getHTMLOfSelection();
        
         // get a plain representation of the clipboard
		sel = sel.replace(/\<th\>/ig, '<td>');
		sel = sel.replace(/\<\/th\>/ig, '</td>');
		sel = sel.replace(/\<\h([0-9])\>/ig, '<br /><h$1>');
		sel = sel.replace(/MsoNormal/ig, '');

		sel = striptags(sel, ['br', 'ol', 'ul', 'li', 'table', 'tr', 'th', 'td', 'p', 'span']);
		sel = striptags(sel, ['br', 'ol', 'ul', 'li', 'table', 'tr', 'th', 'td'], '<br />');
		
		/*while (sel.indexOf('<br /><br /><br />') !== -1) {
			sel.replace('<br /><br /><br />', '<br /><br />');
		}
		while (sel.indexOf('<br><br><br>') !== -1) {
			sel.replace('<br><br><br>', '<br><br>');
		}

		while (sel.indexOf('<br>') == 0) {
			sel = sel.substr(4);
		}

		while (sel.indexOf('<br />') == 0) {
			sel = sel.substr(6);
		}
		*/
        // wrap selection in custom html tags
        return [
            ["insertHTML", `${sel}`, true],
        ]
    },
	description: "Remove all formatting.",
	icon: '<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M832 1408l336-384h-768l-336 384h768zm1013-1077q15 34 9.5 71.5t-30.5 65.5l-896 1024q-38 44-96 44h-768q-38 0-69.5-20.5t-47.5-54.5q-15-34-9.5-71.5t30.5-65.5l896-1024q38-44 96-44h768q38 0 69.5 20.5t47.5 54.5z"/></svg>'
}