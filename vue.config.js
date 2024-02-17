module.exports = {
	assetsDir: 'static',
    // devServer: {
    //     proxy:"127.0.0.1:8000/"
    // },
    configureWebpack:{
		externals:{
	   	   'BMap': 'BMap',
	   	   'BMap_Symbol_SHAPE_POINT':'BMap_Symbol_SHAPE_POINT'
	    }
	}
}