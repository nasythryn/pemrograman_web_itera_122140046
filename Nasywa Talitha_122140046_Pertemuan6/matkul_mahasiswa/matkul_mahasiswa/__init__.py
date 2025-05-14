from pyramid.config import Configurator


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    with Configurator(settings=settings) as config:
        config.include('pyramid_jinja2')  # Untuk templating
        config.include('pyramid_tm')     # Untuk manajemen transaksi
        config.include('.models')        # Untuk setup database session
        config.include('.routes')        # Untuk mendefinisikan routing
        config.scan()
    return config.make_wsgi_app()
