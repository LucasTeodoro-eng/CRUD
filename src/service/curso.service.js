import cursoRepository from '../repository/curso.repository.js';

async function createCursoService(novoCurso) {
    const { nome, area, nivel, modalidade } = novoCurso;
    if (!nome || !area || !nivel || !modalidade) {
        throw new Error('Os campos nome, area, nivel e modalidade são obrigatórios!');
    }
    const curso = await cursoRepository.createCursoRepository(novoCurso);
    if (!curso) {
        throw new Error('Erro na criação do curso!');
    }
    return curso;
}

export default {
    createCursoService,
};
