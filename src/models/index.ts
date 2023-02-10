// Aula: Criando o primeiro Resource
import { Category } from './Category'

// Aula: Relacioanamentos entre Modelos
import { Course } from './Course'

// Aula: Tabela de Episodios
import { Episode } from './Episode';

Category.hasMany(Course);
Course.belongsTo(Category);
Course.hasMany(Episode);
Episode.belongsTo(Course)
// *************************************

export {
  Category,
  Course, // Aula: Relacioanamentos entre Modelos
  Episode
}