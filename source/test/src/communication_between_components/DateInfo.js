import React from 'react';

export function buildDate() {
	// var date = new Date();
	// var year = date.getFullYear().toString();
	// var month = (date.getMonth() + 1).toString();
	// var day = date.getDate().toString();
	// var hour = date.getHours().toString();
	// var minute = date.getMinutes().toString();
	// var s = date.getSeconds().toString();
	// return year + '年' + month + '月' + day + '日' + ' ' + hour + ':' + minute + ":" + s;

	var date = new Date();
	var minute = date.getMinutes().toString();
	var s = date.getSeconds().toString();
	return minute + ':' + s;
}
