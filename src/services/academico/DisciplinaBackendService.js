import apiAcademico from "../apiAcademico"

class DisciplinaBackendService {
    getAll(){
        return apiAcademico.get('disciplinas')
    }
    
    get(id){
        return apiAcademico.get('disciplinas/' + id)
    }
    
    create(dados){
        return apiAcademico.post('disciplinas', dados)
    }
    
    update(id, dados){
        return apiAcademico.put('disciplinas/' + id, dados)
    }

    delete(id){
        return apiAcademico.delete('disciplinas/' + id)
    }
}

export default new DisciplinaBackendService()