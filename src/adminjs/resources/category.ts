// Aula: Criando o primeiro Resource
import { ResourceOptions } from 'adminjs'

export const categoryResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'position'],
  filterProperties: ['name', 'position', 'cratedAt', 'updatedAt'],
  listProperties: ['id', 'name', 'position'],
  showProperties: ['id', 'name', 'position', 'createdAt', 'updatedAt']
}