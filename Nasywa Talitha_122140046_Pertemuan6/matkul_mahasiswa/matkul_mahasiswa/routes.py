def includeme(config):
    """Add routes to the config."""
    config.add_static_view('static', 'static', cache_max_age=3600)

    # Default route
    config.add_route('home', '/')

    # Mata Kuliah routes
    config.add_route('matkul_list', '/api/matkul', request_method='GET')
    config.add_route('matkul_detail', '/api/matkul/{id}', request_method='GET')
    config.add_route('matkul_add', '/api/matkul', request_method='POST')
    config.add_route('matkul_update', '/api/matkul/{id}', request_method='PUT')
    config.add_route('matkul_delete', '/api/matkul/{id}', request_method='DELETE')
