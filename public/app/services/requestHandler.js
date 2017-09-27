 app.service('requestHandler', function($http) {
		this.request = function(callback, url, method = 'GET', data = {}, headers = {}){
			var res = $http({ method: method, url: url, headers: headers, data: data});
			res.success(function(data, status, headers, config) {
				return callback(data);
			});
			res.error(function(data, status, headers, config) {
				return callback(data);
			});
		}
	});	

