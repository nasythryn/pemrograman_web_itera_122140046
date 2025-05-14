from pyramid.view import view_config
from pyramid.httpexceptions import (
    HTTPFound,
    HTTPNotFound,
    HTTPBadRequest,
)
from ..models.matkul import MataKuliah


@view_config(route_name='matkul_list', renderer='json')
def matkul_list(request):
    dbsession = request.dbsession
    matkul = dbsession.query(MataKuliah).all()
    return {'matkul': [m.to_dict() for m in matkul]}


@view_config(route_name='matkul_detail', renderer='json')
def matkul_detail(request):
    dbsession = request.dbsession
    matkul_id = request.matchdict['id']
    matkul = dbsession.query(MataKuliah).filter_by(id=matkul_id).first()

    if matkul is None:
        return HTTPNotFound(json_body={'error': 'Mata kuliah tidak ditemukan'})

    return {'mata_kuliah': matkul.to_dict()}


@view_config(route_name='matkul_add', request_method='POST', renderer='json')
def matkul_add(request):
    try:
        json_data = request.json_body
        required_fields = ['kode_mk', 'nama_mk']
        for field in required_fields:
            if field not in json_data:
                return HTTPBadRequest(json_body={'error': f'Field {field} wajib diisi'})

        matkul = MataKuliah(
            kode_mk=json_data['kode_mk'],
            nama_mk=json_data['nama_mk'],
            sks=json_data.get('sks'),
            semester=json_data.get('semester')
        )

        dbsession = request.dbsession
        dbsession.add(matkul)
        dbsession.flush()

        return {'success': True, 'matkul': matkul.to_dict()}

    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})

@view_config(route_name='matkul_update', request_method='PUT', renderer='json')
def matkul_update(request):
    dbsession = request.dbsession
    matkul_id = request.matchdict['id']
    matkul = dbsession.query(MataKuliah).filter_by(id=matkul_id).first()

    if matkul is None:
        return HTTPNotFound(json_body={'error': 'Mata kuliah tidak ditemukan'})

    try:
        json_data = request.json_body

        if 'kode_mk' in json_data:
            matkul.kode_mk = json_data['kode_mk']
        if 'nama_mk' in json_data:
            matkul.nama_mk = json_data['nama_mk']
        if 'sks' in json_data:
            matkul.sks = json_data['sks']
        if 'semester' in json_data:
            matkul.semester = json_data['semester']

        return {'success': True, 'matkul': matkul.to_dict()}

    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})


@view_config(route_name='matkul_delete', request_method='DELETE', renderer='json')
def matkul_delete(request):
    dbsession = request.dbsession
    matkul_id = request.matchdict['id']
    matkul = dbsession.query(MataKuliah).filter_by(id=matkul_id).first()

    if matkul is None:
        return HTTPNotFound(json_body={'error': 'Mata kuliah tidak ditemukan'})

    dbsession.delete(matkul)

    return {'success': True, 'message': f'Mata kuliah dengan id {matkul_id} berhasil dihapus'}