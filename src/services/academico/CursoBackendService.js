import apiAcademico from "../apiAcademico"

class CursoBackendService {
    getAll(){
        return apiAcademico.get('cursos')
    }
    
    get(id){
        return apiAcademico.get('cursos/' + id)
    }
    
    create(dados){
        return apiAcademico.post('cursos', dados)
    }
    
    update(id, dados){
        return apiAcademico.put('cursos/' + id, dados)
    }

    delete(id){
        return apiAcademico.delete('cursos/' + id)
    }
}

export default new CursoBackendService()