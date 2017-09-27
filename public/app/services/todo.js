app.factory('todo', function(requestHandler) {
	return {
		add : function (data, callback) {
				return requestHandler.request(callback, '/task/', 'POST', data);	
		},
		remove : function (id, callback) {
			return requestHandler.request(callback, '/task/'+id, 'DELETE');	
		},
		get : function (callback) {
			return requestHandler.request(callback, '/task/');	
		},
		complete : function (data, callback) {
			return requestHandler.request(callback, '/task/', 'PUT', data);	
		}
	}
});
