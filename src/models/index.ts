// Aula: Criando o primeiro Resource
import { Category } from './Category'

// Aula: Relacioanamentos entre Modelos
import { Course } from './Course'

Category.hasMany(Course);
Course.belongsTo(Category);
// *************************************

export {
  Category,
  Course // Aula: Relacioanamentos entre Modelos
}