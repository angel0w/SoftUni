function jsonToHtmlTable (json) {
    let parsed = JSON.parse(json);

    let columnNames = Object.keys(parsed[0]);
    let values = parsed.map(obj => Object.values(obj));

    let result = '<table>\n';

    appendHeaders(columnNames);
    appendValues(values)

    result += '</table>\n';

    
    function appendHeaders(columnNames) {
        result += `   <tr>`;
        for (const columnName of columnNames) {
            result += `<th>${columnName}</th>`;
        }
        result += `</tr>\n`;
    }
    
    function appendValues(values) {
        for (const value of values) {
            result += `   <tr>`;
            result += `<td>${escape(value[0])}</td><td>${escape(value[1])}</td>`;
            result += `</tr>\n`;
        }
    }

    function escape (value) {
        return value.toString().replace('<', '&lt;').replace('>','&gt');
    }

    console.log(result);
}
jsonToHtmlTable(`[{"Name":"Stamat",

"Score":5.5},

{"Name":"Rumen",

"Score":6}]`);
