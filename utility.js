function createQueryStrings(query) {
    var result = "";
    var first = true;
    for (var name in query) {
        if (first)
            first = false;
        else
            result += "&";
		//appending all
        result += name + "=" + query[name];
    }
    return result;
	// return "empty"
}

function getQueryStrings() {

    var url = document.location;
    var queryString = url.search.substring(1);
    if (queryString == "")
        return {};
    var queries = queryString.split("&");
    var result = {};
    for (var i = 0; i < queries.length; i++) {
        var splitting = queries[i].split("=");
        var name = splitting[0];
        var value = splitting[1];
        result[name] = value;
    }
    return result;
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};