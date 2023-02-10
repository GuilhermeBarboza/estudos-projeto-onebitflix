// Aula: Criando Seeders
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const [categories] = await queryInterface.sequelize.query('SELECT id FROM categories;')

    await queryInterface.bulkInsert('courses', [
      {name: 'Programador Full-Stack Javascript', synopsis: 'Quidem ut ea provident iste eaque. Ut repudiandae voluptatem voluptatum repellendus. Ut voluptate in laborum. Ut necessitatibus nemo unde odit dolores et. Eius ratione reiciendis et et provident.', featured: true, category_id: categories[0].id, created_at: new Date(), updated_at: new Date()},
      {name: 'Dominando a Linguagem Ruby', synopsis: 'Quidem ut ea provident iste eaque. Ut repudiandae voluptatem voluptatum repellendus. Ut voluptate in laborum. Ut necessitatibus nemo unde odit dolores et. Eius ratione reiciendis et et provident.', category_id: categories[0].id, created_at: new Date(), updated_at: new Date()},
      {name: 'Micro-Serviçoes com NodeJS', synopsis: 'Quidem ut ea provident iste eaque. Ut repudiandae voluptatem voluptatum repellendus. Ut voluptate in laborum. Ut necessitatibus nemo unde odit dolores et. Eius ratione reiciendis et et provident.', featured: true, category_id: categories[0].id, created_at: new Date(), updated_at: new Date()},
      {name: 'Criando APIs profissionais com Ruby on Rails', synopsis: 'Quidem ut ea provident iste eaque. Ut repudiandae voluptatem voluptatum repellendus. Ut voluptate in laborum. Ut necessitatibus nemo unde odit dolores et. Eius ratione reiciendis et et provident.', featured: true, category_id: categories[0].id, created_at: new Date(), updated_at: new Date()},
      {name: 'TDD na prática: Testando APIs NodeJS', synopsis: 'Quidem ut ea provident iste eaque. Ut repudiandae voluptatem voluptatum repellendus. Ut voluptate in laborum. Ut necessitatibus nemo unde odit dolores et. Eius ratione reiciendis et et provident.', featured: true, category_id: categories[0].id, created_at: new Date(), updated_at: new Date()},
      {name: 'TDD na prática: Testando aplicações React', synopsis: 'Quidem ut ea provident iste eaque. Ut repudiandae voluptatem voluptatum repellendus. Ut voluptate in laborum. Ut necessitatibus nemo unde odit dolores et. Eius ratione reiciendis et et provident.', featured: true, category_id: categories[1].id, created_at: new Date(), updated_at: new Date()},
      {name: 'Especialista Front-End: VueJS', synopsis: 'Quidem ut ea provident iste eaque. Ut repudiandae voluptatem voluptatum repellendus. Ut voluptate in laborum. Ut necessitatibus nemo unde odit dolores et. Eius ratione reiciendis et et provident.', category_id: categories[1].id, created_at: new Date(), updated_at: new Date()},
      {name: 'Criandp sites e apps 3D com ThreeJS', synopsis: 'Quidem ut ea provident iste eaque. Ut repudiandae voluptatem voluptatum repellendus. Ut voluptate in laborum. Ut necessitatibus nemo unde odit dolores et. Eius ratione reiciendis et et provident.', category_id: categories[1].id, created_at: new Date(), updated_at: new Date()},
      {name: 'Dominando o Bootstrap 5', synopsis: 'Quidem ut ea provident iste eaque. Ut repudiandae voluptatem voluptatum repellendus. Ut voluptate in laborum. Ut necessitatibus nemo unde odit dolores et. Eius ratione reiciendis et et provident.', category_id: categories[1].id, created_at: new Date(), updated_at: new Date()},
      {name: 'Visual Studio Code para programadores Javascript', synopsis: 'Quidem ut ea provident iste eaque. Ut repudiandae voluptatem voluptatum repellendus. Ut voluptate in laborum. Ut necessitatibus nemo unde odit dolores et. Eius ratione reiciendis et et provident.', category_id: categories[2].id, created_at: new Date(), updated_at: new Date()},
      {name: 'Comandos do terminal Linux: Um Guia Completo', synopsis: 'Quidem ut ea provident iste eaque. Ut repudiandae voluptatem voluptatum repellendus. Ut voluptate in laborum. Ut necessitatibus nemo unde odit dolores et. Eius ratione reiciendis et et provident.', category_id: categories[2].id, created_at: new Date(), updated_at: new Date()},
      {name: 'Comunicação e Trabalho em Equipe', synopsis: 'Quidem ut ea provident iste eaque. Ut repudiandae voluptatem voluptatum repellendus. Ut voluptate in laborum. Ut necessitatibus nemo unde odit dolores et. Eius ratione reiciendis et et provident.', category_id: categories[3].id, created_at: new Date(), updated_at: new Date()},
      {name: 'Programador Nômade', synopsis: 'Quidem ut ea provident iste eaque. Ut repudiandae voluptatem voluptatum repellendus. Ut voluptate in laborum. Ut necessitatibus nemo unde odit dolores et. Eius ratione reiciendis et et provident.', featured: true, category_id: categories[4].id, created_at: new Date(), updated_at: new Date()},
      {name: 'O Guia do Programador Freelancer', synopsis: 'Quidem ut ea provident iste eaque. Ut repudiandae voluptatem voluptatum repellendus. Ut voluptate in laborum. Ut necessitatibus nemo unde odit dolores et. Eius ratione reiciendis et et provident.', category_id: categories[4].id, created_at: new Date(), updated_at: new Date()},
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {})
  }
};
